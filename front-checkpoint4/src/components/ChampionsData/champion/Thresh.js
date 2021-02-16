const Thresh = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Thresh: {
      id: "Thresh",
      key: "412",
      name: "Thresh",
      title: "Garde aux chaînes",
      image: {
        full: "Thresh.png",
        sprite: "champion3.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "412000", num: 0, name: "default", chromas: false },
        {
          id: "412001",
          num: 1,
          name: "Thresh des profondeurs",
          chromas: false,
        },
        { id: "412002", num: 2, name: "Thresh du championnat", chromas: true },
        { id: "412003", num: 3, name: "Thresh lune de sang", chromas: false },
        { id: "412004", num: 4, name: "SSW Thresh", chromas: false },
        {
          id: "412005",
          num: 5,
          name: "Thresh du pulsar sombre",
          chromas: true,
        },
        { id: "412006", num: 6, name: "Thresh de l'Ouest", chromas: true },
        { id: "412013", num: 13, name: "Thresh Pulsefire", chromas: false },
        {
          id: "412014",
          num: 14,
          name: "Thresh Pulsefire édition prestige",
          chromas: false,
        },
        { id: "412015", num: 15, name: "FPX Thresh", chromas: true },
      ],
      lore:
        "Sadique mais rusé, Thresh est un ambitieux esprit des Îles obscures. Autrefois le gardien d'innombrables secrets des arcanes, il fut terrassé par un pouvoir plus grand que la vie ou la mort, et il s'alimente maintenant des souffrances et des tourments qu'il inflige à d'autres avec une inventivité cruelle. Les souffrances de ses victimes ne se limitent pas à leur enveloppe mortelle, car Thresh fait agoniser leurs âmes, les emprisonnant pour l'éternité dans sa lanterne impie.",
      blurb:
        "Sadique mais rusé, Thresh est un ambitieux esprit des Îles obscures. Autrefois le gardien d'innombrables secrets des arcanes, il fut terrassé par un pouvoir plus grand que la vie ou la mort, et il s'alimente maintenant des souffrances et des tourments...",
      allytips: [
        "La communication est essentielle quand vous utilisez la lanterne de Thresh. Informez vos alliés de votre manière de l'utiliser.",
        "Les compétences Peine capitale et Fauchage peuvent être combinées pour effectuer de puissantes actions.",
        "Thresh peut aussi collecter les âmes des unités qu'il n'a pas tuées. Positionnez-vous de façon à être près des morts pour maximiser votre collecte.",
      ],
      enemytips: [
        "La compétence Peine capitale de Thresh a un long délai d'incantation. Dès que vous voyez l'incantation commencer, esquivez.",
        "Briser volontairement un mur de La cage peut aider un allié vulnérable à s'échapper.",
        "La défense et les dégâts de Thresh reposent sur sa capacité à collecter les âmes. Tentez de le punir lorsqu'il tente de les récupérer.",
      ],
      tags: ["Support", "Fighter"],
      partype: "Mana",
      info: { attack: 5, defense: 6, magic: 6, difficulty: 7 },
      stats: {
        hp: 560.52,
        hpperlevel: 93,
        mp: 273.92,
        mpperlevel: 44,
        movespeed: 335,
        armor: 28,
        armorperlevel: 0,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 450,
        hpregen: 7,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 56,
        attackdamageperlevel: 2.2,
        attackspeedperlevel: 3.5,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "ThreshQ",
          name: "Peine capitale",
          description:
            "Thresh ligote un ennemi dans ses chaînes et l'attire vers lui. Activer cette compétence une deuxième fois attire Thresh vers l'ennemi.",
          tooltip:
            "Thresh lance sa faux, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques à la première unité touchée, obtenant une <span class=\"coloree91d7\">vision pure</span> de cette unité et l'étourdissant avant de l'attirer vers lui pendant {{ e2 }} sec.<br /><br />Réactivez cette compétence pour que Thresh bondisse vers l'ennemi touché.<br /><br />Le délai de récupération de Peine capitale est réduit de {{ e4 }} sec si un ennemi est touché.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [20, 18, 16, 14, 12],
          cooldownBurn: "20/18/16/14/12",
          cost: [70, 70, 70, 70, 70],
          costBurn: "70",
          datavalues: {},
          effect: [
            null,
            [80, 120, 160, 200, 240],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [75, 75, 75, 75, 75],
            [3, 3, 3, 3, 3],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/120/160/200/240",
            "1.5",
            "75",
            "3",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.5, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1075, 1075, 1075, 1075, 1075],
          rangeBurn: "1075",
          image: {
            full: "ThreshQ.png",
            sprite: "spell12.png",
            group: "spell",
            x: 0,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "ThreshW",
          name: "Lien des ténèbres",
          description:
            "Thresh lance une lanterne qui protège les champions alliés proches contre les dégâts. Les alliés peuvent cliquer sur la lanterne pour se ruer vers Thresh.",
          tooltip:
            "Thresh lance sa lanterne à l'endroit ciblé. Si un allié clique dessus, Thresh les attire tous les deux vers lui.<br /><br />La lanterne confère à Thresh, et à 1 allié s'il s'approche, un bouclier qui dure {{ e5 }} sec et qui absorbe jusqu'à {{ e1 }} <span class=\"color0bf7de\">(+{{ f6 }})</span> pts de dégâts. Les PV du bouclier augmentent avec le nombre d'<span class=\"color0bf7de\">âmes</span> que Thresh a collectées.",
          leveltip: {
            label: [
              "PV du bouclier",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [22, 19.5, 17, 14.5, 12],
          cooldownBurn: "22/19.5/17/14.5/12",
          cost: [50, 55, 60, 65, 70],
          costBurn: "50/55/60/65/70",
          datavalues: {},
          effect: [
            null,
            [60, 100, 140, 180, 220],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [6, 6, 6, 6, 6],
            [4, 4, 4, 4, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "60/100/140/180/220",
            "1",
            "0",
            "6",
            "4",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [950, 950, 950, 950, 950],
          rangeBurn: "950",
          image: {
            full: "ThreshW.png",
            sprite: "spell12.png",
            group: "spell",
            x: 48,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "ThreshE",
          name: "Fauchage",
          description:
            "Les attaques de Thresh se chargent, infligeant davantage de dégâts s'il attend plus entre les attaques. À l'activation, Thresh effectue un fauchage avec sa chaîne, envoyant tous les ennemis touchés dans la direction du coup.",
          tooltip:
            '<spellPassive>Passive : </spellPassive>les attaques de base de Thresh infligent de <span class="color0bf7de">{{ f3 }}</span> à <span class="color0bf7de">{{ f3 }}</span> <scaleAD>(+{{ f2 }})</scaleAD> pts de dégâts magiques supplémentaires, dégâts qui augmentent quand il n\'attaque pas (total des <span class="color0bf7de">âmes</span> collectées plus jusqu\'à {{ e3 }}% de ses dégâts d\'attaque totaux).<br /><br /><spellPassive>Active : </spellPassive>inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques sur une ligne qui part de derrière Thresh. Les ennemis touchés sont envoyés dans la direction du coup, puis ralentis de {{ e2 }}% pendant {{ e4 }} sec.<br /><br />Lancer vers l\'avant pour repousser et vers l\'arrière pour attirer.',
          leveltip: {
            label: [
              "Dégâts passifs",
              "Dégâts actifs",
              "Ralentissement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e3 }}% -> {{ e3NL }}%",
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }}% -> {{ e2NL }}%",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [9, 9, 9, 9, 9],
          cooldownBurn: "9",
          cost: [60, 65, 70, 75, 80],
          costBurn: "60/65/70/75/80",
          datavalues: {},
          effect: [
            null,
            [65, 95, 125, 155, 185],
            [20, 25, 30, 35, 40],
            [100, 125, 150, 175, 200],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "65/95/125/155/185",
            "20/25/30/35/40",
            "100/125/150/175/200",
            "1",
            "1",
            "1",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.4, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [500, 500, 500, 500, 500],
          rangeBurn: "500",
          image: {
            full: "ThreshE.png",
            sprite: "spell12.png",
            group: "spell",
            x: 96,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "ThreshRPenta",
          name: "La cage",
          description:
            "Une prison dont les murs ralentissent et blessent les ennemis qui les brisent.",
          tooltip:
            "Thresh crée une prison de murs spectraux autour de lui. Les champions ennemis qui traversent un mur subissent {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et sont ralentis de {{ e3 }}% pendant {{ e2 }} sec, mais ils brisent ce mur.  <br /><br />Dès qu'un mur est brisé, les murs restants n'infligent plus de dégâts et leur ralentissement dure moitié moins longtemps. Un ennemi ne peut pas être affecté par plusieurs murs simultanément.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [140, 120, 100],
          cooldownBurn: "140/120/100",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [250, 400, 550],
            [2, 2, 2],
            [99, 99, 99],
            [4, 4, 4],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "250/400/550",
            "2",
            "99",
            "4",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 1, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [450, 450, 450],
          rangeBurn: "450",
          image: {
            full: "ThreshRPenta.png",
            sprite: "spell12.png",
            group: "spell",
            x: 144,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Damnation",
        description:
          "Thresh peut collecter les âmes des ennemis qui meurent près de lui, augmentant définitivement son armure et sa puissance.",
        image: {
          full: "Thresh_Passive.png",
          sprite: "passive3.png",
          group: "passive",
          x: 432,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Thresh",
          title: "Beginner",
          map: "SR",
          mode: "INTRO",
          type: "riot",
          customTag: "",
          extensionPage: false,
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
              items: [
                { id: "1054", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_starter",
              recMath: false,
              recSteps: false,
              minSummonerLevel: 5,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "1054", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
              ],
            },
            {
              type: "beginner_advanced",
              recMath: true,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "1028", count: 1, hideCount: false },
                { id: "3751", count: 1, hideCount: false },
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
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "1029", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
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
              items: [
                { id: "3751", count: 1, hideCount: false },
                { id: "1031", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
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
              items: [
                { id: "3110", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Thresh",
          title: "ThreshARAM",
          map: "HA",
          mode: "ARAM",
          type: "riot",
          customTag: "",
          sortrank: 0,
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "2051", count: 1, hideCount: false },
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
                { id: "3109", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3107", count: 1, hideCount: false },
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3190", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3060", count: 1, hideCount: false },
              ],
            },
            {
              type: "offmeta",
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Thresh",
          title: "ThreshFIRSTBLOOD",
          map: "HA",
          mode: "FIRSTBLOOD",
          type: "riot",
          customTag: "",
          sortrank: 0,
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
                { id: "2003", count: 3, hideCount: false },
                { id: "3302", count: 1, hideCount: false },
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
                { id: "2049", count: 1, hideCount: false },
                { id: "3097", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "3401", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
                { id: "3117", count: 1, hideCount: false },
              ],
            },
            {
              type: "aggressive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3050", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
              ],
            },
            {
              type: "protective",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3222", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Thresh",
          title: "ThreshARAM",
          map: "HA",
          mode: "KINGPORO",
          type: "riot",
          customTag: "",
          sortrank: 0,
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
                { id: "2051", count: 1, hideCount: false },
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
                { id: "3109", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3107", count: 1, hideCount: false },
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3190", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3060", count: 1, hideCount: false },
              ],
            },
            {
              type: "offmeta",
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Thresh",
          title: "ThreshSL",
          map: "NB",
          mode: "NEXUSBLITZ",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "4301", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
              ],
            },
            {
              type: "startingjungle",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "SummonerSmite",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "4101", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3067", count: 1, hideCount: false },
              ],
            },
            {
              type: "earlyjungle",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "SummonerSmite",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3751", count: 1, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3117", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
              ],
            },
            {
              type: "essentialjungle",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "SummonerSmite",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3117", count: 1, hideCount: false },
                { id: "4103", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
              ],
            },
            {
              type: "aggressive",
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
              ],
            },
            {
              type: "protective",
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
                { id: "3107", count: 1, hideCount: false },
                { id: "3222", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Thresh",
          title: "ThreshSR",
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
                { id: "3854", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3067", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
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
                { id: "3117", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
              ],
            },
            {
              type: "aggressive",
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
                { id: "3190", count: 1, hideCount: false },
                { id: "3107", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
              ],
            },
            {
              type: "protective",
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
                { id: "3193", count: 1, hideCount: false },
                { id: "3222", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2138", count: 1, hideCount: true },
                { id: "2055", count: 1, hideCount: true },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Thresh;