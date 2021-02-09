const Nasus = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Nasus: {
      id: "Nasus",
      key: "75",
      name: "Nasus",
      title: "Gardien des sables",
      image: {
        full: "Nasus.png",
        sprite: "champion2.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "75000", num: 0, name: "default", chromas: false },
        { id: "75001", num: 1, name: "Nasus galactique", chromas: false },
        { id: "75002", num: 2, name: "Nasus pharaon", chromas: false },
        {
          id: "75003",
          num: 3,
          name: "Nasus chevalier d'effroi",
          chromas: true,
        },
        { id: "75004", num: 4, name: "Nasus K-Nine", chromas: false },
        { id: "75005", num: 5, name: "Nasus infernal", chromas: false },
        { id: "75006", num: 6, name: "Archiduc Nasus", chromas: false },
        { id: "75010", num: 10, name: "Nasus brise-monde", chromas: false },
        { id: "75011", num: 11, name: "Nasus gardien lunaire", chromas: true },
      ],
      lore:
        "Nasus est un imposant Transfiguré à tête de chacal, une figure héroïque que les peuples du désert considéraient comme un demi-dieu aux temps anciens de Shurima. Il était très intelligent ; son savoir encyclopédique et son extraordinaire sens stratégique guidèrent l'antique empire de Shurima vers la grandeur pendant des siècles. Après la chute de l'empire, il s'imposa un exil et devint peu à peu une légende. Maintenant que l'ancienne cité de Shurima renaît de ses cendres, il est de retour, déterminé à empêcher qu'elle ne chute de nouveau.",
      blurb:
        "Nasus est un imposant Transfiguré à tête de chacal, une figure héroïque que les peuples du désert considéraient comme un demi-dieu aux temps anciens de Shurima. Il était très intelligent ; son savoir encyclopédique et son extraordinaire sens stratégique...",
      allytips: [
        "Savoir utiliser Buveuse d'âmes pour infliger des coups fatals peut avoir un impact majeur en fin de partie.",
        "En solo, Esprit enflammé est un bon moyen de farmer sur une voie. Si vous êtes deux sur la voie, cela peut mal se finir. Trouvez le bon équilibre entre donner le dernier coup avec Buveuse d'âmes et le farming à effet de zone.",
        "Si vos défenses sont faibles, les autres se concentrent sur vous, même pendant votre ultime. Achetez des objets de survie, même en jouant DPS.",
      ],
      enemytips: [
        "Lorsqu'il est transformé par son ultime, Nasus est plus puissant que la plupart des autres champions. Évitez de l'attaquer si vous n'avez pas un avantage certain.",
        "Au niveau max, Flétrissement est très efficace pour contrer les ennemis orientés vers les dégâts d'attaque. Évitez de vous retrouver isolé.",
        "Nasus a tendance à pourchasser ses cibles. Évitez de l'attaquer s'il a tous ses PV.",
      ],
      tags: ["Fighter", "Tank"],
      partype: "Mana",
      info: { attack: 7, defense: 5, magic: 6, difficulty: 6 },
      stats: {
        hp: 561.2,
        hpperlevel: 90,
        mp: 325.6,
        mpperlevel: 42,
        movespeed: 350,
        armor: 34,
        armorperlevel: 3.5,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 9,
        hpregenperlevel: 0.9,
        mpregen: 7.44,
        mpregenperlevel: 0.5,
        crit: 0,
        critperlevel: 0,
        attackdamage: 67,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 3.48,
        attackspeed: 0.638,
      },
      spells: [
        {
          id: "NasusQ",
          name: "Buveuse d'âmes",
          description:
            "Nasus frappe son ennemi, infligeant des dégâts et augmentant la puissance des prochaines Buveuses d'âmes s'il tue sa cible.",
          tooltip:
            'La prochaine attaque de base de Nasus infligera {{ e1 }} <scaleAD>(+{{ a2 }})</scaleAD> <span class="color5555FF">(+{{ f1 }})</span> pts de dégâts physiques.<br /><br />Buveuse d\'âmes voit ses dégâts augmenter de <span class="color5555FF">{{ e2 }}</span> de façon permanente quand elle tue un ennemi. Ce bonus est augmenté à <span class="color5555FF">{{ e4 }}</span> contre les champions, les grands sbires et les grands monstres.',
          leveltip: {
            label: ["Dégâts de base", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [8, 7, 6, 5, 4],
          cooldownBurn: "8/7/6/5/4",
          cost: [20, 20, 20, 20, 20],
          costBurn: "20",
          datavalues: {},
          effect: [
            null,
            [30, 50, 70, 90, 110],
            [3, 3, 3, 3, 3],
            [25, 25, 25, 25, 25],
            [12, 12, 12, 12, 12],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "30/50/70/90/110",
            "3",
            "25",
            "12",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "attackdamage", coeff: 1, key: "a2" },
            { link: "@stacks", coeff: 3, key: "f1" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [300, 300, 300, 300, 300],
          rangeBurn: "300",
          image: {
            full: "NasusQ.png",
            sprite: "spell8.png",
            group: "spell",
            x: 96,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "NasusW",
          name: "Flétrissement",
          description:
            "Nasus fait vieillir un champion ennemi et ralentit ses vitesses d'attaque et de déplacement sur la durée.",
          tooltip:
            "Nasus fait vieillir le champion ciblé en {{ e3 }} sec, réduisant sa vitesse de déplacement de {{ e2 }}%. Ce ralentissement augmente jusqu'à {{ e1 }}% sur la durée. La vitesse d'attaque de la cible est réduite de la moitié de ce montant.",
          leveltip: {
            label: ["Ralentissement max", "Délai de récupération"],
            effect: [
              "{{ e1 }}% -> {{ e1NL }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [15, 14, 13, 12, 11],
          cooldownBurn: "15/14/13/12/11",
          cost: [80, 80, 80, 80, 80],
          costBurn: "80",
          datavalues: {},
          effect: [
            null,
            [47, 59, 71, 83, 95],
            [35, 35, 35, 35, 35],
            [5, 5, 5, 5, 5],
            [17.5, 17.5, 17.5, 17.5, 17.5],
            [1.5, 3, 4.5, 6, 7.5],
            [3, 6, 9, 12, 15],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "47/59/71/83/95",
            "35",
            "5",
            "17.5",
            "1.5/3/4.5/6/7.5",
            "3/6/9/12/15",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [700, 700, 700, 700, 700],
          rangeBurn: "700",
          image: {
            full: "NasusW.png",
            sprite: "spell8.png",
            group: "spell",
            x: 144,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "NasusE",
          name: "Esprit enflammé",
          description:
            "Nasus libère un esprit enflammé sur une zone, infligeant des dégâts aux ennemis qui s'y trouvent et réduisant leur armure.",
          tooltip:
            "Nasus libère un esprit enflammé sur la zone ciblée, infligeant {{ e4 }} <scaleAP>(+{{ a2 }})</scaleAP> pts de dégâts magiques.<br /><br />Pendant les {{ e3 }} prochaines secondes, les ennemis dans la zone voient leur armure être réduite de {{ e2 }}% et ils subissent {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques supplémentaires chaque seconde.",
          leveltip: {
            label: [
              "Dégâts initiaux",
              "Dégâts par seconde",
              "% réduction d'armure",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e4 }} -> {{ e4NL }}",
              "{{ e1 }} -> {{ e1NL }}",
              "{{ effect2amount*-100.000000 }}% -> {{ effect2amountnl*-100.000000 }}%",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 12, 12, 12, 12],
          cooldownBurn: "12",
          cost: [70, 85, 100, 115, 130],
          costBurn: "70/85/100/115/130",
          datavalues: {},
          effect: [
            null,
            [11, 19, 27, 35, 43],
            [25, 30, 35, 40, 45],
            [5, 5, 5, 5, 5],
            [55, 95, 135, 175, 215],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "11/19/27/35/43",
            "25/30/35/40/45",
            "5",
            "55/95/135/175/215",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.6, key: "a2" },
            { link: "spelldamage", coeff: 0.12, key: "a1" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "NasusE.png",
            sprite: "spell8.png",
            group: "spell",
            x: 192,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "NasusR",
          name: "Fureur des sables",
          description:
            "Nasus libère une puissante tempête de sable. Tant que la tempête fait rage, il a plus de PV, sa portée d'attaque est augmentée, il blesse les ennemis proches, il augmente son armure et sa résistance magique et le délai de récupération de Buveuse d'âmes est réduit pour toute la durée du sort.",
          tooltip:
            "Nasus est renforcé par une tempête de sable pendant 15 sec, augmentant ses PV max de {{ bonushealth }} et son armure et sa résistance magique de {{ initialresistgain }}.<br /><br />Tant que la tempête fait rage, il inflige chaque seconde des dégâts magiques équivalents à {{ damagecalc }} des PV max des ennemis proches ({{ maxdamagecap }} pts de dégâts max par sec), il reçoit un bonus supplémentaire de +{{ statgainpersecond }} en armure et résistance magique chaque seconde et le délai de récupération de Buveuse d'âmes est réduit de {{ qcdr*100 }}%.",
          leveltip: {
            label: [
              "PV supplémentaires",
              "% des PV max",
              "Armure et résistance magique initiales",
              "Armure et résistance magique croissantes",
            ],
            effect: [
              "{{ bonushealth }} -> {{ bonushealthNL }}",
              "{{ aoedamagepercent*100.000000 }}% -> {{ aoedamagepercentnl*100.000000 }}%",
              "{{ initialresistgain }} -> {{ initialresistgainNL }}",
              "{{ statgainpersecond }} -> {{ statgainpersecondNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [120, 120, 120],
          cooldownBurn: "120",
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
          range: [20, 20, 20],
          rangeBurn: "20",
          image: {
            full: "NasusR.png",
            sprite: "spell8.png",
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
        name: "Mangeur d'âmes",
        description:
          "Nasus draine l'énergie spirituelle de son adversaire et profite d'un bonus de Vol de vie.",
        image: {
          full: "Nasus_Passive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 336,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Nasus",
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
                { id: "1055", count: 1, hideCount: false },
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
                { id: "1028", count: 1, hideCount: false },
                { id: "1036", count: 1, hideCount: false },
                { id: "3044", count: 1, hideCount: false },
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
                { id: "3057", count: 1, hideCount: false },
                { id: "3086", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3742", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Nasus",
          title: "NasusARAM",
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3800", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
          champion: "Nasus",
          title: "NasusFIRSTBLOOD",
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
                { id: "2033", count: 1, hideCount: false },
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
                { id: "3024", count: 1, hideCount: false },
                { id: "3067", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3025", count: 1, hideCount: false },
                { id: "3748", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Nasus",
          title: "NasusARAM",
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3800", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
          champion: "Nasus",
          title: "NasusSL",
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
                { id: "3024", count: 1, hideCount: false },
                { id: "3057", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "4103", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3025", count: 1, hideCount: false },
                { id: "3748", count: 1, hideCount: false },
                { id: "4401", count: 1, hideCount: false },
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
          champion: "Nasus",
          title: "NasusSR",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3057", count: 1, hideCount: false },
                { id: "3211", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: false },
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
                { id: "3057", count: 1, hideCount: false },
                { id: "1401", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
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
                { id: "3742", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3800", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
                { id: "3025", count: 1, hideCount: false },
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
      ],
    },
  },
};
export default Nasus;