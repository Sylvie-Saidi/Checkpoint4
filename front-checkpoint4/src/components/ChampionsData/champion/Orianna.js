const Orianna = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Orianna: {
      id: "Orianna",
      key: "61",
      name: "Orianna",
      title: "Demoiselle mécanique",
      image: {
        full: "Orianna.png",
        sprite: "champion2.png",
        group: "champion",
        x: 192,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "61000", num: 0, name: "default", chromas: false },
        { id: "61001", num: 1, name: "Orianna gothique", chromas: false },
        { id: "61002", num: 2, name: "Orianna du chaos", chromas: false },
        { id: "61003", num: 3, name: "Orianna assassin", chromas: false },
        { id: "61004", num: 4, name: "TPA Orianna", chromas: false },
        {
          id: "61005",
          num: 5,
          name: "Orianna merveille hivernale",
          chromas: false,
        },
        { id: "61006", num: 6, name: "Orianna cœur-de-cible", chromas: false },
        {
          id: "61007",
          num: 7,
          name: "Orianna du pulsar sombre",
          chromas: true,
        },
        {
          id: "61008",
          num: 8,
          name: "Orianna héroïne de guerre",
          chromas: true,
        },
      ],
      lore:
        "Autrefois une jeune fille curieuse, de chair et d'os, Orianna est aujourd'hui une merveille de technologie entièrement mécanisée. Elle est tombée gravement malade à la suite d'un accident dans les quartiers inférieurs de Zaun, et son corps défaillant a été remplacé petit à petit par des prothèses perfectionnées. Accompagnée par une sphère extraordinaire qu'elle a elle-même créée pour lui servir de compagnon et de protectrice, Orianna est désormais libre d'explorer la merveilleuse ville de Piltover et ce qui se trouve au-delà.",
      blurb:
        "Autrefois une jeune fille curieuse, de chair et d'os, Orianna est aujourd'hui une merveille de technologie entièrement mécanisée. Elle est tombée gravement malade à la suite d'un accident dans les quartiers inférieurs de Zaun, et son corps défaillant a...",
      allytips: [
        "Ordre : Protection peut être lancé sur vous-même pour vite faire revenir la sphère vers vous. Combinez cela avec Ordre : Attaque pour harceler rapidement l'ennemi.",
        "Ordre : Dissonance est idéal pour fuir si Orianna a la sphère avec elle. Le bonus de vitesse et l'obstacle ralentissant peuvent être très efficaces.",
        "Ordre : Onde de choc peut vous permettre de repousser les ennemis ou de les attirer vers vous, selon la position de la sphère.",
      ],
      enemytips: [
        "Orianna ne peut agir que sur la zone dans laquelle se trouve sa sphère. Utilisez cette information à votre avantage.",
        "Attention à la sphère quand elle retourne auprès d'Orianna. Cela peut provoquer des situations inattendues.",
      ],
      tags: ["Mage", "Support"],
      partype: "Mana",
      info: { attack: 4, defense: 3, magic: 9, difficulty: 7 },
      stats: {
        hp: 530,
        hpperlevel: 91,
        mp: 418,
        mpperlevel: 25,
        movespeed: 325,
        armor: 17.04,
        armorperlevel: 3,
        spellblock: 26,
        spellblockperlevel: 0.5,
        attackrange: 525,
        hpregen: 7,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 40.368,
        attackdamageperlevel: 2.6,
        attackspeedperlevel: 3.5,
        attackspeed: 0.658,
      },
      spells: [
        {
          id: "OrianaIzunaCommand",
          name: "Ordre : Attaque",
          description:
            "Orianna ordonne à sa sphère de voler vers une zone cible, infligeant des dégâts magiques aux cibles sur son passage (les dégâts diminuent à chaque cible supplémentaire). La sphère reste ensuite dans la zone cible.",
          tooltip:
            "Orianna ordonne à sa sphère de voler vers une zone cible, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux cibles sur son passage. La sphère inflige {{ e2 }}% de dégâts en moins à chaque cible touchée consécutive (minimum : {{ e3 }}%).<br /><br />La sphère reste ensuite dans la zone cible.",
          leveltip: {
            label: [
              "Dégâts",
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
          cooldown: [6, 5.25, 4.5, 3.75, 3],
          cooldownBurn: "6/5.25/4.5/3.75/3",
          cost: [30, 35, 40, 45, 50],
          costBurn: "30/35/40/45/50",
          datavalues: {},
          effect: [
            null,
            [60, 90, 120, 150, 180],
            [10, 10, 10, 10, 10],
            [40, 40, 40, 40, 40],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "60/90/120/150/180",
            "10",
            "40",
            "0",
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
          range: [815, 815, 815, 815, 815],
          rangeBurn: "815",
          image: {
            full: "OrianaIzunaCommand.png",
            sprite: "spell8.png",
            group: "spell",
            x: 0,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "OrianaDissonanceCommand",
          name: "Ordre : Dissonance",
          description:
            "Orianna ordonne à sa sphère d'émettre une impulsion énergétique, infligeant des dégâts magiques autour de la sphère. Cela crée une zone qui accélère les alliés et ralentit les ennemis.",
          tooltip:
            "Orianna ordonne à sa sphère d'émettre une impulsion électrique, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux ennemis proches.<br /><br />L'impulsion crée un champ d'énergie qui dure {{ e4 }} sec. Ce champ réduit la vitesse de déplacement des ennemis de {{ e2 }}% et augmente la vitesse de déplacement des alliés de {{ e3 }}% pendant {{ e5 }} sec. Cet effet diminue sur la durée.",
          leveltip: {
            label: [
              "Dégâts",
              "Vitesse de déplacement",
              "Ralentissement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e3 }}% -> {{ e3NL }}%",
              "{{ e2 }}% -> {{ e2NL }}%",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [7, 7, 7, 7, 7],
          cooldownBurn: "7",
          cost: [70, 80, 90, 100, 110],
          costBurn: "70/80/90/100/110",
          datavalues: {},
          effect: [
            null,
            [60, 105, 150, 195, 240],
            [30, 35, 40, 45, 50],
            [30, 35, 40, 45, 50],
            [3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "60/105/150/195/240",
            "30/35/40/45/50",
            "30/35/40/45/50",
            "3",
            "2",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.7, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [255, 255, 255, 255, 255],
          rangeBurn: "255",
          image: {
            full: "OrianaDissonanceCommand.png",
            sprite: "spell8.png",
            group: "spell",
            x: 48,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "OrianaRedactCommand",
          name: "Ordre : Protection",
          description:
            "Orianna ordonne à sa sphère d'aller se fixer sur un champion allié pour le protéger, infligeant des dégâts magiques aux ennemis sur son passage. La sphère augmente l'armure et la résistance magique du champion sur lequel elle est fixée.",
          tooltip:
            "<spellPassive>Passive : </spellPassive>la sphère augmente de {{ e2 }} l'armure et la résistance magique du champion allié sur lequel elle est fixée.<br /><br /><spellPassive>Active : </spellPassive>Orianna ordonne à sa sphère d'aller se fixer sur un champion allié, le protégeant pendant {{ e5 }} sec contre les {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts suivants. Les ennemis touchés au passage de la sphère subissent {{ e3 }} <scaleAP>(+{{ a2 }})</scaleAP> pts de dégâts magiques.",
          leveltip: {
            label: [
              "Dégâts",
              "Bonus d'armure",
              "Bonus de résistance magique",
              "PV du bouclier",
            ],
            effect: [
              "{{ e3 }} -> {{ e3NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ e1 }} -> {{ e1NL }}",
            ],
          },
          maxrank: 5,
          cooldown: [9, 9, 9, 9, 9],
          cooldownBurn: "9",
          cost: [60, 60, 60, 60, 60],
          costBurn: "60",
          datavalues: {},
          effect: [
            null,
            [60, 100, 140, 180, 220],
            [10, 15, 20, 25, 30],
            [60, 90, 120, 150, 180],
            [75, 75, 75, 75, 75],
            [2.5, 2.5, 2.5, 2.5, 2.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "60/100/140/180/220",
            "10/15/20/25/30",
            "60/90/120/150/180",
            "75",
            "2.5",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.5, key: "a1" },
            { link: "spelldamage", coeff: 0.3, key: "a2" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1095, 1095, 1095, 1095, 1095],
          rangeBurn: "1095",
          image: {
            full: "OrianaRedactCommand.png",
            sprite: "spell8.png",
            group: "spell",
            x: 96,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "OrianaDetonateCommand",
          name: "Ordre : Onde de choc",
          description:
            "Orianna ordonne à sa sphère d'émettre une onde de choc, infligeant des dégâts magiques et projetant les ennemis proches vers la sphère après un bref délai.",
          tooltip:
            "Orianna ordonne à sa sphère d'émettre une onde de choc après un bref délai, infligeant <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> aux ennemis proches et les projetant en l'air vers la sphère.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ damage }} -> {{ damageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [110, 95, 80],
          cooldownBurn: "110/95/80",
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
          range: [410, 410, 410],
          rangeBurn: "410",
          image: {
            full: "OrianaDetonateCommand.png",
            sprite: "spell8.png",
            group: "spell",
            x: 144,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Remontoir",
        description:
          "Les attaques de base d'Orianna infligent des dégâts magiques supplémentaires. Plus Orianna attaque la même cible, plus les dégâts sont importants.",
        image: {
          full: "OriannaPassive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 192,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Orianna",
          title: "Beginner",
          map: "SR",
          mode: "INTRO",
          type: "riot",
          customTag: "",
          sortrank: 0,
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
                { id: "1056", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
                { id: "1056", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
                { id: "1052", count: 1, hideCount: false },
                { id: "1027", count: 1, hideCount: false },
                { id: "3802", count: 1, hideCount: false },
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
                { id: "3020", count: 1, hideCount: false },
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
                { id: "3108", count: 1, hideCount: false },
                { id: "1052", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Orianna",
          title: "OriannaARAM",
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
                { id: "3073", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 5, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
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
                { id: "3115", count: 1, hideCount: false },
                { id: "3124", count: 1, hideCount: false },
                { id: "3100", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Orianna",
          title: "OriannaFIRSTBLOOD",
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
                { id: "1056", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
              items: [
                { id: "3285", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
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
              items: [
                { id: "3116", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Orianna",
          title: "OriannaARAM",
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
                { id: "3073", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 5, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
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
                { id: "3115", count: 1, hideCount: false },
                { id: "3124", count: 1, hideCount: false },
                { id: "3100", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Orianna",
          title: "OriannaSL",
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
                { id: "4203", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
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
                { id: "3802", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
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
                { id: "3108", count: 1, hideCount: false },
                { id: "1027", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3020", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
                { id: "4104", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3135", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3174", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
                { id: "3007", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Orianna",
          title: "OriannaSR",
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3802", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
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
                { id: "3020", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3157", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
                { id: "3174", count: 1, hideCount: false },
                { id: "3030", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Orianna;