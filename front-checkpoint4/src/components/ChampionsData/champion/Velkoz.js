const Velkoz = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Velkoz: {
      id: "Velkoz",
      key: "161",
      name: "Vel'Koz",
      title: "Œil du Néant",
      image: {
        full: "Velkoz.png",
        sprite: "champion4.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "161000", num: 0, name: "default", chromas: false },
        { id: "161001", num: 1, name: "Proto Vel'Koz", chromas: false },
        {
          id: "161002",
          num: 2,
          name: "Vel'Koz aux rayons purs",
          chromas: false,
        },
        { id: "161003", num: 3, name: "Vel'Koz incognito", chromas: false },
      ],
      lore:
        "On ne sait pas trop si Vel'Koz fut le premier monstre du Néant à émerger à Runeterra, mais il est certain qu'aucun autre n'a jamais égalé la froideur calculatrice de sa cruauté. Alors que ses semblables dévorent ou profanent tout ce qui les entoure, il cherche à étudier le royaume physique et les étranges êtres belliqueux qui l'habitent. Selon lui, c'est ainsi que le Néant trouvera comment exploiter leurs faiblesses. Mais Vel'Koz n'est pas qu'un observateur passif. Il répond à toute menace avec des éruptions mortelles de plasma ou en déchirant le tissu même du monde.",
      blurb:
        "On ne sait pas trop si Vel'Koz fut le premier monstre du Néant à émerger à Runeterra, mais il est certain qu'aucun autre n'a jamais égalé la froideur calculatrice de sa cruauté. Alors que ses semblables dévorent ou profanent tout ce qui les entoure, il...",
      allytips: [
        "Sur votre voie, utilisez Ouverture de faille pour tuer des sbires tout en cumulant les effets Décomposition organique sur votre adversaire. Vous pouvez ensuite enchaîner avec d'autres compétences.",
        "Tirer Fission du plasma en diagonale et diviser le projectile en bout de course vous permettent de toucher les ennemis qui sont normalement hors de portée, mais l'action est plus difficile.",
        "Réfléchissez bien avant d'utiliser Désintégrateur de formes de vie. De nombreux champions ont des compétences capables d'interrompre ce sort.",
      ],
      enemytips: [
        "Vel'Koz est très dangereux si on le laisse agir pendant un combat. Essayez de l'abattre rapidement.",
        "Vel'Koz étant assez peu mobile, il est vulnérable aux ganks.",
        "Désintégrateur de formes de vie peut être interrompu par un étourdissement, un silence ou une projection en l'air.",
      ],
      tags: ["Mage"],
      partype: "Mana",
      info: { attack: 2, defense: 2, magic: 10, difficulty: 8 },
      stats: {
        hp: 520,
        hpperlevel: 88,
        mp: 469,
        mpperlevel: 21,
        movespeed: 340,
        armor: 21.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 525,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 54.9379,
        attackdamageperlevel: 3.1416,
        attackspeedperlevel: 1.36,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "VelkozQ",
          name: "Fission du plasma",
          description:
            "Vel'Koz tire un projectile de plasma qui se divise en deux quand il touche un ennemi ou quand le sort est réactivé. Le projectile ralentit et blesse à l'impact.",
          tooltip:
            "Vel'Koz tire un projectile de plasma, infligeant <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> et appliquant un ralentissement de {{ slowamount*100 }}% qui diminue en {{ slowduration }} sec.<br /><br />Quand il touche un ennemi ou quand le sort est réactivé, le projectile se divise en suivant un angle de 90 degrés.<br /><br />Vel'Koz regagne {{ manarefund*100 }}% du <span class=\"color44DDFF\">coût en mana</span> s'il tue une unité avec cette compétence.",
          leveltip: {
            label: [
              "Total des dégâts",
              "Durée de ralentissement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ slowduration }} -> {{ slowdurationNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [7, 7, 7, 7, 7],
          cooldownBurn: "7",
          cost: [40, 45, 50, 55, 60],
          costBurn: "40/45/50/55/60",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1050, 1050, 1050, 1050, 1050],
          rangeBurn: "1050",
          image: {
            full: "VelkozQ.png",
            sprite: "spell13.png",
            group: "spell",
            x: 192,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "VelkozW",
          name: "Ouverture de faille",
          description:
            "Vel'Koz ouvre une faille vers le Néant, infligeant des dégâts initiaux. Après un court délai, la faille explose et inflige des dégâts secondaires.",
          tooltip:
            "Vel'Koz ouvre une faille vers le Néant, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques. Après un délai, la faille inflige {{ e2 }} <scaleAP>(+{{ a2 }})</scaleAP> pts de dégâts magiques supplémentaires.<br /><br />Ouverture de faille a un délai de récupération de 2 sec entre deux activations.",
          leveltip: {
            label: [
              "Dégâts initiaux",
              "Dégâts secondaires",
              "Délai de rechargement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ ammorechargetime }} -> {{ ammorechargetimeNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [1.5, 1.5, 1.5, 1.5, 1.5],
          cooldownBurn: "1.5",
          cost: [50, 55, 60, 65, 70],
          costBurn: "50/55/60/65/70",
          datavalues: {},
          effect: [
            null,
            [30, 50, 70, 90, 110],
            [45, 75, 105, 135, 165],
            [100, 100, 100, 100, 100],
            [0, 0, 0, 0, 0],
            [0.25, 0.25, 0.25, 0.25, 0.25],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [88, 88, 88, 88, 88],
            [500, 500, 500, 500, 500],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "30/50/70/90/110",
            "45/75/105/135/165",
            "100",
            "0",
            "0.25",
            "0.5",
            "88",
            "500",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.15, key: "a1" },
            { link: "spelldamage", coeff: 0.25, key: "a2" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "2",
          range: [1050, 1050, 1050, 1050, 1050],
          rangeBurn: "1050",
          image: {
            full: "VelkozW.png",
            sprite: "spell13.png",
            group: "spell",
            x: 240,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "VelkozE",
          name: "Dislocation tectonique",
          description:
            "Vel'Koz provoque une explosion dans une zone, projetant les ennemis dans les airs et repoussant légèrement les ennemis proches.",
          tooltip:
            "Vel'Koz provoque une perturbation dans une zone proche qui, après un délai, inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et projette les ennemis dans les airs pendant {{ e2 }} sec.<br /><br />Les ennemis touchés qui sont proches de Vel'Koz sont aussi légèrement repoussés dans la direction prise par la compétence.",
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
          cooldown: [16, 15, 14, 13, 12],
          cooldownBurn: "16/15/14/13/12",
          cost: [50, 55, 60, 65, 70],
          costBurn: "50/55/60/65/70",
          datavalues: {},
          effect: [
            null,
            [70, 100, 130, 160, 190],
            [0.75, 0.75, 0.75, 0.75, 0.75],
            [0, 0, 0, 0, 0],
            [225, 225, 225, 225, 225],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/100/130/160/190",
            "0.75",
            "0",
            "225",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.3, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [810, 810, 810, 810, 810],
          rangeBurn: "810",
          image: {
            full: "VelkozE.png",
            sprite: "spell13.png",
            group: "spell",
            x: 288,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "VelkozR",
          name: "Désintégrateur de formes de vie",
          description:
            "Vel'Koz tire un rayon canalisé qui suit le curseur pendant 2,5 sec et inflige des dégâts magiques. Les champions ennemis qui sont des sujets d'étude (affectés par Décomposition organique) subissent à la place des dégâts bruts.",
          tooltip:
            "<spellPassive>Passive : </spellPassive>décomposer des champions ennemis en fait des <scaleLevel>sujets d'étude</scaleLevel> pendant {{ e2 }} sec. Les attaques de base et toutes les compétences actualisent cet état.<br /><br /><spellPassive>Active : </spellPassive>Vel'Koz canalise un rayon d'énergie qui suit le curseur pendant 2,5 sec, infligeant jusqu'à {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques au total et ralentissant de {{ e3 }}% les unités touchées.<br /><br />Les ennemis qui restent dans le rayon reçoivent périodiquement des effets <scaleLevel>Décomposition organique</scaleLevel>. Inflige des dégâts bruts aux <scaleLevel>sujets d'étude</scaleLevel> et non des dégâts magiques.",
          leveltip: {
            label: ["Total des dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [120, 100, 80],
          cooldownBurn: "120/100/80",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [450, 625, 800],
            [7, 7, 7],
            [20, 20, 20],
            [40, 40, 40],
            [175, 175, 175],
            [7, 7, 7],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "450/625/800",
            "7",
            "20",
            "40",
            "175",
            "7",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 1.25, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1575, 1575, 1575],
          rangeBurn: "1575",
          image: {
            full: "VelkozR.png",
            sprite: "spell13.png",
            group: "spell",
            x: 336,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Décomposition organique",
        description:
          "Les compétences de Vel'Koz appliquent des effets <keywordName>Décomposition organique</keywordName> aux ennemis touchés. À 3 effets cumulés, l'ennemi subit une explosion de dégâts bruts.",
        image: {
          full: "VelKoz_Passive.png",
          sprite: "passive4.png",
          group: "passive",
          x: 0,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Velkoz",
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
              items: [{ id: "1056", count: 1, hideCount: false }],
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
                { id: "1027", count: 1, hideCount: false },
                { id: "3010", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3010", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
                { id: "3027", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Velkoz",
          title: "VelkozARAM",
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
                { id: "3802", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Velkoz",
          title: "VelkozFIRSTBLOOD",
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
                { id: "1058", count: 1, hideCount: false },
                { id: "3028", count: 1, hideCount: false },
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
                { id: "3174", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Velkoz",
          title: "VelkozARAM",
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
                { id: "3802", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Velkoz",
          title: "VelKozSL",
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Velkoz",
          title: "VelkozSR",
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
                { id: "3285", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Velkoz;