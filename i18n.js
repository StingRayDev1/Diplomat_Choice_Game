const DiplomatI18N = (function () {
  const ui = {
    en: {
      tagline: 'A Diplomatic Interactive Story',
      begin: '▶ Begin Mission',
      how: 'How to Play',
      settings: 'Settings',
      lb_btn: '🏆 CLASS LEADERBOARD',
      trust: 'Trust',
      diplomacy: 'Diplomacy',
      knowledge: 'Knowledge',
      cooperation: 'Cooperation',
      scene_intro: 'Introduction',
      scene_results: 'Summit Results',
      scene_secret: 'Secret Ending',
      brief_head: 'MISSION BRIEFING',
      p1: 'India and France share a longstanding relationship built on diplomacy, defence, science, culture and education.',
      p2: 'You are a young Indian diplomat preparing for an important India–France summit.',
      p3: 'Before the summit begins, you will meet three French representatives and discuss the future of this partnership.',
      e1: 'Your responses will shape how the relationship develops.',
      e2: 'Choose carefully. There are no obvious right answers — only consequences.',
      card1: '01 — FRENCH AMBASSADOR',
      card1s: 'Diplomacy & Strategic Relations',
      card2: '02 — FRENCH SPACE SCIENTIST',
      card2s: 'Science, Technology & Space',
      card3: '03 — FRENCH CULTURAL REPRESENTATIVE',
      card3s: 'Culture, Education & People',
      start: '▶ START MISSION',
      continue: 'Continue ▶',
      recorded: '✓ Decision Recorded',
      skip: 'Skip ▸',
      how1: 'You represent India in a series of conversations before the India–France summit.',
      how2: 'Speak with an ambassador, a space scientist and a cultural representative, then advise the Prime Minister.',
      how3: 'Choose your responses carefully. There are 8 decisions and no way back.',
      how4: 'Watch the four bars at the top: Trust, Diplomacy, Knowledge and Cooperation. Your final diplomatic profile decides how the summit ends.',
      got_it: 'Got it',
      close: 'Close',
      volume: 'Volume',
      music_on: 'Music: On',
      music_off: 'Music: Off',
      sfx_on: 'Effects: On',
      sfx_off: 'Effects: Off',
      badge: '★ SECRET ENDING UNLOCKED ★',
      play_again: '↻ Play Again',
      return_site: 'RETURN TO WEBSITE',
      score: 'YOUR PARTNERSHIP SCORE: {score}/100',
      nickname: 'Enter your nickname:',
      nickname_ph: 'Nickname',
      submit: 'SUBMIT SCORE',
      submitting: 'Submitting…',
      view_lb: 'VIEW CLASS LEADERBOARD',
      inserted: 'Score submitted! Your rank: #{rank}',
      improved: 'New personal best! Your rank: #{rank}',
      kept: 'Your best score ({best}/100) is higher, so it was kept. Your rank: #{rank}',
      duplicate: 'This run was already submitted. Your rank: #{rank}',
      err_nick: 'Choose a nickname of 2–16 characters: letters, numbers, spaces, _ or -.',
      err_config: 'The class leaderboard is not connected yet. Ask your teacher to finish the setup.',
      lb_loading: 'Loading leaderboard…',
      lb_note: 'Players are ranked by their best partnership score. Ties are ordered by the earlier result.',
      lb_rank: 'CHECK MY RANK',
      lb_back: 'BACK',
      end1: 'SUMMIT SUCCESSFUL',
      end2: 'STRATEGIC PARTNERSHIP',
      end3: 'PROMISING PARTNERSHIP',
      end4: 'DIPLOMATIC SETBACK',
      disaster: 'DIPLOMATIC DISASTER',
      profile_score: 'Partnership Score'
    },

    fr: {
      tagline: 'Une histoire diplomatique interactive',
      begin: '▶ Commencer la mission',
      how: 'Comment jouer',
      settings: 'Paramètres',
      lb_btn: '🏆 CLASSEMENT DE LA CLASSE',
      trust: 'Confiance',
      diplomacy: 'Diplomatie',
      knowledge: 'Connaissances',
      cooperation: 'Coopération',
      scene_intro: 'Introduction',
      scene_results: 'Résultats du sommet',
      scene_secret: 'Fin secrète',
      brief_head: 'BRIEFING DE MISSION',
      p1: 'L’Inde et la France entretiennent depuis longtemps des relations fondées sur la diplomatie, la défense, les sciences, la culture et l’éducation.',
      p2: 'Vous êtes un jeune diplomate indien qui se prépare à un important sommet entre l’Inde et la France.',
      p3: 'Avant le début du sommet, vous rencontrerez trois représentants français pour discuter de l’avenir de ce partenariat.',
      e1: 'Vos réponses influenceront l’évolution de cette relation.',
      e2: 'Choisissez avec soin. Il n’existe pas de réponse parfaitement évidente, seulement des conséquences.',
      card1: '01 — AMBASSADEUR DE FRANCE',
      card1s: 'Diplomatie et relations stratégiques',
      card2: '02 — SCIENTIFIQUE SPATIAL FRANÇAIS',
      card2s: 'Sciences, technologie et espace',
      card3: '03 — REPRÉSENTANT CULTUREL FRANÇAIS',
      card3s: 'Culture, éducation et échanges',
      start: '▶ COMMENCER LA MISSION',
      continue: 'Continuer ▶',
      recorded: '✓ Décision enregistrée',
      skip: 'Passer ▸',
      how1: 'Vous représentez l’Inde lors d’une série de conversations avant le sommet entre l’Inde et la France.',
      how2: 'Discutez avec un ambassadeur, un scientifique spatial et un représentant culturel, puis conseillez le Premier ministre.',
      how3: 'Choisissez vos réponses avec soin. Vous prendrez huit décisions sans possibilité de revenir en arrière.',
      how4: 'Observez les quatre indicateurs en haut de l’écran : Confiance, Diplomatie, Connaissances et Coopération. Votre profil diplomatique final déterminera l’issue du sommet.',
      got_it: 'Compris',
      close: 'Fermer',
      volume: 'Volume',
      music_on: 'Musique : activée',
      music_off: 'Musique : désactivée',
      sfx_on: 'Effets : activés',
      sfx_off: 'Effets : désactivés',
      badge: '★ FIN SECRÈTE DÉBLOQUÉE ★',
      play_again: '↻ Rejouer',
      return_site: 'RETOURNER AU SITE',
      score: 'VOTRE SCORE DE PARTENARIAT : {score}/100',
      nickname: 'Entrez votre pseudonyme :',
      nickname_ph: 'Pseudonyme',
      submit: 'ENVOYER LE SCORE',
      submitting: 'Envoi en cours…',
      view_lb: 'VOIR LE CLASSEMENT',
      inserted: 'Score envoyé ! Votre rang : nº {rank}',
      improved: 'Nouveau record personnel ! Votre rang : nº {rank}',
      kept: 'Votre meilleur score ({best}/100) a été conservé. Votre rang : nº {rank}',
      duplicate: 'Cette partie a déjà été enregistrée. Votre rang : nº {rank}',
      err_nick: 'Choisissez un pseudonyme de 2 à 16 caractères : lettres, chiffres, espaces, _ ou -.',
      err_config: 'Le classement de la classe n’est pas encore connecté. Demandez à votre professeur de terminer la configuration.',
      lb_loading: 'Chargement du classement…',
      lb_note: 'Les joueurs sont classés selon leur meilleur score de partenariat. En cas d’égalité, le résultat le plus ancien est prioritaire.',
      lb_rank: 'VÉRIFIER MON RANG',
      lb_back: 'RETOUR',
      end1: 'SOMMET RÉUSSI',
      end2: 'PARTENARIAT STRATÉGIQUE',
      end3: 'PARTENARIAT PROMETTEUR',
      end4: 'REVERS DIPLOMATIQUE',
      disaster: 'CATASTROPHE DIPLOMATIQUE',
      profile_score: 'Score de partenariat'
    }
  };

  const fr = {
    scenes: {
      ambassador: {
        name: 'Scène 1 · Ambassadeur de France',
        transition: 'Votre rencontre avec l’ambassadeur est terminée. Vous vous dirigez maintenant vers le centre de recherche spatiale.',
        dialogues: [
          {
            line: 'Bienvenue. L’Inde et la France travaillent ensemble depuis des décennies. Selon vous, qu’est-ce qui rend cette relation si solide ?',
            choices: {
              A1: ['La confiance que nous avons construite au fil des années.', 'Cette confiance a permis à nos deux pays de travailler ensemble malgré les changements au fil du temps.'],
              A2: ['Nos intérêts économiques et stratégiques communs.', 'Ces intérêts sont importants, mais notre relation va bien au-delà des avantages pratiques.'],
              A3: ['Nos gouvernements veulent généralement les mêmes choses.', 'Des objectifs communs sont utiles, mais ils ne garantissent pas à eux seuls un partenariat solide.'],
              H1: ['Nous devrions peut-être régler tous les problèmes diplomatiques autour d’une pizza et de croissants.', 'Pizza et croissants ? Voilà un menu tentant, mais les traités se signent rarement avec des miettes sur la table.']
            }
          },
          {
            line: 'Intéressant. Un partenariat doit continuer à évoluer. Dans quels domaines devrions-nous approfondir notre coopération ?',
            choices: {
              A4: ['La défense et la sécurité stratégique.', 'La coopération en matière de sécurité joue certainement un rôle important dans nos relations.'],
              A5: ['La technologie et l’innovation.', 'Un choix passionnant. Le progrès scientifique peut créer des possibilités pour nos deux pays.'],
              A6: ['La culture et l’éducation.', 'Excellent. Les relations internationales solides doivent aussi rapprocher les peuples.']
            }
          }
        ]
      },

      scientist: {
        name: 'Scène 2 · Scientifique spatial français',
        transition: 'Après avoir discuté de la coopération spatiale, vous partez rencontrer un représentant du conseil culturel français.',
        dialogues: [
          {
            line: 'L’Inde et la France coopèrent dans le domaine spatial depuis des années. Sur quoi devrait porter le prochain chapitre de ce partenariat ?',
            choices: {
              S1: ['Des missions conjointes et de la recherche scientifique.', 'C’est prometteur. Les missions conjointes peuvent nous aider à accomplir davantage ensemble.'],
              S2: ['L’observation de la Terre et la recherche climatique.', 'Exactement. L’observation de la Terre peut nous aider à comprendre les défis environnementaux.'],
              S3: ['Développer nos technologies séparément.', 'La recherche indépendante a de la valeur, mais nous ne devons pas négliger les avantages de la collaboration.'],
              H2: ['Et si nous lancions un satellite en forme de baguette géante ?', 'Un satellite en forme de baguette ? Son coefficient de traînée serait… remarquable. Passons à autre chose.']
            }
          },
          {
            line: 'Le progrès scientifique exige davantage que de l’ambition. Pourquoi la coopération internationale est-elle si précieuse ?',
            choices: {
              S4: ['Nous pouvons réunir nos compétences scientifiques.', 'Exactement. La mise en commun des compétences nous permet d’aborder les problèmes sous différents angles.'],
              S5: ['Nous pouvons partager les coûts et les technologies.', 'Une approche pratique. Le partage des ressources peut rendre possibles des projets ambitieux.'],
              S6: ['Chaque pays devrait protéger ses intérêts en priorité.', 'Les intérêts nationaux sont importants, mais un isolement excessif peut limiter le progrès scientifique.']
            }
          }
        ]
      },

      culture: {
        name: 'Scène 3 · Représentant culturel',
        transition: 'Vos rencontres sont terminées. Il est maintenant temps de participer au sommet entre l’Inde et la France.',
        dialogues: [
          {
            line: 'Les accords entre gouvernements sont importants, mais les relations entre les peuples le sont aussi. Comment les jeunes Indiens et Français peuvent-ils se rapprocher ?',
            choices: {
              C1: ['Développer les programmes d’échange étudiant.', 'Les échanges étudiants peuvent créer des amitiés et des liens durables.'],
              C2: ['Organiser des festivals culturels et des programmes d’échange.', 'Magnifique. La culture permet aux gens de mieux se comprendre.'],
              C3: ['Se concentrer plutôt sur la diplomatie officielle.', 'La diplomatie officielle est importante, mais elle ne peut pas remplacer les liens entre les citoyens.'],
              H3: ['Nous pourrions régler nos différences culturelles avec un concours de dégustation de baguettes.', 'Un concours de dégustation de baguettes ? Je crains que cela ne détermine que le plus affamé.']
            }
          },
          {
            line: 'Et selon vous, que peuvent apporter ces échanges culturels aux jeunes ?',
            choices: {
              C4: ['Une meilleure compréhension d’une autre culture.', 'Exactement. Comprendre une autre culture est la première étape pour la respecter.'],
              C5: ['De nouvelles amitiés et des expériences partagées.', 'Et ces amitiés peuvent durer bien plus longtemps que n’importe quel accord officiel.'],
              C6: ['Une occasion de promouvoir leur propre pays.', 'La représentation culturelle est précieuse, mais un véritable échange doit fonctionner dans les deux sens.']
            }
          }
        ]
      },

      summit: {
        name: 'Scène 4 · Sommet final Inde–France',
        transition: null,
        dialogues: [
          {
            line: 'Vous avez échangé avec des diplomates, des scientifiques et des représentants culturels. Nous avons maintenant besoin de votre recommandation. Quelles devraient être les priorités de l’Inde et de la France ?',
            choices: {
              F1: ['La défense et la sécurité.', 'La sécurité constitue une base importante de notre partenariat stratégique.'],
              F2: ['L’espace, les sciences et la technologie.', 'L’innovation peut ouvrir un avenir passionnant à nos deux pays.'],
              F3: ['La culture, l’éducation et les liens entre les peuples.', 'Les peuples doivent rester au cœur des relations internationales.'],
              F4: ['Un partenariat équilibré dans tous ces domaines.', 'Un partenariat global nous donne la possibilité de progresser ensemble.'],
              H4: ['Oublions la diplomatie. Faisons une comédie musicale Bollywood entre l’Inde et la France.', 'Une comédie musicale ? Une proposition originale. Mais ce discours devra rester… un peu moins chorégraphié.']
            }
          },
          {
            line: 'Une dernière question. Qu’est-ce qui devrait définir l’avenir des relations entre l’Inde et la France ?',
            choices: {
              F5: ['La confiance et le respect mutuel.', 'La confiance et le respect sont essentiels à tout partenariat durable.'],
              F6: ['L’ambition et une saine compétition.', 'L’ambition peut favoriser le progrès, mais la compétition seule ne peut pas construire des relations durables.'],
              F7: ['La coopération entre partenaires égaux.', 'Très bien dit. Les partenariats solides reposent sur des pays qui travaillent ensemble en tant qu’égaux.']
            }
          }
        ]
      }
    },

    endings: {
      1: {
        title: 'SOMMET RÉUSSI',
        text: 'Votre approche diplomatique équilibrée a renforcé le partenariat entre l’Inde et la France. La confiance, le dialogue et la coopération ont ouvert la voie à un avenir plus prometteur.'
      },
      2: {
        title: 'PARTENARIAT STRATÉGIQUE',
        text: 'Votre compréhension de la coopération internationale a créé des possibilités de progrès technologique et stratégique. Le partenariat a un avenir prometteur.'
      },
      3: {
        title: 'PARTENARIAT PROMETTEUR',
        text: 'Vos discussions ont permis au partenariat de progresser. Cependant, certaines possibilités de coopération plus étroite restent encore à explorer.'
      },
      4: {
        title: 'REVERS DIPLOMATIQUE',
        text: 'Vos décisions ont créé des difficultés pendant le sommet. Les deux pays devront poursuivre le dialogue et approfondir leur compréhension mutuelle pour renforcer leurs relations.'
      },
      diplomatic_disaster: {
        title: 'CATASTROPHE DIPLOMATIQUE',
        text: 'Votre carrière diplomatique a pris une tournure… créative.',
        text2: 'Les relations entre l’Inde et la France auront peut-être besoin d’un peu de temps pour se rétablir.'
      }
    }
  };

  function get(lang, key, vars) {
    let value = (ui[lang] && ui[lang][key]) || ui.en[key] || key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        value = value.replaceAll('{' + k + '}', vars[k]);
      });
    }
    return value;
  }

  function getScene(lang, sceneId) {
    if (lang === 'fr') return fr.scenes[sceneId] || null;
    return null;
  }

  function getDialogue(lang, sceneId, dialogueIndex) {
    const s = getScene(lang, sceneId);
    return s && s.dialogues[dialogueIndex] || null;
  }

  function getChoice(lang, sceneId, dialogueIndex, choiceId) {
    const d = getDialogue(lang, sceneId, dialogueIndex);
    return d && d.choices[choiceId] || null;
  }

  function getEnding(lang, endingId) {
    if (lang === 'fr') return fr.endings[endingId] || null;
    return null;
  }

  return {
    ui,
    get,
    getScene,
    getDialogue,
    getChoice,
    getEnding
  };
})();

