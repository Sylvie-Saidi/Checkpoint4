const Vladimir = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Vladimir: {
      id: "Vladimir",
      key: "8",
      name: "Vladimir",
      title: "Saigneur pourpre",
      image: {
        full: "Vladimir.png",
        sprite: "champion4.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "8000", num: 0, name: "default", chromas: false },
        { id: "8001", num: 1, name: "Comte Vladimir", chromas: false },
        { id: "8002", num: 2, name: "Marquis Vladimir", chromas: false },
        { id: "8003", num: 3, name: "Vladimir nosferatu", chromas: false },
        { id: "8004", num: 4, name: "Vladimir biker", chromas: false },
        { id: "8005", num: 5, name: "Vladimir sanguinaire", chromas: false },
        { id: "8006", num: 6, name: "Vladimir voleur d'âmes", chromas: false },
        { id: "8007", num: 7, name: "Vladiplômé", chromas: false },
        {
          id: "8008",
          num: 8,
          name: "Vladimir des eaux sombres",
          chromas: true,
        },
        {
          id: "8014",
          num: 14,
          name: "Vladimir héraut de la nuit",
          chromas: true,
        },
      ],
      lore:
        "Assoiffé de sang humain, Vladimir influe sur la politique de Noxus depuis les premiers jours de l'empire. En plus d'allonger surnaturellement sa vie, sa maîtrise de l'hémomancie lui permet de contrôler les esprits et les corps des autres aussi aisément que les siens. Dans les flamboyants salons de l'aristocratie noxienne, cela lui a permis de créer autour de lui un culte de la personnalité. Cependant, dans les bas-fonds, il saigne littéralement ses ennemis à blanc.",
      blurb:
        "Assoiffé de sang humain, Vladimir influe sur la politique de Noxus depuis les premiers jours de l'empire. En plus d'allonger surnaturellement sa vie, sa maîtrise de l'hémomancie lui permet de contrôler les esprits et les corps des autres aussi aisément...",
      allytips: [
        "Transfusion inflige directement des dégâts à l'ennemi avant de soigner Vladimir, ce qui en fait l'une des meilleures compétences pour donner le coup fatal aux sbires.",
        "Lancez Peste sanguine dans une zone où il y a beaucoup d'ennemis.",
        "Bain de sang arrête les projectiles, ce qui est efficace pour contrer les effets néfastes.",
      ],
      enemytips: [
        "Essayez de tuer Vladimir avant que Peste sanguine n'explose, car il récupérera des PV pour chaque champion ennemi affecté.",
        "Forcez Vladimir à utiliser Bain de sang au début d'un combat pour que cette compétence lui coûte le plus de PV possible.",
        "Les objets qui contrent l'accumulation de PV, comme Tourment de Liandry et Lame du roi déchu, sont très efficaces contre Vladimir.",
      ],
      tags: ["Mage"],
      partype: "Afflux sanguin",
      info: { attack: 2, defense: 6, magic: 8, difficulty: 7 },
      stats: {
        hp: 537,
        hpperlevel: 96,
        mp: 2,
        mpperlevel: 0,
        movespeed: 330,
        armor: 23,
        armorperlevel: 3.3,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 450,
        hpregen: 7,
        hpregenperlevel: 0.6,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 55,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2,
        attackspeed: 0.658,
      },
      spells: [
        {
          id: "VladimirQ",
          name: "Transfusion",
          description:
            "Vladimir vole les PV de l'ennemi ciblé. Quand la jauge de ressource de Vladimir est pleine, Transfusion infligera beaucoup plus de dégâts et rendra beaucoup plus de PV pendant un court instant.",
          tooltip:
            'Vladimir aspire la force vitale de sa cible, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et récupérant {{ e2 }}<scaleAP> (+{{ a2 }})</scaleAP> PV. Après avoir lancé deux fois Transfusion, Vladimir obtient <span class="colorFFB3B3">Afflux sanguin</span> la prochaine fois que cette compétence est disponible.<br /><br /><span class="colorFFB3B3">Afflux sanguin :</span> Vladimir accélère brièvement et, pendant {{ e8 }} sec, Transfusion inflige {{ e7 }}% de dégâts supplémentaires et lui rend des PV supplémentaires équivalents à <scaleLevel>{{ f7 }}</scaleLevel> plus {{ e5 }}% <scaleAP>(+{{ f6 }}%)</scaleAP> de ses PV manquants (les soins renforcés ont {{ e9 }}% d\'efficacité contre les sbires).  ',
          leveltip: {
            label: ["Dégâts", "Soins", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [9, 8, 7, 6, 5],
          cooldownBurn: "9/8/7/6/5",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [80, 100, 120, 140, 160],
            [20, 25, 30, 35, 40],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [5, 5, 5, 5, 5],
            [0.04, 0.04, 0.04, 0.04, 0.04],
            [85, 85, 85, 85, 85],
            [2.5, 2.5, 2.5, 2.5, 2.5],
            [35, 35, 35, 35, 35],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/100/120/140/160",
            "20/25/30/35/40",
            "0",
            "0",
            "5",
            "0.04",
            "85",
            "2.5",
            "35",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.6, key: "a1" },
            { link: "spelldamage", coeff: 0.35, key: "a2" },
          ],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [600, 600, 600, 600, 600],
          rangeBurn: "600",
          image: {
            full: "VladimirQ.png",
            sprite: "spell13.png",
            group: "spell",
            x: 288,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "VladimirSanguinePool",
          name: "Bain de sang",
          description:
            "Vladimir plonge dans une flaque de sang, devenant impossible à cibler pendant 2 sec. Les ennemis dans la flaque sont ralentis et Vladimir peut aspirer leur vie.",
          tooltip:
            'Vladimir plonge dans une flaque de sang pendant 2 sec, ce qui lui permet brièvement d\'accélérer, de devenir impossible à cibler et de ralentir de {{ e3 }}% les ennemis au-dessus de lui.<br /><br />Vladimir inflige {{ e1 }} <span class="colorCC3300">(+{{ f1 }}) [{{ e4 }}% des PV supplémentaires]</span> pts de dégâts magiques sur la durée et récupère des PV équivalents à {{ e5 }}% de ce montant.<br /><br />Bain de sang peut être lancé tout en chargeant Vague de sang.',
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [28, 25, 22, 19, 16],
          cooldownBurn: "28/25/22/19/16",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [80, 135, 190, 245, 300],
            [20, 20, 20, 20, 20],
            [40, 40, 40, 40, 40],
            [10, 10, 10, 10, 10],
            [15, 15, 15, 15, 15],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/135/190/245/300",
            "20",
            "40",
            "10",
            "15",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "bonushealth", coeff: 0.15, key: "f1" }],
          costType: "% des PV actuels",
          maxammo: "-1",
          range: [350, 350, 350, 350, 350],
          rangeBurn: "350",
          image: {
            full: "VladimirSanguinePool.png",
            sprite: "spell13.png",
            group: "spell",
            x: 336,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Coûte {{ e2 }}% des PV actuels",
        },
        {
          id: "VladimirE",
          name: "Vagues de sang",
          description:
            "Vladimir dépense ses propres PV pour charger un orbe de sang qui, une fois lâché, infligera des dégâts de zone autour de lui. Les Vagues de sang peuvent être bloquées par les unités ennemies.",
          tooltip:
            '<spellPassive>Première activation : </spellPassive>Vladimir charge un orbe de sang, dépensant jusqu\'à <span class="colorCC3300">{{ e2 }}% de ses PV max ({{ f3 }})</span> pour augmenter les dégâts de ce sort. Quand l\'orbe est pleinement chargé, Vladimir est ralenti.<br /><br /><spellPassive>Deuxième activation : </spellPassive>Vladimir lance une vague de sang sur les ennemis proches, infligeant de {{ e3 }}<span class="colorCC3300"> (+{{ f2 }})</span><scaleAP> (+{{ a1 }})</scaleAP> à {{ e0 }}<span class="colorCC3300"> (+{{ f4 }})</span><scaleAP> (+{{ a2 }})</scaleAP> pts de dégâts magiques. Quand l\'orbe est pleinement chargé, les ennemis sont aussi brièvement ralentis de {{ e9 }}%. Les cibles touchées bloquent une partie de la vague de sang.<br /><br />La vague de sang est relâchée automatiquement si elle est maintenue plus de {{ e7 }} sec.',
          leveltip: {
            label: [
              "Dégâts minimum",
              "Dégâts maximum",
              "Ralentissement",
              "Délai de récupération",
            ],
            effect: [
              "{{ e3 }} -> {{ e3NL }}",
              "{{ e0 }} -> {{ e0NL }}",
              "{{ e9 }}% -> {{ e9NL }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [13, 11, 9, 7, 5],
          cooldownBurn: "13/11/9/7/5",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [8, 8, 8, 8, 8],
            [30, 45, 60, 75, 90],
            [6, 6, 6, 6, 6],
            [150, 150, 150, 150, 150],
            [0, 0, 0, 0, 0],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [1, 1, 1, 1, 1],
            [40, 45, 50, 55, 60],
            [60, 90, 120, 150, 180],
          ],
          effectBurn: [
            null,
            "0",
            "8",
            "30/45/60/75/90",
            "6",
            "150",
            "0",
            "1.5",
            "1",
            "40/45/50/55/60",
            "60/90/120/150/180",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.35, key: "a1" },
            { link: "spelldamage", coeff: 0.8, key: "a2" },
          ],
          costType: "% des PV max",
          maxammo: "-1",
          range: [600, 600, 600, 600, 600],
          rangeBurn: "600",
          image: {
            full: "VladimirE.png",
            sprite: "spell13.png",
            group: "spell",
            x: 384,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Coût de canalisation : {{ e2 }}% des PV max",
        },
        {
          id: "VladimirHemoplague",
          name: "Peste sanguine",
          description:
            "Vladimir contamine une zone avec une peste virulente. Les ennemis infectés subissent plus de dégâts pendant la durée du sort. Après quelques secondes, Peste sanguine inflige des dégâts magiques aux ennemis infectés et rend des PV à Vladimir pour chaque champion ennemi touché.",
          tooltip:
            "Vladimir infecte les ennemis dans la zone ciblée avec une peste virulente, ce qui augmente tous les dégâts qu'ils subissent de {{ e2 }}% pendant {{ e4 }} sec.<br /><br />Au bout de {{ e4 }} sec, Vladimir inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques à toutes les cibles infectées. Si Peste sanguine blesse un champion ennemi, Vladimir récupère {{ f4 }} <scaleAP>(+{{ f3 }})</scaleAP> PV, plus {{ e5 }}% par champion touché en plus du premier.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [150, 135, 120],
          cooldownBurn: "150/135/120",
          cost: [0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [150, 250, 350],
            [10, 10, 10],
            [100, 100, 100],
            [4, 4, 4],
            [50, 50, 50],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "150/250/350",
            "10",
            "100",
            "4",
            "50",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.7, key: "a1" }],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [625, 625, 625],
          rangeBurn: "625",
          image: {
            full: "VladimirHemoplague.png",
            sprite: "spell13.png",
            group: "spell",
            x: 432,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
      ],
      passive: {
        name: "Pacte de sang",
        description:
          "Vladimir gagne 1 pt de puissance tous les 40 PV supplémentaires, et 1,4 PV supplémentaire tous les 1 pt de puissance (ces effets ne se cumulent pas entre eux).",
        image: {
          full: "VladimirP.png",
          sprite: "passive4.png",
          group: "passive",
          x: 144,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Vladimir",
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
              items: [{ id: "1054", count: 1, hideCount: false }],
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
                { id: "3152", count: 1, hideCount: false },
                { id: "3211", count: 1, hideCount: false },
                { id: "3108", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Vladimir",
          title: "VladimirARAM",
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
                { id: "3211", count: 1, hideCount: false },
                { id: "2003", count: 4, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Vladimir",
          title: "VladimirFIRSTBLOOD",
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
                { id: "1054", count: 1, hideCount: false },
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
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3145", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3001", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: true },
                { id: "2043", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Vladimir",
          title: "VladimirARAM",
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
                { id: "3211", count: 1, hideCount: false },
                { id: "2003", count: 4, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Vladimir",
          title: "VladimirSL",
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
                { id: "4201", count: 1, hideCount: false },
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
                { id: "3108", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "3152", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3135", count: 1, hideCount: false },
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
          champion: "Vladimir",
          title: "VladimirSR",
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
                { id: "1054", count: 1, hideCount: false },
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
                { id: "1001", count: 1, hideCount: false },
                { id: "3108", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
                { id: "3152", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
export default Vladimir;