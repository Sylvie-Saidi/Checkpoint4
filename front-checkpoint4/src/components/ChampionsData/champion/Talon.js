const Talon = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Talon: {
      id: "Talon",
      key: "91",
      name: "Talon",
      title: "Lame des ténèbres",
      image: {
        full: "Talon.png",
        sprite: "champion3.png",
        group: "champion",
        x: 288,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "91000", num: 0, name: "default", chromas: false },
        { id: "91001", num: 1, name: "Talon renégat", chromas: false },
        { id: "91002", num: 2, name: "Talon Némésis", chromas: false },
        { id: "91003", num: 3, name: "Talon lame du dragon", chromas: true },
        { id: "91004", num: 4, name: "SSW Talon", chromas: false },
        { id: "91005", num: 5, name: "Talon lune de sang", chromas: false },
        { id: "91012", num: 12, name: "Talon à l'épée tenace", chromas: true },
        { id: "91020", num: 20, name: "Talon Sylvenoir", chromas: true },
      ],
      lore:
        "Talon est la dague cachée dans l'ombre, un assassin impitoyable, capable de frapper sans prévenir et de fuir avant que l'alerte ne soit donnée. Il a acquis une dangereuse réputation dans les brutales rues de Noxus, où il a été contraint de se battre, de tuer et de voler pour survivre. Adopté par la tristement célèbre famille Du Couteau, il use maintenant de ses talents au service de l'empire, assassinant les chefs, capitaines et héros ennemis... mais aussi tout Noxien qui aurait attiré l'ire de ses maîtres.",
      blurb:
        "Talon est la dague cachée dans l'ombre, un assassin impitoyable, capable de frapper sans prévenir et de fuir avant que l'alerte ne soit donnée. Il a acquis une dangereuse réputation dans les brutales rues de Noxus, où il a été contraint de se battre, de...",
      allytips: [
        "Servez-vous de Voie de l'assassin pour passer derrière l'ennemi et pouvoir utiliser Diplomatie noxienne en mêlée.",
        "Assaut ténébreux est un puissant moyen de fuite, mais vous pouvez également l'utiliser pour attaquer un groupe.",
        "N'oubliez pas de choisir votre cible avant le combat. Concentrer toutes les compétences de Talon sur une cible est très efficace, alors que les diviser entre plusieurs ennemis vous affaiblit grandement.",
      ],
      enemytips: [
        "Les attaques de Talon font toutes des dégâts physiques. Augmentez rapidement votre armure pour contrer ses dégâts.",
        "Talon s'appuie beaucoup sur Assaut ténébreux pour échapper à un combat. Quand il n'en bénéficie plus, il est beaucoup plus vulnérable.",
        "Talon peut changer de voie comme personne. Ne le perdez pas de vue ou poussez agressivement pour le forcer à rester sur sa voie.",
      ],
      tags: ["Assassin"],
      partype: "Mana",
      info: { attack: 9, defense: 3, magic: 1, difficulty: 7 },
      stats: {
        hp: 588,
        hpperlevel: 95,
        mp: 377.2,
        mpperlevel: 37,
        movespeed: 335,
        armor: 30,
        armorperlevel: 3.5,
        spellblock: 39,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 0.75,
        mpregen: 7.6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 68,
        attackdamageperlevel: 3.1,
        attackspeedperlevel: 2.9,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "TalonQ",
          name: "Diplomatie noxienne",
          description:
            "Talon poignarde l'unité ciblée. S'il est en mêlée, cette attaque inflige des dégâts critiques. S'il est à distance, Talon saute sur la cible avant de la poignarder. Talon regagne des PV et le délai de récupération est réduit si la compétence tue la cible.",
          tooltip:
            "Talon saute sur sa cible et inflige {{ e1 }} <scaleAD>(+{{ a1 }})</scaleAD> pts de dégâts physiques. Si la compétence est utilisée en mêlée, Talon ne saute pas mais réussit un coup critique, infligeant {{ f2 }}% de dégâts <scaleAD>({{ f3 }})</scaleAD>.<br /><br />Quand Diplomatie noxienne tue une unité, Talon regagne <scaleLevel>{{ f4 }}</scaleLevel> PV et le délai de récupération est réduit de {{ e5 }}%.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e6 }} -> {{ e6NL }}"],
          },
          maxrank: 5,
          cooldown: [0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [30, 30, 30, 30, 30],
          costBurn: "30",
          datavalues: {},
          effect: [
            null,
            [65, 90, 115, 140, 165],
            [50, 50, 50, 50, 50],
            [17, 17, 17, 17, 17],
            [3, 3, 3, 3, 3],
            [50, 50, 50, 50, 50],
            [8, 7.5, 7, 6.5, 6],
            [0.8, 0.8, 0.8, 0.8, 0.8],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "65/90/115/140/165",
            "50",
            "17",
            "3",
            "50",
            "8/7.5/7/6.5/6",
            "0.8",
            "1.5",
            "0",
            "0",
          ],
          vars: [{ link: "bonusattackdamage", coeff: 1.1, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [575, 575, 575, 575, 575],
          rangeBurn: "575",
          image: {
            full: "TalonQ.png",
            sprite: "spell11.png",
            group: "spell",
            x: 384,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "TalonW",
          name: "Ratissage",
          description:
            "Talon projette une volée de lames qui reviennent ensuite vers lui, infligeant des dégâts physiques à chaque fois qu'elles transpercent un ennemi. En revenant, les lames infligent des dégâts supplémentaires et ralentissent les unités touchées.",
          tooltip:
            "Talon projette une volée de lames, infligeant <physicalDamage>{{ totalinitialdamage }} pts de dégâts physiques</physicalDamage> aux unités touchées. Les lames reviennent vers lui après un délai.<br /><br />En revenant vers Talon, les lames infligent <physicalDamage>{{ totalreturndamage }} pts de dégâts supplémentaires</physicalDamage> et ralentissent les ennemis de {{ movespeedslow*100 }}% pendant {{ slowduration }} sec.",
          leveltip: {
            label: [
              "Dégâts initiaux",
              "Dégâts au retour",
              "Ralentissement",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ initialbasedamage }} -> {{ initialbasedamageNL }}",
              "{{ returnbasedamage }} -> {{ returnbasedamageNL }}",
              "{{ movespeedslow*100.000000 }}% -> {{ movespeedslownl*100.000000 }}%",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [9, 9, 9, 9, 9],
          cooldownBurn: "9",
          cost: [55, 60, 65, 70, 75],
          costBurn: "55/60/65/70/75",
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
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "TalonW.png",
            sprite: "spell11.png",
            group: "spell",
            x: 432,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "TalonE",
          name: "Voie de l'assassin",
          description:
            "Talon saute par-dessus n'importe quel terrain ou bâtiment, jusqu'à une distance maximale. Cette compétence a un court délai de récupération, mais le terrain franchi a un long délai de récupération.",
          tooltip:
            "Talon bondit sur {{ f2 }} unités de distance par-dessus le bâtiment ou le terrain le plus proche dans la direction ciblée. La vitesse du saut est affectée par la vitesse de déplacement de Talon.<br /><br />Talon ne peut pas franchir la même portion de terrain plus d'une fois toutes les <scaleLevel>{{ f3 }}</scaleLevel> sec.",
          leveltip: {
            label: ["Délai de récupération du terrain"],
            effect: ["{{ e6 }} -> {{ e6NL }}"],
          },
          maxrank: 5,
          cooldown: [0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [625, 625, 625, 625, 625],
            [1250, 1250, 1250, 1250, 1250],
            [2, 2, 2, 2, 2],
            [160, 135, 110, 85, 60],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "0",
            "0",
            "625",
            "1250",
            "2",
            "160/135/110/85/60",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [725, 725, 725, 725, 725],
          rangeBurn: "725",
          image: {
            full: "TalonE.png",
            sprite: "spell12.png",
            group: "spell",
            x: 0,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "TalonR",
          name: "Assaut ténébreux",
          description:
            "Talon projette des lames autour de lui et devient invisible, augmentant sa vitesse de déplacement. Quand Talon redevient visible, les lames reviennent vers lui. Chaque fois que les lames se déplacent, Assaut ténébreux inflige des dégâts physiques aux ennemis touchés par au moins une lame.",
          tooltip:
            'Talon projette autour de lui des lames qui infligent <physicalDamage>{{ damage }} pts de dégâts physiques</physicalDamage> à toutes les unités touchées, augmente sa vitesse de déplacement de {{ movespeed*100 }}% et devient <span class="color91d7ee">invisible</span> pendant {{ duration }} sec au maximum. Quand l\'<span class="color91d7ee">invisibilité</span> prend fin, les lames convergent vers Talon, infligeant de nouveau les mêmes dégâts aux ennemis qu\'elles traversent.<br /><br />Si Talon annule l\'<span class="color91d7ee">invisibilité</span> avec une attaque ou Diplomatie noxienne, les lames convergent vers la position de la cible.<br /><br /><u><span class="size16 color91d7ee">Furtivité - Invisibilité</span></u><span class="size16 colorb3b3b3"> : Talon ne peut être révélé que par les tourelles ennemies proches ou la <span class="size16 coloree91d7">vision pure</span>.</span>',
          leveltip: {
            label: [
              "Dégâts",
              "Vitesse de déplacement",
              "Délai de récupération",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ movespeed*100.000000 }}% -> {{ movespeednl*100.000000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [100, 80, 60],
          cooldownBurn: "100/80/60",
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
            full: "TalonR.png",
            sprite: "spell12.png",
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
        name: "Saignée fatale",
        description:
          "Les compétences de Talon blessent les champions et les grands monstres (cumulable 3 fois). Quand Talon lance une attaque de base sur un champion portant 3 effets Blessure, ce champion se met à saigner et subit d'importants dégâts sur la durée.",
        image: {
          full: "TalonP.png",
          sprite: "passive3.png",
          group: "passive",
          x: 288,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Talon",
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
                { id: "1055", count: 1, hideCount: false },
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
              items: [
                { id: "1036", count: 1, hideCount: false },
                { id: "3133", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3117", count: 1, hideCount: false },
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
                { id: "3156", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Talon",
          title: "TalonARAM",
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
                { id: "3133", count: 1, hideCount: false },
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
                { id: "3147", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
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
                { id: "3812", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
          champion: "Talon",
          title: "TalonFIRSTBLOOD",
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
                { id: "1055", count: 1, hideCount: false },
                { id: "2003", count: 1, hideCount: false },
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
                { id: "3117", count: 1, hideCount: false },
                { id: "3134", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
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
                { id: "3035", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3026", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Talon",
          title: "TalonARAM",
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
                { id: "3133", count: 1, hideCount: false },
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
                { id: "3147", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
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
                { id: "3812", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
          champion: "Talon",
          title: "TalonSL",
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
                { id: "1036", count: 1, hideCount: false },
                { id: "2031", count: 1, hideCount: false },
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
                { id: "3134", count: 1, hideCount: false },
                { id: "3133", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3158", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3147", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
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
                { id: "3053", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: true },
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Talon",
          title: "TalonSR",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1036", count: 1, hideCount: false },
                { id: "2031", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
              ],
            },
            {
              type: "jungling",
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
                { id: "1039", count: 1, hideCount: false },
                { id: "2031", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
              ],
            },
            {
              type: "early",
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
                { id: "3715", count: 1, hideCount: false },
                { id: "3133", count: 1, hideCount: false },
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
                { id: "3077", count: 1, hideCount: false },
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
                { id: "3147", count: 1, hideCount: false },
                { id: "3117", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
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
                { id: "3179", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
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
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3071", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
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
export default Talon;