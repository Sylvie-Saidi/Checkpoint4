const Tryndamere = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Tryndamere: {
      id: "Tryndamere",
      key: "23",
      name: "Tryndamere",
      title: "Roi barbare",
      image: {
        full: "Tryndamere.png",
        sprite: "champion4.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "23000", num: 0, name: "default", chromas: false },
        {
          id: "23001",
          num: 1,
          name: "Tryndamere des Highlands",
          chromas: false,
        },
        { id: "23002", num: 2, name: "Roi Tryndamere", chromas: false },
        { id: "23003", num: 3, name: "Tryndamere viking", chromas: false },
        { id: "23004", num: 4, name: "Tryndamere possédé", chromas: false },
        { id: "23005", num: 5, name: "Tryndamere sultan", chromas: false },
        {
          id: "23006",
          num: 6,
          name: "Tryndamere du royaume en guerre",
          chromas: false,
        },
        {
          id: "23007",
          num: 7,
          name: "Tryndamere du cauchemar",
          chromas: false,
        },
        {
          id: "23008",
          num: 8,
          name: "Tryndamere chasseur de bêtes",
          chromas: false,
        },
        {
          id: "23009",
          num: 9,
          name: "Tryndamere techno-chimique",
          chromas: false,
        },
        {
          id: "23010",
          num: 10,
          name: "Tryndamere lune de sang",
          chromas: true,
        },
      ],
      lore:
        "Poussé par une rage infinie, Tryndamere traverse Freljord et parfait sa maîtrise du combat en défiant les plus grands guerriers du nord, pour se préparer aux jours sombres qui s'annoncent. Longtemps dominé par sa haine, il cherchait à se venger de l'annihilation de son clan, mais il a depuis rencontré Ashe et trouvé un nouveau foyer auprès des Avarosans. Sa force est pratiquement surhumaine et son courage légendaire, et cela lui a permis de remporter avec ses nouveaux alliés d'innombrables victoires plus qu'improbables.",
      blurb:
        "Poussé par une rage infinie, Tryndamere traverse Freljord et parfait sa maîtrise du combat en défiant les plus grands guerriers du nord, pour se préparer aux jours sombres qui s'annoncent. Longtemps dominé par sa haine, il cherchait à se venger de...",
      allytips: [
        "Retarder l'utilisation de Rage inépuisable peut souvent pousser le champion ennemi à prendre des risques pour vous tuer.",
        "Soif de sang est très utile pour soigner Tryndamere ; utilisez ses charges avant qu'elles ne disparaissent.",
        "Si l'ennemi accumule les points d'armure, procurez-vous des objets comme Dernier souffle ou Lame spectre de Youmuu.",
      ],
      enemytips: [
        "Essayez de harceler rapidement Tryndamere pour qu'il ne puisse pas tuer de sbire et se soigner avec Soif de sang.",
        "N'oubliez pas que Tryndamere ne peut vous ralentir que si vous lui tournez le dos.",
        "Les dégâts de Tryndamere sont essentiellement physiques. S'il devient trop puissant, envisagez d'acheter une Cotte épineuse.",
      ],
      tags: ["Fighter", "Assassin"],
      partype: "Fureur",
      info: { attack: 10, defense: 5, magic: 2, difficulty: 5 },
      stats: {
        hp: 625.64,
        hpperlevel: 98,
        mp: 100,
        mpperlevel: 0,
        movespeed: 345,
        armor: 33,
        armorperlevel: 3.1,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 0.9,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 69,
        attackdamageperlevel: 3.7,
        attackspeedperlevel: 2.9,
        attackspeed: 0.67,
      },
      spells: [
        {
          id: "TryndamereQ",
          name: "Soif de sang",
          description:
            "Tryndamere s'épanouit lors des combats, ce qui accroît ses dégâts d'attaque au fur et à mesure qu'il subit des blessures. Il peut lancer Soif de sang pour consommer sa Fureur et se soigner.",
          tooltip:
            "<spellPassive>Passive :</spellPassive> Tryndamere a soif de sang, ce qui augmente ses dégâts d'attaque de {{ e1 }} plus {{ e2 }} tous les 1% de PV manquants.<br /><br /><spellActive>Active :</spellActive> Tryndamere consomme sa Fureur, récupérant {{ e3 }} <scaleAP>(+{{ a1 }})</scaleAP> PV, plus {{ e4 }} <scaleAP>(+{{ f2 }})</scaleAP> PV par point de Fureur consommé.",
          leveltip: {
            label: [
              "Dégâts d'attaque",
              "Dégâts d'attaque par pourcentage de PV manquants",
              "Soins",
              "PV rendus par point de Fureur",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ e3 }} -> {{ e3NL }}",
              "{{ e4 }} -> {{ e4NL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 12, 12, 12, 12],
          cooldownBurn: "12",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [5, 10, 15, 20, 25],
            [0.15, 0.2, 0.25, 0.3, 0.35],
            [30, 40, 50, 60, 70],
            [0.5, 0.95, 1.4, 1.85, 2.3],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "5/10/15/20/25",
            "0.15/0.2/0.25/0.3/0.35",
            "30/40/50/60/70",
            "0.5/0.95/1.4/1.85/2.3",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.3, key: "a1" }],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [400, 400, 400, 400, 400],
          rangeBurn: "400",
          image: {
            full: "TryndamereQ.png",
            sprite: "spell12.png",
            group: "spell",
            x: 96,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "TryndamereW",
          name: "Moquerie",
          description:
            "Tryndamere lance un hurlement, réduisant les dégâts d'attaque des champions proches. De plus, les ennemis ayant le dos tourné voient leur vitesse de déplacement être réduite.",
          tooltip:
            "Réduit les dégâts d'attaque des champions proches de {{ e1 }} pendant {{ e3 }} sec, et les ennemis qui ont le dos tourné voient aussi leur vitesse de déplacement être réduite de {{ e2 }}% pendant {{ e4 }} sec.",
          leveltip: {
            label: ["Réduction des dégâts physiques", "Ralentissement"],
            effect: [
              "{{ effect1amount*-1.000000 }} -> {{ effect1amountnl*-1.000000 }}",
              "{{ effect2amount*-100.000000 }}% -> {{ effect2amountnl*-100.000000 }}%",
            ],
          },
          maxrank: 5,
          cooldown: [14, 14, 14, 14, 14],
          cooldownBurn: "14",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [20, 35, 50, 65, 80],
            [30, 37.5, 45, 52.5, 60],
            [4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "20/35/50/65/80",
            "30/37.5/45/52.5/60",
            "4",
            "4",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [850, 850, 850, 850, 850],
          rangeBurn: "850",
          image: {
            full: "TryndamereW.png",
            sprite: "spell12.png",
            group: "spell",
            x: 144,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "TryndamereE",
          name: "Balafre",
          description:
            "Tryndamere lance un coup de taille vers une unité ciblée, infligeant des dégâts aux ennemis sur son chemin.",
          tooltip:
            "Tryndamere tourbillonne à travers ses ennemis, infligeant {{ e1 }} <scaleAD>(+{{ a2 }})</scaleAD> <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts physiques aux ennemis sur son chemin et générant de la Fureur.<br /><br />Le délai de récupération de Balafre est réduit de {{ e2 }} sec quand Tryndamere inflige un coup critique. Cette réduction est augmentée à {{ e3 }} sec contre les champions.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 11, 10, 9, 8],
          cooldownBurn: "12/11/10/9/8",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [80, 110, 140, 170, 200],
            [1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [5, 5, 5, 5, 5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/110/140/170/200",
            "1",
            "2",
            "2",
            "5",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "bonusattackdamage", coeff: 1.3, key: "a2" },
            { link: "spelldamage", coeff: 0.8, key: "a1" },
          ],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "TryndamereE.png",
            sprite: "spell12.png",
            group: "spell",
            x: 192,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "UndyingRage",
          name: "Rage inépuisable",
          description:
            "La soif de combattre de Tryndamere devient si puissante qu'il ne peut pas mourir, quelles que soient les blessures qu'il subit.",
          tooltip:
            "Tryndamere devient immortel pendant {{ e3 }} sec et conserve au moins {{ e2 }} PV tout en gagnant instantanément {{ e1 }} pts de Fureur.",
          leveltip: {
            label: [
              "Points de Fureur gagnés",
              "PV minimum",
              "Délai de récupération",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [110, 100, 90],
          cooldownBurn: "110/100/90",
          cost: [0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [50, 75, 100],
            [30, 50, 70],
            [5, 5, 5],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "50/75/100",
            "30/50/70",
            "5",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [400, 400, 400],
          rangeBurn: "400",
          image: {
            full: "UndyingRage.png",
            sprite: "spell12.png",
            group: "spell",
            x: 240,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
      ],
      passive: {
        name: "Vague de violence",
        description:
          "Tryndamere gagne de la Fureur à chaque attaque, coup critique et coup de grâce qu'il inflige. La Fureur augmente passivement ses chances de coup critique et elle peut être utilisée par sa compétence Soif de sang.",
        image: {
          full: "Tryndamere_Passive.png",
          sprite: "passive4.png",
          group: "passive",
          x: 96,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Tryndamere",
          title: "Beginner",
          type: "riot",
          map: "SR",
          mode: "INTRO",
          priority: false,
          blocks: [
            {
              type: "beginner_Starter",
              maxSummonerLevel: 4,
              items: [{ id: "1054", count: 1 }],
            },
            {
              type: "beginner_Starter",
              minSummonerLevel: 5,
              items: [
                { id: "1055", count: 1 },
                { id: "2003", count: 1 },
              ],
            },
            {
              type: "beginner_Advanced",
              recMath: true,
              items: [
                { id: "1036", count: 1 },
                { id: "1053", count: 1 },
              ],
            },
            {
              type: "beginner_MovementSpeed",
              recMath: true,
              items: [
                { id: "1001", count: 1 },
                { id: "1042", count: 1 },
                { id: "3006", count: 1 },
              ],
            },
            {
              type: "beginner_LegendaryItem",
              recMath: true,
              items: [
                { id: "1053", count: 1 },
                { id: "1038", count: 1 },
                { id: "3072", count: 1 },
              ],
            },
            {
              type: "beginner_MoreLegendaryItems",
              items: [
                { id: "3087", count: 1 },
                { id: "3065", count: 1 },
                { id: "3031", count: 1 },
                { id: "3035", count: 1 },
              ],
            },
          ],
        },
        {
          champion: "Tryndamere",
          title: "TryndamereARAM",
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
                { id: "3087", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3022", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
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
          champion: "Tryndamere",
          title: "TryndamereFIRSTBLOOD",
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
              hideIfSummonerSpell: "SummonerSmite",
              items: [
                { id: "1055", count: 1, hideCount: false },
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
              items: [
                { id: "1041", count: 1, hideCount: false },
                { id: "2003", count: 3, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              items: [
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
              items: [
                { id: "1416", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
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
              items: [
                { id: "3026", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
              items: [{ id: "2003", count: 1, hideCount: false }],
            },
          ],
        },
        {
          champion: "Tryndamere",
          title: "TryndamereARAM",
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
                { id: "3087", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3022", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
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
          champion: "Tryndamere",
          title: "TryndamereSL",
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
                { id: "3086", count: 1, hideCount: false },
                { id: "2015", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3153", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
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
                { id: "3742", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "2003", count: 3, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
                { id: "1043", count: 1, hideCount: false },
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
                { id: "4105", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
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
                { id: "3742", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3161", count: 1, hideCount: false },
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
          champion: "Tryndamere",
          title: "TryndamereSR",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3086", count: 1, hideCount: false },
                { id: "2015", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3153", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3026", count: 1, hideCount: false },
                { id: "3091", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "1041", count: 1, hideCount: false },
                { id: "2003", count: 3, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
                { id: "3706", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "1043", count: 1, hideCount: false },
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
                { id: "1416", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
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
                { id: "3026", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
export default Tryndamere;