const Lissandra = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Lissandra: {
      id: "Lissandra",
      key: "127",
      name: "Lissandra",
      title: "Sorcière de glace",
      image: {
        full: "Lissandra.png",
        sprite: "champion2.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "127000", num: 0, name: "default", chromas: false },
        { id: "127001", num: 1, name: "Lissandra hémolithe", chromas: false },
        {
          id: "127002",
          num: 2,
          name: "Lissandra reine des lames",
          chromas: false,
        },
        { id: "127003", num: 3, name: "Programme Lissandra", chromas: false },
        {
          id: "127004",
          num: 4,
          name: "Lissandra de l'assemblée",
          chromas: true,
        },
      ],
      lore:
        "La magie de Lissandra est capable de manipuler la pure puissance de la glace en quelque chose d'à la fois obscur et terrible. Avec la force de sa glace noire, elle fait bien plus que glacer... elle empale et écrase ceux qui osent s'opposer à elle. Les habitants du Nord, terrifiés, la connaissent sous le nom de « Sorcière de glace ». La vérité est bien plus sombre : Lissandra complote pour corrompre la Nature et ramener le monde à l'âge de glace.",
      blurb:
        "La magie de Lissandra est capable de manipuler la pure puissance de la glace en quelque chose d'à la fois obscur et terrible. Avec la force de sa glace noire, elle fait bien plus que glacer... elle empale et écrase ceux qui osent s'opposer à elle. Les...",
      allytips: [
        "Vous pouvez lancer votre ultime sur vous-même en appuyant en même temps sur la touche de sort perso et sur celle de l'ultime (Alt+R par défaut).",
        "Lancer Chemin glacial puis courir dans la direction opposée laisse vos ennemis dans le doute car ils ne savent pas par où vous allez.",
        "Les compétences de Lissandra ont une portée plus courte que celles d'autres mages. De ce fait, acheter des objets offrant à la fois de la puissance et de la défense, comme Sablier de Zhonya et Voile de la banshee, est un bon moyen de survivre tout en infligeant des dégâts.",
      ],
      enemytips: [
        "Le meilleur moyen d'empêcher Lissandra d'avancer avec son Chemin glacial est de l'immobiliser avant qu'elle ne le réactive.",
        "Le Cercle de givre de Lissandra a un long délai de récupération au départ. Attaquez-la quand il est en cours de récupération.",
        "L'Éclat de glace de Lissandra ne ralentit que la première unité touchée. Approchez-vous d'elle en restant derrière vos sbires pour éviter d'être ralenti.",
      ],
      tags: ["Mage"],
      partype: "Mana",
      info: { attack: 2, defense: 5, magic: 8, difficulty: 6 },
      stats: {
        hp: 550,
        hpperlevel: 90,
        mp: 475,
        mpperlevel: 30,
        movespeed: 325,
        armor: 22,
        armorperlevel: 3.7,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 550,
        hpregen: 7,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.4,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53,
        attackdamageperlevel: 2.7,
        attackspeedperlevel: 1.36,
        attackspeed: 0.656,
      },
      spells: [
        {
          id: "LissandraQ",
          name: "Éclat de glace",
          description:
            "Projette une lance de glace qui se brise au contact du premier ennemi touché, lui infligeant des dégâts magiques et réduisant sa vitesse de déplacement. Des éclats traversent la cible, infligeant les mêmes dégâts aux autres ennemis touchés.",
          tooltip:
            "Projette une lance de glace qui se brise au contact du premier ennemi touché, lui infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et réduisant sa vitesse de déplacement de {{ e3 }}% pendant {{ e2 }} sec. Des éclats traversent la cible, infligeant les mêmes dégâts aux autres ennemis touchés.",
          leveltip: {
            label: [
              "Dégâts",
              "Ralentissement",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ effect3amount*-100.000000 }}% -> {{ effect3amountnl*-100.000000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [8, 7, 6, 5, 4],
          cooldownBurn: "8/7/6/5/4",
          cost: [60, 65, 70, 75, 80],
          costBurn: "60/65/70/75/80",
          datavalues: {},
          effect: [
            null,
            [70, 100, 130, 160, 190],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [16, 19, 22, 25, 28],
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
            "70/100/130/160/190",
            "1.5",
            "16/19/22/25/28",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.8, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [725, 725, 725, 725, 725],
          rangeBurn: "725",
          image: {
            full: "LissandraQ.png",
            sprite: "spell6.png",
            group: "spell",
            x: 0,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "LissandraW",
          name: "Cercle de givre",
          description:
            "Congèle les ennemis proches, leur infligeant des dégâts magiques et les immobilisant.",
          tooltip:
            "Inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux ennemis proches et les immobilise pendant {{ e2 }} sec.",
          leveltip: {
            label: [
              "Dégâts",
              "Durée de l'immobilisation",
              "Délai de récupération",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [14, 13, 12, 11, 10],
          cooldownBurn: "14/13/12/11/10",
          cost: [40, 40, 40, 40, 40],
          costBurn: "40",
          datavalues: {},
          effect: [
            null,
            [70, 105, 140, 175, 210],
            [1.1, 1.2, 1.3, 1.4, 1.5],
            [3, 3, 3, 3, 3],
            [8, 8, 8, 8, 8],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/105/140/175/210",
            "1.1/1.2/1.3/1.4/1.5",
            "3",
            "8",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.7, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [450, 450, 450, 450, 450],
          rangeBurn: "450",
          image: {
            full: "LissandraW.png",
            sprite: "spell6.png",
            group: "spell",
            x: 48,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "LissandraE",
          name: "Chemin glacial",
          description:
            "Lissandra lance une griffe de glace qui inflige des dégâts magiques. Si vous réactivez la compétence, Lissandra est transportée à l'endroit où se situe sa griffe.",
          tooltip:
            "Lance une griffe de glace à longue portée, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux ennemis touchés.<br /><br />Si vous réactivez Chemin glacial, Lissandra est transportée à l'endroit où se situe sa griffe.",
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
          cooldown: [24, 21, 18, 15, 12],
          cooldownBurn: "24/21/18/15/12",
          cost: [80, 85, 90, 95, 100],
          costBurn: "80/85/90/95/100",
          datavalues: {},
          effect: [
            null,
            [70, 105, 140, 175, 210],
            [14, 13, 12, 11, 10],
            [20, 20, 20, 20, 20],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/105/140/175/210",
            "14/13/12/11/10",
            "20",
            "1",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.6, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1050, 1050, 1050, 1050, 1050],
          rangeBurn: "1050",
          image: {
            full: "LissandraE.png",
            sprite: "spell6.png",
            group: "spell",
            x: 96,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "LissandraR",
          name: "Tombeau polaire",
          description:
            "Si le sort est lancé sur un champion ennemi, la cible est congelée, ce qui l'étourdit. Si le sort est lancé sur Lissandra, elle s'immobilise dans la glace, ce qui la soigne en plus de la rendre impossible à cibler et insensible aux dégâts. De la glace obscure émane de la cible, infligeant des dégâts magiques aux ennemis et réduisant leur vitesse de déplacement.",
          tooltip:
            '<span class="colorFF9999">Sur l\'ennemi : </span>congèle le champion ciblé, l\'étourdissant pendant {{ enemycastduration }} sec.<br /><br /><span class="colorCCFF99">Sur soi : </span>Lissandra s\'immobilise dans la glace pendant {{ selfcastduration }} sec, ce qui lui rend {{ healamount }} PV (+{{ selfcastmissinghpratio }}% tous les {{ selfcastmissinghpperabove }}% de PV manquants). Pendant ce temps, Lissandra est impossible à cibler et invulnérable, mais elle ne peut pas agir.<br /><br />De la glace obscure émane alors de la cible, infligeant {{ calculateddamage }} pts de dégâts magiques aux ennemis. La glace subsiste {{ slowduration }} sec et réduit la vitesse de déplacement des ennemis de {{ slowamount*-100 }}%.',
          leveltip: {
            label: [
              "Dégâts",
              "Ralentissement",
              "Soins",
              "Délai de récupération",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ slowamount*-100.000000 }}% -> {{ slowamountnl*-100.000000 }}%",
              "{{ selfcastflatheal }} -> {{ selfcastflathealNL }}",
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
          range: [550, 550, 550],
          rangeBurn: "550",
          image: {
            full: "LissandraR.png",
            sprite: "spell6.png",
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
        name: "Emprise de la Sublimée",
        description:
          "Lorsqu'un champion ennemi meurt à proximité de Lissandra, il se transforme en Serviteur de glace. Les Serviteurs de glace ralentissent les ennemis proches et, après un délai, le froid les fait exploser, infligeant des dégâts magiques aux cibles proches.",
        image: {
          full: "Lissandra_Passive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 192,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Lissandra",
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
                { id: "1056", count: 1, hideCount: false },
                { id: "2003", count: 2, hideCount: false },
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
                { id: "2003", count: 2, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Lissandra",
          title: "LissandraARAM",
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Lissandra",
          title: "LissandraFIRSTBLOOD",
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
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3027", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2043", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: false },
                { id: "3361", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Lissandra",
          title: "LissandraARAM",
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Lissandra",
          title: "LissandraSL",
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
                { id: "3010", count: 1, hideCount: false },
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
                { id: "1001", count: 1, hideCount: false },
                { id: "1027", count: 1, hideCount: false },
                { id: "3108", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3020", count: 1, hideCount: false },
                { id: "4104", count: 1, hideCount: false },
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
                { id: "3152", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3907", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
          champion: "Lissandra",
          title: "LissandraSR",
          map: "SR",
          mode: "CLASSIC",
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
                { id: "3191", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3152", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3907", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
export default Lissandra;