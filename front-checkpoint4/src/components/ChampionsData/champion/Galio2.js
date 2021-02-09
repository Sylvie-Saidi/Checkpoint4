const Galio2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Galio: {
      id: "Galio",
      key: "3",
      name: "Galio",
      title: "Colosse",
      image: {
        full: "Galio.png",
        sprite: "champion1.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "3000", num: 0, name: "default", chromas: false },
        { id: "3001", num: 1, name: "Galio l'enchanteur", chromas: false },
        { id: "3002", num: 2, name: "Galio Hextech", chromas: false },
        { id: "3003", num: 3, name: "Galio commando", chromas: false },
        { id: "3004", num: 4, name: "Galio cerbère", chromas: false },
        { id: "3005", num: 5, name: "Galio séducteur", chromas: false },
        { id: "3006", num: 6, name: "Poulio", chromas: true },
        { id: "3013", num: 13, name: "Galio infernal", chromas: true },
      ],
      lore:
        "Près de la cité étincelante de Demacia, le colosse de pierre Galio monte une garde attentive. Érigé comme un rempart contre les mages ennemis, il reste souvent immobile pendant des décennies, jusqu'à ce que l'apparition de puissants flux magiques le ramène à la vie. Une fois éveillé, Galio profite de chaque seconde d'existence ; il s'enivre des frissons du combat et de l'honneur trop rare de défendre ses compatriotes. Mais ses triomphes ont toujours un arrière-goût amer, car la magie qu'il éradique est également la sève qui le fait vivre, et chaque victoire le renvoie au sommeil.",
      blurb:
        "Près de la cité étincelante de Demacia, le colosse de pierre Galio monte une garde attentive. Érigé comme un rempart contre les mages ennemis, il reste souvent immobile pendant des décennies, jusqu'à ce que l'apparition de puissants flux magiques le...",
      allytips: [
        "Vous pouvez relâcher Bouclier de Durand même en étant affecté par un contrôle de foule.",
        "Vous pouvez lancer Entrée héroïque en utilisant les icones de vos alliés sur la minicarte.",
        "Vous pouvez utiliser le pas en arrière de Horion de la justice pour esquiver les sorts ennemis.",
      ],
      enemytips: [
        "Galio se déplace plus lentement quand il charge Bouclier de Durand.",
        "Entrée héroïque peut être interrompue avant que Galio ne prenne son envol.",
        "Galio ne peut pas traverser les murs avec Horion de la justice.",
      ],
      tags: ["Tank", "Mage"],
      partype: "Mana",
      info: { attack: 1, defense: 10, magic: 6, difficulty: 5 },
      stats: {
        hp: 562,
        hpperlevel: 112,
        mp: 500,
        mpperlevel: 40,
        movespeed: 335,
        armor: 24,
        armorperlevel: 3.5,
        spellblock: 32,
        spellblockperlevel: 1.25,
        attackrange: 150,
        hpregen: 8,
        hpregenperlevel: 0.8,
        mpregen: 9.5,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 59,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 1.5,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "GalioQ",
          name: "Vents de guerre",
          description:
            "Galio tire deux rafales de vent qui convergent pour créer une grande tornade infligeant des dégâts sur la durée.",
          tooltip:
            "Galio tire deux rafales qui infligent {{ qmissiledamage }} pts de dégâts magiques.<br /><br />Quand les rafales se croisent, elles créent une tornade géante qui inflige en {{ superqduration }} sec des dégâts magiques équivalents à {{ percentsuperqdamagett }}% des PV max des ennemis ({{ superqmonstermaxdamagetotal }} max contre les monstres).",
          leveltip: {
            label: [
              "Dégâts de la rafale",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 11.5, 11, 10.5, 10],
          cooldownBurn: "12/11.5/11/10.5/10",
          cost: [70, 75, 80, 85, 90],
          costBurn: "70/75/80/85/90",
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
          range: [825, 825, 825, 825, 825],
          rangeBurn: "825",
          image: {
            full: "GalioQ.png",
            sprite: "spell3.png",
            group: "spell",
            x: 384,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "GalioW",
          name: "Bouclier de Durand",
          description:
            "Galio canalise une posture défensive, ce qui ralentit ses déplacements. Au relâchement de la canalisation, Galio provoque et blesse les ennemis proches.",
          tooltip:
            '<span class="colorFF9900">Passive :</span> s\'il ne subit pas de dégâts pendant {{ passiveshieldooctimer }} sec, Galio obtient un bouclier qui absorbe {{ totalpassiveshield }} pts de dégâts magiques.<br /><br /><span class="colorFF9900">Première activation :</span> Galio lance une canalisation, gagnant {{ e1 }} <span class="colorFF00FF">(+{{ f2 }})</span><span class="color99FF99">(+{{ f4 }})</span>% de réduction des dégâts magiques et {{ f5 }}% de ce montant en tant que réduction des dégâts physiques. Pendant la canalisation, Galio est ralenti de {{ e3 }}%.<br /><br /><span class="colorFF9900">Deuxième activation :</span> Galio provoque les champions ennemis proches pendant {{ e4 }} à {{ e7 }} sec, inflige {{ minimumwbasedamage }} <span class="color99FF99">(+{{ f9 }})</span> à {{ maximumwbasedamage }} <span class="color99FF99">(+{{ f11 }})</span> pts de dégâts et actualise la réduction des dégâts pendant {{ e8 }} sec. La durée, les dégâts et le rayon de la provocation augmentent avec la durée de la canalisation.',
          leveltip: {
            label: [
              "Ratio de PV du bouclier",
              "Réduction des dégâts magiques",
              "Réduction des dégâts physiques",
              "Délai de récupération",
              "Dégâts maximum",
            ],
            effect: [
              "{{ passiveshieldhealthratio*100.000000 }}% -> {{ passiveshieldhealthrationl*100.000000 }}%",
              "{{ e1 }}% -> {{ e1NL }}%",
              "{{ effect1amount*0.500000 }}% -> {{ effect1amountnl*0.500000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ maximumwbasedamage }} -> {{ maximumwbasedamageNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [16, 15, 14, 13, 12],
          cooldownBurn: "16/15/14/13/12",
          cost: [50, 50, 50, 50, 50],
          costBurn: "50",
          datavalues: {},
          effect: [
            null,
            [20, 25, 30, 35, 40],
            [2, 2, 2, 2, 2],
            [15, 15, 15, 15, 15],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [2, 2, 2, 2, 2],
            [1.25, 1.25, 1.25, 1.25, 1.25],
            [5, 5, 5, 5, 5],
          ],
          effectBurn: [
            null,
            "20/25/30/35/40",
            "2",
            "15",
            "0.5",
            "0",
            "0",
            "1.5",
            "2",
            "1.25",
            "5",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [275, 275, 275, 275, 275],
          rangeBurn: "275",
          image: {
            full: "GalioW.png",
            sprite: "spell3.png",
            group: "spell",
            x: 432,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "GalioE",
          name: "Horion de la justice",
          description:
            "Galio fait un pas en arrière et charge, projetant en l'air le premier champion ennemi qu'il touche.",
          tooltip:
            "Galio se jette en avant pour donner un puissant coup de poing, infligeant {{ totaldamage }} pts de dégâts magiques au premier champion touché et le projetant en l'air pendant {{ knockupduration }} sec. Les ennemis sur son chemin subissent {{ pvedamage }} pts de dégâts magiques.<br /><br />Galio s'arrête quand Horion de la justice touche un élément du terrain.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 11, 10, 9, 8],
          cooldownBurn: "12/11/10/9/8",
          cost: [50, 50, 50, 50, 50],
          costBurn: "50",
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
            full: "GalioE.png",
            sprite: "spell3.png",
            group: "spell",
            x: 0,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "GalioR",
          name: "Entrée héroïque",
          description:
            "Galio désigne la position d'un allié comme zone d'atterrissage, octroyant un bouclier anti-dégâts magiques à tous les alliés dans la zone. Après un délai, Galio s'abat sur cet emplacement, projetant en l'air les ennemis proches.",
          tooltip:
            "Galio désigne la position d'un champion allié comme zone d'atterrissage. Tous les champions alliés se trouvant dans la zone reçoivent le bouclier anti-dégâts magiques de <spellTag>Bouclier de Durand</spellTag> pendant {{ temporarywshieldduration }} sec.<br /><br />Quand Galio atterrit, les ennemis dans la zone subissent {{ totaldamage }} pts de dégâts magiques et sont projetés dans les airs pendant {{ stundurationouter }} sec.",
          leveltip: {
            label: ["Dégâts", "Portée", "Délai de récupération"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ castrange }} -> {{ castrangeNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [200, 180, 160],
          cooldownBurn: "200/180/160",
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
          range: [4000, 4750, 5500],
          rangeBurn: "4000/4750/5500",
          image: {
            full: "GalioR.png",
            sprite: "spell3.png",
            group: "spell",
            x: 48,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Frappe colossale",
        description:
          "Toutes les quelques secondes, la prochaine attaque de base de Galio inflige des dégâts magiques supplémentaires dans une zone.",
        image: {
          full: "Galio_Passive.png",
          sprite: "passive1.png",
          group: "passive",
          x: 48,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Galio",
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
              appendAfterSection: "",
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
              appendAfterSection: "",
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "1033", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
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
              appendAfterSection: "",
              items: [
                { id: "3001", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3025", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Galio",
          title: "GalioARAM",
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
                { id: "3010", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
                { id: "3001", count: 1, hideCount: false },
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
        {
          champion: "Galio",
          title: "GalioFIRSTBLOOD",
          map: "HA",
          mode: "FIRSTBLOOD",
          type: "riot",
          customTag: "",
          requiredPerk: "",
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
              type: "early",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3028", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "1057", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
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
              items: [
                { id: "2003", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Galio",
          title: "GalioARAM",
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
                { id: "3010", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
                { id: "3001", count: 1, hideCount: false },
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
        {
          champion: "Galio",
          title: "GalioSL",
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
                { id: "3108", count: 1, hideCount: false },
                { id: "1027", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3135", count: 1, hideCount: false },
                { id: "3194", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
                { id: "3193", count: 1, hideCount: false },
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
          champion: "Galio",
          title: "GalioSR",
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
                { id: "3145", count: 1, hideCount: false },
                { id: "3067", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
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
                { id: "3194", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
                { id: "3135", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
                { id: "3193", count: 1, hideCount: false },
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
export default Galio2 ;