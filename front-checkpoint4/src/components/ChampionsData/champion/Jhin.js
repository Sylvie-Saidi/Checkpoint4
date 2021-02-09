const Jhin = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Jhin: {
      id: "Jhin",
      key: "202",
      name: "Jhin",
      title: "Virtuose",
      image: {
        full: "Jhin.png",
        sprite: "champion1.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "202000", num: 0, name: "default", chromas: false },
        { id: "202001", num: 1, name: "Jhin de l'Ouest", chromas: false },
        { id: "202002", num: 2, name: "Jhin lune de sang", chromas: false },
        { id: "202003", num: 3, name: "SKT T1 Jhin", chromas: false },
        { id: "202004", num: 4, name: "PROJET : Jhin", chromas: false },
        {
          id: "202005",
          num: 5,
          name: "Jhin démiurge cosmique",
          chromas: false,
        },
      ],
      lore:
        "Jhin est un psychopathe méticuleux pour qui le meurtre est une forme d'art. Autrefois prisonnier de Ionia, mais libéré par des conspirateurs opérant au sein du conseil dirigeant du pays, ce tueur en série a désormais mis ses talents d'assassin au service de leur complot. Utilisant son pistolet comme un pinceau, Jhin crée des œuvres d'art empreintes de brutalité, aussi terrifiantes pour ses victimes que pour les témoins de ses crimes. Il tire un plaisir sadique de ses performances théâtrales, ce qui en fait un atout de poids quand il s'agit d'envoyer le plus puissant des messages : celui de la terreur.",
      blurb:
        "Jhin est un psychopathe méticuleux pour qui le meurtre est une forme d'art. Autrefois prisonnier de Ionia, mais libéré par des conspirateurs opérant au sein du conseil dirigeant du pays, ce tueur en série a désormais mis ses talents d'assassin au...",
      allytips: [
        "Floraison mortelle profite d'une portée incroyable. Lorsque vous vous rapprochez d'un combat, pensez à chercher à l'avance des ennemis qui pourraient être immobilisés.",
        "Votre ultime inflige beaucoup moins de dégâts aux ennemis dont la jauge de PV est pleine. Essayez d'éliminer les cibles affaiblies lorsqu'elles tentent de fuir.",
        "Vous pouvez toujours utiliser vos sorts, même quand vous rechargez. Profitez-en pour ne pas rester à ne rien faire.",
      ],
      enemytips: [
        "Floraison mortelle n'immobilise que des cibles qui ont été touchées par une attaque de base, un piège ou un allié de Jhin au cours des 4 dernières secondes.",
        "Jhin place des pièges invisibles sur la carte. Attention où vous mettez les pieds !",
        "Les attaques de Jhin sont assez puissantes, mais il doit recharger tous les 4 tirs. Profitez de cette fenêtre d'opportunité pour lui sauter dessus et l'éliminer.",
      ],
      tags: ["Marksman", "Mage"],
      partype: "Mana",
      info: { attack: 10, defense: 2, magic: 6, difficulty: 6 },
      stats: {
        hp: 556,
        hpperlevel: 91,
        mp: 300,
        mpperlevel: 50,
        movespeed: 330,
        armor: 24,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 550,
        hpregen: 3.75,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 59,
        attackdamageperlevel: 4.7,
        attackspeedperlevel: 0,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "JhinQ",
          name: "Grenade dansante",
          description:
            "Jhin lance une bombe magique sur un ennemi. Elle peut toucher jusqu'à quatre cibles et ses dégâts augmentent après chaque coup fatal.",
          tooltip:
            "Jhin lance une bombe magique sur un ennemi, infligeant {{ e1 }} <scaleAD>(+{{ f1 }})</scaleAD> <scaleAP>(+{{ a1 }}) </scaleAP>pts de dégâts physiques avant de rebondir vers un ennemi proche qui n'a pas encore été touché.<br /><br />La bombe peut toucher jusqu'à 4 ennemis. Chaque ennemi tué par la bombe augmente de {{ e2 }}% les dégâts des rebonds suivants.",
          leveltip: {
            label: [
              "Dégâts",
              "Ratio de dégâts d'attaque totaux",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e3 }} -> {{ e3NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [7, 6.5, 6, 5.5, 5],
          cooldownBurn: "7/6.5/6/5.5/5",
          cost: [40, 45, 50, 55, 60],
          costBurn: "40/45/50/55/60",
          datavalues: {},
          effect: [
            null,
            [45, 70, 95, 120, 145],
            [35, 35, 35, 35, 35],
            [0.45, 0.525, 0.6, 0.675, 0.75],
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
            "45/70/95/120/145",
            "35",
            "0.45/0.525/0.6/0.675/0.75",
            "0",
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
          range: [550, 550, 550, 550, 550],
          rangeBurn: "550",
          image: {
            full: "JhinQ.png",
            sprite: "spell4.png",
            group: "spell",
            x: 384,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "JhinW",
          name: "Floraison mortelle",
          description:
            "Jhin brandit sa canne et tire une unique balle à très longue portée. Elle transperce les sbires et les monstres, mais s'arrête au premier champion touché. Si la cible avait récemment été blessée par Jhin ou touchée par les alliés de Jhin ou un piège-lotus, elle est immobilisée.",
          tooltip:
            "Jhin tire une balle à longue portée qui s'arrête au premier champion touché, lui infligeant {{ e1 }} <scaleAD>(+{{ a1 }})</scaleAD> pts de dégâts physiques, et {{ e4 }}% de ces dégâts à tous les sbires et monstres touchés en chemin.<br /><br />Si Floraison mortelle frappe un champion qui a été touché par un piège-lotus de Jhin ou blessé par Jhin ou un de ses alliés il y a moins de 4 sec, ce champion est immobilisé pendant {{ e2 }} sec et Jhin reçoit un bonus en vitesse de déplacement comme s'il avait infligé un <span class=\"colorFF5802\">coup critique</span>.",
          leveltip: {
            label: [
              "Dégâts",
              "Durée de l'immobilisation",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 12, 12, 12, 12],
          cooldownBurn: "12",
          cost: [50, 60, 70, 80, 90],
          costBurn: "50/60/70/80/90",
          datavalues: {},
          effect: [
            null,
            [50, 85, 120, 155, 190],
            [1, 1.25, 1.5, 1.75, 2],
            [0, 0, 0, 0, 0],
            [75, 75, 75, 75, 75],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "50/85/120/155/190",
            "1/1.25/1.5/1.75/2",
            "0",
            "75",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "attackdamage", coeff: 0.5, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [3000, 3000, 3000, 3000, 3000],
          rangeBurn: "3000",
          image: {
            full: "JhinW.png",
            sprite: "spell4.png",
            group: "spell",
            x: 432,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "JhinE",
          name: "Public captif",
          description:
            "Jhin pose un piège-lotus invisible qui fleurit quand un ennemi marche dessus. Il ralentit les ennemis proches avant de leur infliger des dégâts dans une explosion de pétales lacérants. <br><br><font color='#FFFFFF'>Beauté dans la mort :</font> Quand Jhin tue un champion ennemi, un piège-lotus fleurit près de son cadavre.",
          tooltip:
            "Jhin pose un piège-lotus invisible qui dure {{ e5 }} minutes et se déclenche lorsqu'on marche dessus, révélant les ennemis proches pendant 4 sec.<br /><br />En se déclenchant, le piège crée une zone qui ralentit de {{ e7 }}% tous les ennemis qui s'y trouvent, puis explose 2 sec plus tard, infligeant {{ e2 }} <scaleAD>(+{{ a1 }})</scaleAD> <scaleAP>(+{{ a2 }})</scaleAP> pts de dégâts magiques ({{ e1 }}% des dégâts pour les coups subséquents et contre les sbires et les monstres).<br /><br />Jhin prépare un nouveau piège toutes les <scaleLevel>{{ f1 }}</scaleLevel> sec et il peut en stocker 2. <br /><br /><scaleLevel>Beauté dans la mort :</scaleLevel> quand Jhin tue un champion ennemi, un piège-lotus apparaît et explose à l'emplacement de son cadavre.",
          leveltip: {
            label: [
              "Dégâts",
              "Délai de rechargement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e2 }} -> {{ e2NL }}",
              "{{ ammorechargetime }} -> {{ ammorechargetimeNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [2, 2, 2, 2, 2],
          cooldownBurn: "2",
          cost: [30, 35, 40, 45, 50],
          costBurn: "30/35/40/45/50",
          datavalues: {},
          effect: [
            null,
            [65, 65, 65, 65, 65],
            [20, 80, 140, 200, 260],
            [0, 0, 0, 0, 0],
            [0.75, 0.75, 0.75, 0.75, 0.75],
            [3, 3, 3, 3, 3],
            [0, 0, 0, 0, 0],
            [35, 35, 35, 35, 35],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "65",
            "20/80/140/200/260",
            "0",
            "0.75",
            "3",
            "0",
            "35",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "attackdamage", coeff: 1.2, key: "a1" },
            { link: "spelldamage", coeff: 1, key: "a2" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "2",
          range: [750, 750, 750, 750, 750],
          rangeBurn: "750",
          image: {
            full: "JhinE.png",
            sprite: "spell5.png",
            group: "spell",
            x: 0,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "JhinR",
          name: "Rappel de rideau",
          description:
            "Après une canalisation, Jhin transforme Murmure en méga-canon d'épaule. Il peut alors tirer 4 super balles à très longue portée qui transpercent les sbires et les monstres, mais s'arrêtent au premier champion touché. Murmure estropie les ennemis touchés, ce qui les ralentit et leur inflige des dégâts supplémentaires. Le 4e tir est parfaitement calibré et puissant, et il inflige toujours un coup critique.",
          tooltip:
            "Jhin s'installe et canalise son attaque pour pouvoir tirer 4 super balles à très longue portée dans une zone conique face à lui. Ces balles s'arrêtent au premier champion touché, le ralentissant de {{ slowpercent*100 }}% pendant {{ slowduration }} sec et lui infligeant <physicalDamage>{{ damagecalc }} pts de dégâts physiques</physicalDamage>, augmentés de {{ percentmissingamp }}% tous les 1% de PV qu'il manque à la cible (jusqu'à <physicalDamage>{{ maxincreasecalc }}</physicalDamage>). Le 4e tir est toujours un <span class=\"colorFF5802\">coup critique</span> qui inflige {{ fourthshotmultiplier*100 }}% des dégâts.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ damage }} -> {{ damageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [120, 105, 90],
          cooldownBurn: "120/105/90",
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
          range: [25000, 25000, 25000],
          rangeBurn: "25000",
          image: {
            full: "JhinR.png",
            sprite: "spell5.png",
            group: "spell",
            x: 48,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Murmure",
        description:
          "Le pistolet de Jhin, Murmure, est un instrument de précision capable d'infliger de lourds dégâts. Sa cadence de tir est fixe et il ne peut tirer que quatre balles avant de devoir être rechargé. Jhin insuffle à la dernière balle un soupçon de magie noire qui lui permet de toujours infliger un coup critique et des dégâts supplémentaires. Quand Murmure inflige un coup critique, Jhin reçoit un bonus en vitesse de déplacement.",
        image: {
          full: "Jhin_P.png",
          sprite: "passive1.png",
          group: "passive",
          x: 288,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Jhin",
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
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              items: [
                { id: "1055", count: 1, hideCount: false },
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
              appendAfterSection: "",
              items: [
                { id: "1036", count: 1, hideCount: false },
                { id: "1053", count: 1, hideCount: false },
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
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "1042", count: 1, hideCount: false },
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
              items: [
                { id: "1053", count: 1, hideCount: false },
                { id: "1038", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
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
              items: [
                { id: "3087", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Jhin",
          title: "JhinARAM",
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
                { id: "1038", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
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
                { id: "3508", count: 1, hideCount: false },
                { id: "3095", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3036", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3907", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Jhin",
          title: "JhinARAM",
          map: "HA",
          mode: "KINGPORO",
          type: "riot",
          customTag: "",
          sortrank: 0,
          extensionPage: false,
          useObviousCheckmark: false,
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
                { id: "1038", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
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
                { id: "3508", count: 1, hideCount: false },
                { id: "3095", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3036", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3907", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Jhin",
          title: "JhinSL",
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
                { id: "4202", count: 1, hideCount: false },
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
                { id: "1038", count: 1, hideCount: false },
                { id: "3086", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "3133", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "3134", count: 1, hideCount: false },
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
                { id: "3095", count: 1, hideCount: false },
                { id: "3009", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
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
                { id: "4102", count: 1, hideCount: false },
                { id: "3009", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
              ],
            },
            {
              type: "offensive",
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
              ],
            },
            {
              type: "offensive",
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
                { id: "3147", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
              ],
            },
            {
              type: "selective",
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
                { id: "3172", count: 1, hideCount: false },
                { id: "3131", count: 1, hideCount: false },
              ],
            },
            {
              type: "selective",
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
                { id: "3161", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
                { id: "3131", count: 1, hideCount: false },
                { id: "3172", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Jhin",
          title: "JhinPRJ17",
          map: "ProjectSlums",
          mode: "PROJECT",
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
              items: [
                { id: "3009", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
              ],
            },
            {
              type: "recommended",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              items: [
                { id: "3147", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
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
              items: [
                { id: "3814", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Jhin",
          title: "JhinSR",
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
                { id: "2015", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3095", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3009", count: 1, hideCount: false },
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
                { id: "3508", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
              ],
            },
            {
              type: "selective",
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
                { id: "3036", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Jhin;