const Xerath = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Xerath: {
      id: "Xerath",
      key: "101",
      name: "Xerath",
      title: "Mage suprême",
      image: {
        full: "Xerath.png",
        sprite: "champion4.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "101000", num: 0, name: "default", chromas: false },
        { id: "101001", num: 1, name: "Xerath runique", chromas: false },
        { id: "101002", num: 2, name: "Proto Xerath", chromas: false },
        {
          id: "101003",
          num: 3,
          name: "Xerath de la terre brûlée",
          chromas: false,
        },
        {
          id: "101004",
          num: 4,
          name: "Xerath gardien des sables",
          chromas: false,
        },
        {
          id: "101005",
          num: 5,
          name: "Xerath du pulsar sombre",
          chromas: true,
        },
      ],
      lore:
        "Xerath est un mage transfiguré de la Shurima antique, un être d'énergie arcanique habitant les fragments détruits d'un sarcophage magique. Pendant des millénaires, il est resté prisonnier des sables du désert, mais le retour de Shurima l'a libéré de sa prison ancestrale. Devenu ivre de pouvoir, il cherche désormais à reprendre ce qu'il croit lui être dû et à remplacer les civilisations arrivistes qui ont pris possession du monde par une nouvelle, façonnée à son image.",
      blurb:
        "Xerath est un mage transfiguré de la Shurima antique, un être d'énergie arcanique habitant les fragments détruits d'un sarcophage magique. Pendant des millénaires, il est resté prisonnier des sables du désert, mais le retour de Shurima l'a libéré de sa...",
      allytips: [
        "Il est plus facile de lancer Rayon arcanique sur une cible se déplaçant vers ou loin de vous que sur une cible se déplaçant latéralement.",
        "Œil de la destruction vous aidera à placer Rayon arcanique en ralentissant votre cible.",
        "Si vous étourdissez un ennemi avec Orbe d'électrocution, vous pouvez enchaîner avec un Œil de la destruction bien centré.",
      ],
      enemytips: [
        "La portée de Xerath peut être intimidante, mais la plupart des champions capables d'aller au corps à corps peuvent compenser ce désavantage.",
        "Il faut beaucoup de temps à Xerath pour activer Rite arcanique. Guettez son animation d'incantation et esquivez.",
        "Voile de la banshee empêchera Xerath de placer trop facilement Orbe d'électrocution.",
      ],
      tags: ["Mage"],
      partype: "Mana",
      info: { attack: 1, defense: 3, magic: 10, difficulty: 8 },
      stats: {
        hp: 526,
        hpperlevel: 92,
        mp: 459,
        mpperlevel: 22,
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
        attackdamage: 54.7,
        attackdamageperlevel: 3,
        attackspeedperlevel: 1.36,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "XerathArcanopulseChargeUp",
          name: "Rayon arcanique",
          description:
            "Tire un rayon d'énergie à longue portée, infligeant des dégâts magiques à toutes les cibles touchées.",
          tooltip:
            "<spellPassive>Première activation :</spellPassive> Xerath charge Rayon arcanique, ce qui réduit graduellement sa vitesse de déplacement tout en augmentant la portée du sort.<br /><br /><spellPassive>Deuxième activation :</spellPassive> Xerath tire Rayon arcanique, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques à tous les ennemis sur une ligne.<br /><br />Pendant qu'il charge Rayon arcanique, Xerath ne peut pas attaquer ou lancer d'autres sorts. Si Xerath ne tire pas le rayon, il récupère la moitié du coût en mana.",
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ ammorechargetime }} -> {{ ammorechargetimeNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [9, 8, 7, 6, 5],
          cooldownBurn: "9/8/7/6/5",
          cost: [80, 90, 100, 110, 120],
          costBurn: "80/90/100/110/120",
          datavalues: {},
          effect: [
            null,
            [80, 120, 160, 200, 240],
            [4, 4, 4, 4, 4],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [145, 145, 145, 145, 145],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [-0.2, -0.2, -0.2, -0.2, -0.2],
            [0.1, 0.1, 0.1, 0.1, 0.1],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/120/160/200/240",
            "4",
            "0.5",
            "145",
            "0.5",
            "-0.2",
            "0.1",
            "0.5",
            "1.5",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.75, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "1",
          range: [750, 750, 750, 750, 750],
          rangeBurn: "750",
          image: {
            full: "XerathArcanopulseChargeUp.png",
            sprite: "spell14.png",
            group: "spell",
            x: 96,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "XerathArcaneBarrage2",
          name: "Œil de la destruction",
          description:
            "Fait tomber un barrage d'énergie arcanique, infligeant des dégâts magiques et ralentissant tous les ennemis dans la zone. Les cibles au centre de la zone d'effet subissent des dégâts supplémentaires et sont ralenties davantage.",
          tooltip:
            "Xerath fait tomber un rayon d'énergie arcanique, infligeant <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> à tous les ennemis dans la zone ciblée et les ralentissant de {{ slowamount*100 }}% pendant {{ slowduration }} sec. Les ennemis au centre de l'explosion subissent <magicDamage>{{ sweetspottotaldamage }} pts de dégâts magiques</magicDamage> et sont ralentis de {{ sweetspotslowamount*100 }}% (décroissant jusqu'à {{ slowamount*100 }}%).",
          leveltip: {
            label: [
              "Dégâts",
              "Ralentissement max",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ sweetspotslowamount*100.000000 }}% -> {{ sweetspotslowamountnl*100.000000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [14, 13, 12, 11, 10],
          cooldownBurn: "14/13/12/11/10",
          cost: [70, 80, 90, 100, 110],
          costBurn: "70/80/90/100/110",
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
          maxammo: "1",
          range: [1000, 1000, 1000, 1000, 1000],
          rangeBurn: "1000",
          image: {
            full: "XerathArcaneBarrage2.png",
            sprite: "spell14.png",
            group: "spell",
            x: 144,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "XerathMageSpear",
          name: "Orbe d'électrocution",
          description: "Étourdit un ennemi et lui inflige des dégâts magiques.",
          tooltip:
            "Xerath tire un orbe de magie brute. Le premier ennemi touché subit {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et est étourdi pendant une durée allant de {{ e8 }} à {{ e2 }} sec. La durée de l'étourdissement augmente avec la distance parcourue par l'orbe.",
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ ammorechargetime }} -> {{ ammorechargetimeNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [13, 12.5, 12, 11.5, 11],
          cooldownBurn: "13/12.5/12/11.5/11",
          cost: [60, 65, 70, 75, 80],
          costBurn: "60/65/70/75/80",
          datavalues: {},
          effect: [
            null,
            [80, 110, 140, 170, 200],
            [2, 2, 2, 2, 2],
            [0.17, 0.17, 0.17, 0.17, 0.17],
            [1125, 1125, 1125, 1125, 1125],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/110/140/170/200",
            "2",
            "0.17",
            "1125",
            "0.5",
            "0",
            "0",
            "0.5",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.45, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "1",
          range: [1050, 1050, 1050, 1050, 1050],
          rangeBurn: "1050",
          image: {
            full: "XerathMageSpear.png",
            sprite: "spell14.png",
            group: "spell",
            x: 192,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "XerathLocusOfPower2",
          name: "Rite arcanique",
          description:
            "Xerath s'immobilise et obtient plusieurs tirs de barrage à longue portée.",
          tooltip:
            "Xerath dévoile sa forme véritable, ce qui l'immobilise et lui fait gagner {{ e2 }} Barrages arcaniques. Ces tirs d'artillerie magiques infligent {{ e3 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques à tous les ennemis touchés.<br /><br />L'immobilisation prend fin après {{ e1 }} sec, quand tous les tirs ont été effectués ou si vous déplacez Xerath. Si aucun Barrage arcanique n'est tiré, le délai de récupération est réduit de {{ e7 }}%.",
          leveltip: {
            label: ["Dégâts", "Nombre de tirs", "Délai de récupération"],
            effect: [
              "{{ e3 }} -> {{ e3NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [130, 115, 100],
          cooldownBurn: "130/115/100",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [10, 10, 10],
            [3, 4, 5],
            [200, 250, 300],
            [200, 200, 200],
            [5000, 5000, 5000],
            [0.6, 0.6, 0.6],
            [50, 50, 50],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "10",
            "3/4/5",
            "200/250/300",
            "200",
            "5000",
            "0.6",
            "50",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.45, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [5000, 5000, 5000],
          rangeBurn: "5000",
          image: {
            full: "XerathLocusOfPower2.png",
            sprite: "spell14.png",
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
        name: "Afflux de mana",
        description:
          "Les attaques de base de Xerath restaurent régulièrement du mana.",
        image: {
          full: "Xerath_Passive1.png",
          sprite: "passive4.png",
          group: "passive",
          x: 336,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Xerath",
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Xerath",
          title: "XerathARAM",
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Xerath",
          title: "XerathFIRSTBLOOD",
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
              hideIfSummonerSpell: "",
              items: [
                { id: "3020", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
                { id: "3003", count: 1, hideCount: false },
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
              items: [
                { id: "2003", count: 1, hideCount: true },
                { id: "2043", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Xerath",
          title: "XerathARAM",
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Xerath",
          title: "XerathSL",
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
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
        {
          champion: "Xerath",
          title: "XerathSR",
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
                { id: "3916", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
export default Xerath;