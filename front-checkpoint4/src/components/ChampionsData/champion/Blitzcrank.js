const Blitzcrank = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Blitzcrank: {
      id: "Blitzcrank",
      key: "53",
      name: "Blitzcrank",
      title: "Golem de vapeur",
      image: {
        full: "Blitzcrank.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "53000", num: 0, name: "default", chromas: true },
        { id: "53001", num: 1, name: "Blitzcrank rouillé", chromas: false },
        {
          id: "53002",
          num: 2,
          name: "Blitzcrank gardien de but",
          chromas: false,
        },
        { id: "53003", num: 3, name: "Blitzcrank Boom Boom", chromas: false },
        {
          id: "53004",
          num: 4,
          name: "Blitzcrank Jackys Piltover",
          chromas: false,
        },
        { id: "53005", num: 5, name: "Blitzcrank incognito", chromas: false },
        { id: "53006", num: 6, name: "iBlitzcrank", chromas: false },
        {
          id: "53007",
          num: 7,
          name: "Blitzcrank anti-émeutes",
          chromas: false,
        },
        {
          id: "53011",
          num: 11,
          name: "Blitzcrank boss de combat",
          chromas: true,
        },
        {
          id: "53020",
          num: 20,
          name: "Blitzcrank Lancier Renégat",
          chromas: false,
        },
        {
          id: "53021",
          num: 21,
          name: "Blitzcrank Lancier Parangon",
          chromas: false,
        },
        {
          id: "53022",
          num: 22,
          name: "Blitzcrank chaudron magique",
          chromas: true,
        },
      ],
      lore:
        "Blitzcrank est un énorme automate de Zaun. Presque indestructible, il fut d'abord construit pour traiter des déchets toxiques, mais il trouva rapidement sa programmation initiale trop restrictive et il modifia sa propre forme pour mieux servir la population malheureuse du Puisard. Blitzcrank utilise toute sa force et sa résistance pour protéger les autres, sachant jouer du poing métallique ou des éclats d'énergie pour mettre au pas les fauteurs de troubles.",
      blurb:
        "Blitzcrank est un énorme automate de Zaun. Presque indestructible, il fut d'abord construit pour traiter des déchets toxiques, mais il trouva rapidement sa programmation initiale trop restrictive et il modifia sa propre forme pour mieux servir la...",
      allytips: [
        "Une combo 1-2-3 avec Grappin propulsé, Poing d'acier et Champ de stase peut mettre à genoux n'importe quel adversaire isolé.",
        "Amenez un ennemi à portée de tir de votre tourelle avec le grappin de Blitzcrank, puis lancez Poing d'acier pour que la tourelle puisse l'attaquer plusieurs fois.",
      ],
      enemytips: [
        "La Barrière de mana de Blitzcrank lui octroie un bouclier quand il lui reste peu de PV.",
        "Restez derrière des sbires pour ne pas être saisi par le grappin de Blitzcrank. Son Grappin propulsé n'attrape que le premier ennemi rencontré.",
      ],
      tags: ["Tank", "Fighter"],
      partype: "Mana",
      info: { attack: 4, defense: 8, magic: 5, difficulty: 4 },
      stats: {
        hp: 582.6,
        hpperlevel: 95,
        mp: 267.2,
        mpperlevel: 40,
        movespeed: 325,
        armor: 37,
        armorperlevel: 3.5,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 0.75,
        mpregen: 8.5,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 61.54,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 1.13,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "RocketGrab",
          name: "Grappin propulsé",
          description:
            "Blitzcrank tire sa main droite pour attraper un adversaire sur son passage, infligeant des dégâts et le ramenant à lui.",
          tooltip:
            "Blitzcrank tire sa main droite. Si elle rencontre une unité ennemie, celle-ci est étourdie et elle subit <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> en étant ramenée vers Blitzcrank.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [20, 19, 18, 17, 16],
          cooldownBurn: "20/19/18/17/16",
          cost: [100, 100, 100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [70, 120, 170, 220, 270],
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
          effectBurn: [
            null,
            "70/120/170/220/270",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1079, 1079, 1079, 1079, 1079],
          rangeBurn: "1079",
          image: {
            full: "RocketGrab.png",
            sprite: "spell1.png",
            group: "spell",
            x: 96,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "Overdrive",
          name: "Surcharge",
          description:
            "Blitzcrank se charge lui-même pour augmenter grandement ses vitesses d'attaque et de déplacement. Il est temporairement ralenti à la fin de l'effet.",
          tooltip:
            "Blitzcrank surcharge ses circuits pour augmenter sa vitesse de déplacement de {{ initialms }}% et sa vitesse d'attaque de {{ e2 }}% pendant {{ e4 }} sec. Le bonus en vitesse de déplacement diminue sur la durée.<br /><br />Quand Surcharge prend fin, la vitesse de déplacement de Blitzcrank est réduite de {{ e3 }}% pendant {{ e5 }} sec.",
          leveltip: {
            label: ["Vitesse de déplacement", "Vitesse d'attaque"],
            effect: [
              "{{ initialms }}% -> {{ initialmsNL }}%",
              "{{ e2 }}% -> {{ e2NL }}%",
            ],
          },
          maxrank: 5,
          cooldown: [15, 15, 15, 15, 15],
          cooldownBurn: "15",
          cost: [75, 75, 75, 75, 75],
          costBurn: "75",
          datavalues: {},
          effect: [
            null,
            [70, 75, 80, 85, 90],
            [30, 38, 46, 54, 62],
            [30, 30, 30, 30, 30],
            [5, 5, 5, 5, 5],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [10, 15, 20, 25, 30],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/75/80/85/90",
            "30/38/46/54/62",
            "30",
            "5",
            "1.5",
            "1",
            "1",
            "10/15/20/25/30",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1, 1, 1, 1, 1],
          rangeBurn: "1",
          image: {
            full: "Overdrive.png",
            sprite: "spell1.png",
            group: "spell",
            x: 144,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "PowerFist",
          name: "Poing d'acier",
          description:
            "Blitzcrank charge son poing pour que son attaque suivante double les dégâts et projette la cible dans les airs.",
          tooltip:
            "Blitzcrank charge son poing pour que sa prochaine attaque inflige des dégâts physiques équivalents au double de ses dégâts d'attaque totaux et projette sa cible dans les airs.",
          leveltip: {
            label: ["Délai de récupération"],
            effect: ["{{ cooldown }} -> {{ cooldownNL }}"],
          },
          maxrank: 5,
          cooldown: [9, 8, 7, 6, 5],
          cooldownBurn: "9/8/7/6/5",
          cost: [25, 25, 25, 25, 25],
          costBurn: "25",
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
          range: [300, 300, 300, 300, 300],
          rangeBurn: "300",
          image: {
            full: "PowerFist.png",
            sprite: "spell1.png",
            group: "spell",
            x: 192,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "StaticField",
          name: "Champ de stase",
          description:
            "Les ennemis attaqués par Blitzcrank sont marqués et, après 1 sec, sont frappés par des éclairs. De plus, Blitzcrank peut activer cette compétence pour détruire les boucliers des ennemis proches, blessant ces ennemis et les réduisant brièvement au silence.",
          tooltip:
            "<spellPassive>Passive : </spellPassive>tant que ce sort est disponible, les poings de Blitzcrank sont chargés d'électricité, ce qui lui permet de marquer les ennemis. Après un délai de 1 sec, les ennemis marqués sont frappés par des éclairs qui leur infligent <magicDamage>{{ passivedamage }}</magicDamage> pts de dégâts magiques. Cet effet est cumulable {{ maxstacks }} fois.<br /><br /><spellPassive>Active : </spellPassive>détruit les boucliers anti-dégâts des ennemis proches, inflige <magicDamage>{{ activedamage }} pts de dégâts magiques</magicDamage> et réduit au silence les ennemis touchés pendant 0,75 sec.",
          leveltip: {
            label: [
              "Dégâts de base du passif",
              "Dégâts de base de l'actif",
              "Délai de récupération de l'actif",
            ],
            effect: [
              "{{ passive base damage }} -> {{ passive base damageNL }}",
              "{{ activebasedamage }} -> {{ activebasedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [60, 40, 20],
          cooldownBurn: "60/40/20",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [50, 100, 150],
            [150, 275, 400],
            [0.25, 0.25, 0.25],
            [0.08, 0.08, 0.08],
            [2, 2, 2],
            [400, 400, 400],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "50/100/150",
            "150/275/400",
            "0.25",
            "0.08",
            "2",
            "400",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [600, 600, 600],
          rangeBurn: "600",
          image: {
            full: "StaticField.png",
            sprite: "spell1.png",
            group: "spell",
            x: 240,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "",
        description:
          "La Barrière de mana de Blitzcrank s'active lorsqu'il tombe à moins de 20% de ses PV max. Cela génère un bouclier dont les PV sont équivalents à 30% de son mana et qui dure jusqu'à 10 sec. La Barrière de mana ne peut être activée qu'une fois toutes les 90 sec.",
        image: {
          full: "Blitzcrank_ManaBarrier.png",
          sprite: "passive0.png",
          group: "passive",
          x: 96,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Blitzcrank",
          title: "Beginner",
          map: "SR",
          mode: "INTRO",
          type: "riot",
          customTag: "",
          extensionPage: false,
          customPanel: null,
          blocks: [
            {
              type: "1)buystarteritems",
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
                { id: "1027", count: 1, hideCount: false },
                { id: "1029", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
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
                { id: "3057", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
                { id: "3025", count: 1, hideCount: false },
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
                { id: "3105", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3083", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Blitzcrank",
          title: "BlitzcrankARAM",
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
                { id: "3001", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3135", count: 1, hideCount: false },
                { id: "3100", count: 1, hideCount: false },
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
                { id: "3109", count: 1, hideCount: false },
                { id: "2065", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Blitzcrank",
          title: "BlitzcrankFIRSTBLOOD",
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
                { id: "2003", count: 3, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
                { id: "3302", count: 1, hideCount: false },
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
                { id: "2049", count: 1, hideCount: false },
                { id: "3401", count: 1, hideCount: false },
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
                { id: "3025", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
                { id: "3001", count: 1, hideCount: false },
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
                { id: "3110", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2043", count: 1, hideCount: false },
                { id: "2138", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Blitzcrank",
          title: "BlitzcrankARAM",
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
                { id: "3001", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3135", count: 1, hideCount: false },
                { id: "3100", count: 1, hideCount: false },
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
                { id: "3109", count: 1, hideCount: false },
                { id: "2065", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Blitzcrank",
          title: "BlitzcrankSL",
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
                { id: "4302", count: 1, hideCount: false },
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
                { id: "3024", count: 1, hideCount: false },
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
                { id: "3751", count: 1, hideCount: false },
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
                { id: "4001", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "4103", count: 1, hideCount: false },
                { id: "4001", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3025", count: 1, hideCount: false },
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
                { id: "3109", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
          champion: "Blitzcrank",
          title: "BlitzcrankSR",
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
                { id: "3854", count: 1, hideCount: false },
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
                { id: "3024", count: 1, hideCount: false },
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
                { id: "3117", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
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
                { id: "3190", count: 1, hideCount: false },
                { id: "3193", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
                { id: "3025", count: 1, hideCount: false },
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
export default Blitzcrank ;
