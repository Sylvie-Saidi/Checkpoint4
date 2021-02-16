const Aphelios2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Aphelios: {
      id: "Aphelios",
      key: "523",
      name: "Aphelios",
      title: "Arme des Lunaris",
      image: {
        full: "Aphelios.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "523000", num: 0, name: "default", chromas: false },
        {
          id: "523001",
          num: 1,
          name: "Aphelios héraut de la nuit",
          chromas: true,
        },
      ],
      lore:
        "Émergeant des ombres au clair de lune, Aphelios abat ceux qui voudraient anéantir sa foi sans un mot ; ses armes et sa précision mortelle parlent pour lui. Un poison qui le rend muet coule dans ses veines, mais il est constamment guidé par sa sœur, Alune. Depuis son temple lointain, elle lui confère un arsenal d'armes en pierre de lune. Tant que la lune brillera dans le ciel, Aphelios ne sera jamais seul.",
      blurb:
        "Émergeant des ombres au clair de lune, Aphelios abat ceux qui voudraient anéantir sa foi sans un mot ; ses armes et sa précision mortelle parlent pour lui. Un poison qui le rend muet coule dans ses veines, mais il est constamment guidé par sa sœur...",
      allytips: [
        "Chacune des armes d'Aphelios a ses propres forces. Essayez de trouver la situation parfaite pour vos armes actuelles. ",
      ],
      enemytips: [
        "Chacune des armes d'Aphelios a ses propres faiblesses. Essayez d'exploiter celles qui bénéficieront le plus à votre champion. Attention à l'arme gravitationnelle violette ! Elle peut vous immobiliser.",
      ],
      tags: ["Marksman"],
      partype: "Mana",
      info: { attack: 6, defense: 2, magic: 1, difficulty: 10 },
      stats: {
        hp: 500,
        hpperlevel: 86,
        mp: 348,
        mpperlevel: 42,
        movespeed: 325,
        armor: 28,
        armorperlevel: 3,
        spellblock: 26,
        spellblockperlevel: 0.5,
        attackrange: 550,
        hpregen: 3.25,
        hpregenperlevel: 0.55,
        mpregen: 6.5,
        mpregenperlevel: 0.4,
        crit: 0,
        critperlevel: 0,
        attackdamage: 57,
        attackdamageperlevel: 2.2,
        attackspeedperlevel: 2.1,
        attackspeed: 0.64,
      },
      spells: [
        {
          id: "ApheliosQ_ClientTooltipWrapper",
          name: "Compétences d'arme",
          description:
            "Aphelios a 5 compétences actives différentes, chacune liée à son arme principale :<br><br>Calibrum (fusil) : tire une balle à longue portée qui marque la cible et permet une seconde attaque à très longue portée.<br>Severum (pistolet-faux) : court rapidement en attaquant les ennemis proches avec les deux armes.<br>Gravitum (canon) : immobilise tous les ennemis ralentis par cette arme.<br>Infernum (lance-flammes) : frappe les ennemis dans un cône et les attaque avec l'arme secondaire.<br>Crescendum (chakram) : déploie une vigie qui attaque avec l'arme secondaire.<br>",
          tooltip: "",
          leveltip: { label: [], effect: [] },
          maxrank: 6,
          cooldown: [9, 9, 9, 9, 9, 9],
          cooldownBurn: "9",
          cost: [60, 60, 60, 60, 60, 60],
          costBurn: "60",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ],
          effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1450, 1450, 1450, 1450, 1450, 1450],
          rangeBurn: "1450",
          image: {
            full: "ApheliosQ_ClientTooltipWrapper.png",
            sprite: "spell1.png",
            group: "spell",
            x: 96,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "ApheliosW",
          name: "Phase",
          description:
            "Aphelios échange son arme principale avec son arme secondaire, ce qui remplace ses attaques de base ainsi que sa compétence active.",
          tooltip:
            "Échange les armes principale et secondaire pour s'équiper de : <b><i>Gravitum</i></b>.",
          leveltip: { label: [], effect: [] },
          maxrank: 6,
          cooldown: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
          cooldownBurn: "0.8",
          cost: [0, 0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ],
          effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
          vars: [],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [250, 250, 250, 250, 250, 250],
          rangeBurn: "250",
          image: {
            full: "ApheliosW.png",
            sprite: "spell1.png",
            group: "spell",
            x: 144,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "ApheliosE_ClientTooltipWrapper",
          name: "Système de file d'armes",
          description:
            "Aphelios n'a pas de troisième compétence. Cet emplacement lui indique la prochaine arme qu'Alune lui donnera. L'ordre des armes est toujours le même en début de partie, mais peut évoluer au fil de la partie. Lorsqu'une arme est à court de munitions, elle se place tout en bas de la rotation.",
          tooltip: "",
          leveltip: { label: [], effect: [] },
          maxrank: 6,
          cooldown: [0, 0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [0, 0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ],
          effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1000, 1000, 1000, 1000, 1000, 1000],
          rangeBurn: "1000",
          image: {
            full: "ApheliosE_ClientTooltipWrapper.png",
            sprite: "spell1.png",
            group: "spell",
            x: 192,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "ApheliosR",
          name: "Veille au clair de lune",
          description:
            "Envoie un rayon de lune concentré qui explose au contact d'un champion ennemi. Applique l'effet unique de l'arme principale d'Aphelios.",
          tooltip:
            "Envoie un rayon de lune concentré qui explose au contact d'un champion ennemi, infligeant <physicalDamage>{{ maxdamage }} pts de dégâts physiques</physicalDamage> dans la zone.<br /><br />Aphelios attaque ensuite tous les champions touchés avec son arme principale. <rules>(Applique les effets à l'impact. Les coups critiques infligent {{ critdamagemodtooltip }} de dégâts.)</rules> {{ Spell_ApheliosR_WeaponMod_{{ f1 }} }}",
          leveltip: {
            label: [
              "Dégâts",
              "Bonus du Calibrum : dégâts de la marque",
              "Bonus du Severum : soins",
              "Bonus de l'Infernum : dégâts",
            ],
            effect: [
              "{{ rbasedamage }} -> {{ rbasedamageNL }}",
              "{{ calibrumrmarkbonusdamage }} -> {{ calibrumrmarkbonusdamageNL }}",
              "{{ severumrhealbonus }} -> {{ severumrhealbonusNL }}",
              "{{ infernumrbonusdamagebase }} -> {{ infernumrbonusdamagebaseNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [120, 110, 100],
          cooldownBurn: "120/110/100",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1300, 1300, 1300],
          rangeBurn: "1300",
          image: {
            full: "ApheliosR.png",
            sprite: "spell1.png",
            group: "spell",
            x: 240,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Le Tueur et l'Oracle",
        description:
          "Aphelios manie 5 armes de Lunari forgées par sa sœur Alune. Il peut en porter deux à la fois : une principale et une secondaire. Chaque arme possède une attaque de base et une compétence active uniques. Les attaques et les compétences consomment les munitions de son arme. Lorsqu'il n'a plus de munitions, Aphelios jette son arme et Alune invoque la suivante (parmi les 5). ",
        image: {
          full: "ApheliosP.png",
          sprite: "passive0.png",
          group: "passive",
          x: 336,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Aphelios",
          title: "ApheliosARAM",
          map: "HA",
          mode: "ARAM",
          type: "riot",
          customTag: "",
          sortrank: 0,
          extensionPage: false,
          useObviousCheckmark: false,
          customPanel: null,
          blocks: [
            {
              type: "starting",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3184", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 3, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3006", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
              ],
            },
            {
              type: "offensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3094", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
                { id: "3095", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3026", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
              ],
            },
            {
              type: "consumables",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [{ id: "2140", count: 1, hideCount: false }],
            },
          ],
        },
        {
          champion: "Aphelios",
          title: "ApheliosFIRSTBLOOD",
          map: "HA",
          mode: "FIRSTBLOOD",
          type: "riot",
          customTag: "",
          extensionPage: false,
          customPanel: null,
          blocks: [
            {
              type: "starting",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "1056", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
              ],
            },
            {
              type: "early",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3057", count: 1, hideCount: false },
                { id: "1058", count: 1, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3020", count: 1, hideCount: false },
                { id: "3100", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
              ],
            },
            {
              type: "standard",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3157", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3165", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
              ],
            },
            {
              type: "consumables",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "2003", count: 1, hideCount: true },
                { id: "2043", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Aphelios",
          title: "ApheliosKINGPORO",
          map: "HA",
          mode: "KINGPORO",
          type: "riot",
          customTag: "",
          extensionPage: false,
          customPanel: null,
          blocks: [
            {
              type: "KingPoroSnax",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3680", count: 1, hideCount: false },
                { id: "3681", count: 1, hideCount: false },
                { id: "3682", count: 1, hideCount: false },
                { id: "3683", count: 1, hideCount: false },
                { id: "3684", count: 1, hideCount: false },
                { id: "3685", count: 1, hideCount: false },
              ],
            },
            {
              type: "starting",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3184", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 3, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3006", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
              ],
            },
            {
              type: "offensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3094", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
                { id: "3095", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3026", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
              ],
            },
            {
              type: "consumables",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [{ id: "2140", count: 1, hideCount: false }],
            },
          ],
        },
        {
          champion: "Aphelios",
          title: "ApheliosSR",
          map: "SR",
          mode: "CLASSIC",
          type: "riot",
          customTag: "",
          sortrank: 0,
          extensionPage: false,
          useObviousCheckmark: false,
          customPanel: null,
          blocks: [
            {
              type: "starting",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1055", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
              ],
            },
            {
              type: "early",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1038", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "3133", count: 1, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3508", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
              ],
            },
            {
              type: "offensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3031", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3046", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
              ],
            },
            {
              type: "consumables",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "2003", count: 1, hideCount: false },
                { id: "2140", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Aphelios",
          title: "Beginner",
          map: "SR",
          mode: "INTRO",
          type: "riot",
          customTag: "",
          sortrank: 0,
          extensionPage: false,
          useObviousCheckmark: false,
          customPanel: null,
          blocks: [
            {
              type: "beginner_starter",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: 4,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [{ id: "1055", count: 1, hideCount: false }],
            },
            {
              type: "beginner_starter",
              recMath: false,
              recSteps: false,
              minSummonerLevel: 5,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "2003", count: 1, hideCount: false },
                { id: "1055", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_advanced",
              recMath: true,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "OdinTrinketRevive",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1018", count: 1, hideCount: false },
                { id: "1042", count: 1, hideCount: false },
                { id: "3086", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_movementspeed",
              recMath: true,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_legendaryitem",
              recMath: true,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1038", count: 1, hideCount: false },
                { id: "1037", count: 1, hideCount: false },
                { id: "1018", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_morelegendaryitems",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3508", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Aphelios2;