/* ---------------- UI state ---------------- */
  const I = DiplomatI18N;
  // Shared leaderboard (Supabase). Fill these in (see README) or set window.DIPLOMAT_CONFIG before this script.
  // Only the project URL and the PUBLIC anon key belong here. Never the service_role key.
  const CFG = Object.assign({ supabaseUrl: '', supabaseAnonKey: '' }, window.DIPLOMAT_CONFIG || {});
  let lang = 'en';
  try { const s = localStorage.getItem('diplomat.lang'); if (s === 'fr' || s === 'en') lang = s; } catch (e) { }
  const T = (key, vars) => {
    let s = I.ui[lang][key]; if (s === undefined) s = I.ui.en[key]; if (s === undefined) return key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  };
  const X = {
    line: (si, di) => lang === 'fr' ? I.fr.lines[si][di] : L.SCENES[si].dialogues[di].line,
    choice: ch => lang === 'fr' ? I.fr.choices[ch.id].text : ch.text,
    reaction: ch => lang === 'fr' ? I.fr.choices[ch.id].reaction : ch.reaction,
    transition: si => lang === 'fr' ? I.fr.transitions[si] : L.SCENES[si].transition,
    scene: si => lang === 'fr' ? I.fr.scenes[si] : L.SCENES[si].name,
    plate: sp => lang === 'fr' ? I.fr.plates[sp] : CHARS[sp].name,
    ending: e => lang === 'fr' ? I.fr.endings[e] : L.ENDINGS[e]
  };
  const ENDING_ID = { 1: 'diplomatic_success', 2: 'strategic_partnership', 3: 'promising_partnership', 4: 'diplomatic_setback', diplomatic_disaster: 'diplomatic_disaster' };
  const endName = id => I.ui.en['end_' + id] ? T('end_' + id) : id;
  const NICK_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_ -]{2,16}$/;

  let state = L.freshState();
  let answered = false, spriteName = 'ambassador', expr = 'neutral', blink = false, talking = false, mouthFlip = false;
  let curBubble = null, label = { k: 'intro' }, resInfo = null;
  let runId = '', submitted = false, submitting = false, subMsg = null, myNick = '', myRank = null;
  let lbRows = null, lbState = 'idle', lbFrom = 'title', lbTok = 0;
  try { myNick = localStorage.getItem('diplomat.nick') || ''; } catch (e) { }
  const shown = { trust: 50, diplomacy: 50, knowledge: 50, cooperation: 50 };
  const KEYS = ['trust', 'diplomacy', 'knowledge', 'cooperation'];
  const sprite = $('dgSprite');
  const redraw = () => drawSprite(sprite, spriteName, expr, blink, talking && mouthFlip);
  setInterval(() => { if (talking) { mouthFlip = !mouthFlip; redraw(); } }, 130);
  (function blinker() { setTimeout(() => { blink = true; redraw(); setTimeout(() => { blink = false; redraw(); blinker(); }, 140); }, 2600 + Math.random() * 2200); })();

  function show(id, on) { $(id).classList.toggle('hidden', !on); }
  const SCREENS = ['dgTitle', 'dgBrief', 'dgPlay', 'dgTrans', 'dgRes', 'dgLB'];
  function only(id) { SCREENS.forEach(s => show(s, s === id)); $('dgStage').classList.toggle('tall', id === 'dgRes' || id === 'dgLB'); }
  function newRunId() {
    try { if (crypto.randomUUID) return crypto.randomUUID(); } catch (e) { }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  }
  const paintLabel = () => { $('dgScene').textContent = label.k === 'scene' ? X.scene(state.currentScene) : T('scene_' + label.k); };
  const setLabel = k => { label = { k }; paintLabel(); };

  function renderHud(animate) {
    KEYS.forEach(k => {
      const target = state[k]; $('b-' + k).style.width = target + '%';
      const el = $('v-' + k), from = shown[k];
