const Olaf = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Olaf: {
      id: "Olaf",
      key: "2",
      name: "Olaf",
      title: "Berzerker",
      image: {
        full: "Olaf.png",
        sprite: "champion2.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "2000", num: 0, name: "default", chromas: false },
        { id: "2001", num: 1, name: "Olaf déchu", chromas: false },
        { id: "2002", num: 2, name: "Olaf des glaces", chromas: false },
        { id: "2003", num: 3, name: "Brolaf", chromas: true },
        { id: "2004", num: 4, name: "Olaf Pentakill", chromas: false },
        { id: "2005", num: 5, name: "Olaf maraudeur", chromas: false },
        { id: "2006", num: 6, name: "Olaf boucher", chromas: false },
        { id: "2015", num: 15, name: "SKT T1 Olaf", chromas: false },
        { id: "2016", num: 16, name: "Olaf tueur de dragons", chromas: true },
      ],
      lore:
        "Olaf, avec sa hache et son extraordinaire force de destruction, ne souhaite que mourir au combat. Venu de l'âpre péninsule freljordienne de Lokfar, il a été choqué par une prophétie qui lui prédisait une mort paisible : dans l'esprit de son peuple, une ignoble fin de lâche. Cherchant la mort et animé par la rage, il ravage une région après l'autre, éliminant des hordes de grands guerriers et de bêtes légendaires dans sa recherche d'un ennemi capable de l'arrêter. Aujourd'hui un brutal combattant de la Griffe hivernale, il espère mourir glorieusement dans les grandes guerres à venir.",
      blurb:
        "Olaf, avec sa hache et son extraordinaire force de destruction, ne souhaite que mourir au combat. Venu de l'âpre péninsule freljordienne de Lokfar, il a été choqué par une prophétie qui lui prédisait une mort paisible : dans l'esprit de son peuple, une...",
      allytips: [
        "Olaf peut combiner Rage du berzerker, Frappes vicieuses et Ragnarok quand il n'a presque plus de PV pour devenir terriblement puissant.",
        "L'amélioration des soins par Frappes vicieuses concerne votre Vol de vie et les soins venant de vos alliés.",
      ],
      enemytips: [
        "Olaf devient de plus en plus dangereux au fur et à mesure que ses PV chutent. Conservez vos entraves pour l'achever.",
        "Empêcher Olaf de récupérer sa hache permet de limiter sa capacité à vous harceler sur une voie.",
        "Pendant Ragnarok, les défenses d'Olaf sont amoindries mais il devient insensible aux entraves. Si vous ne pouvez pas fuir Olaf pendant Ragnarok, concentrez vos attaques sur lui avec vos alliés.",
      ],
      tags: ["Fighter", "Tank"],
      partype: "Mana",
      info: { attack: 9, defense: 5, magic: 3, difficulty: 3 },
      stats: {
        hp: 597.24,
        hpperlevel: 93,
        mp: 315.6,
        mpperlevel: 42,
        movespeed: 350,
        armor: 35,
        armorperlevel: 3,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 0.9,
        mpregen: 7.466,
        mpregenperlevel: 0.575,
        crit: 0,
        critperlevel: 0,
        attackdamage: 68,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 2.7,
        attackspeed: 0.694,
      },
      spells: [
        {
          id: "OlafAxeThrowCast",
          name: "Déchireuse",
          description:
            "Olaf lance sa hache à l'endroit ciblé, infligeant des dégâts aux ennemis traversés et réduisant leur vitesse de déplacement. Si Olaf ramasse sa hache, le délai de récupération est réduit de 4,5 sec.",
          tooltip:
            "Olaf lance sa hache à l'endroit ciblé, infligeant {{ e1 }} <scaleAD>(+{{ a1 }})</scaleAD> pts de dégâts physiques aux ennemis traversés et les ralentissant de {{ e2 }}% pendant un maximum de {{ e3 }} sec. Plus la hache va loin, plus le ralentissement dure longtemps, mais il ne dure jamais moins de {{ e4 }} sec.<br /><br />Si Olaf ramasse sa hache, le délai de récupération est réduit de 4,5 sec.",
          leveltip: {
            label: ["Dégâts", "Ralentissement"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e2 }}% -> {{ e2NL }}%"],
          },
          maxrank: 5,
          cooldown: [7, 7, 7, 7, 7],
          cooldownBurn: "7",
          cost: [60, 60, 60, 60, 60],
          costBurn: "60",
          datavalues: {},
          effect: [
            null,
            [80, 125, 170, 215, 260],
            [29, 33, 37, 41, 45],
            [2.5, 2.5, 2.5, 2.5, 2.5],
            [1.5, 1.5, 1.5, 1.5, 1.5],
            [800, 800, 800, 800, 800],
            [400, 400, 400, 400, 400],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/125/170/215/260",
            "29/33/37/41/45",
            "2.5",
            "1.5",
            "800",
            "400",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "bonusattackdamage", coeff: 1, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1000, 1000, 1000, 1000, 1000],
          rangeBurn: "1000",
          image: {
            full: "OlafAxeThrowCast.png",
            sprite: "spell8.png",
            group: "spell",
            x: 288,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "OlafFrenziedStrikes",
          name: "Frappes vicieuses",
          description:
            "La vitesse d'attaque et le Vol de vie d'Olaf sont augmentés. Tous les soins qu'il reçoit sont également augmentés en fonction de ses PV manquants.",
          tooltip:
            "Pendant {{ e4 }} sec, Olaf obtient {{ e2 }}% d'effet Vol de vie et sa vitesse d'attaque est augmentée de {{ e1 }}%.<br /><br />Pendant ce temps, tous les soins que reçoit Olaf augmentent de 1% tous les {{ e3 }}% de PV qui lui manquent.",
          leveltip: {
            label: ["Vitesse d'attaque", "Vol de vie"],
            effect: ["{{ e1 }}% -> {{ e1NL }}%", "{{ e2 }}% -> {{ e2NL }}%"],
          },
          maxrank: 5,
          cooldown: [16, 16, 16, 16, 16],
          cooldownBurn: "16",
          cost: [30, 30, 30, 30, 30],
          costBurn: "30",
          datavalues: {},
          effect: [
            null,
            [55, 65, 75, 85, 95],
            [14, 16, 18, 20, 22],
            [2, 2, 2, 2, 2],
            [6, 6, 6, 6, 6],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "55/65/75/85/95",
            "14/16/18/20/22",
            "2",
            "6",
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
          range: [700, 700, 700, 700, 700],
          rangeBurn: "700",
          image: {
            full: "OlafFrenziedStrikes.png",
            sprite: "spell8.png",
            group: "spell",
            x: 336,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "OlafRecklessStrike",
          name: "Frappe sauvage",
          description:
            "Olaf attaque avec tant de force qu'il inflige des dégâts physiques bruts non seulement à sa cible, mais aussi à lui-même. Il récupère le coût en PV s'il tue sa cible.",
          tooltip:
            "Olaf frappe violemment avec ses haches, infligeant {{ e1 }} <scaleAD>(+{{ a1 }})</scaleAD> pts de dégâts bruts à sa cible. Le coût de cette compétence est égal à {{ e2 }}% du total des dégâts infligés, mais Olaf récupère ce coût s'il tue la cible.<br /><br />Les attaques de base réduisent le délai de récupération de Frappe sauvage de 1 sec.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [11, 10, 9, 8, 7],
          cooldownBurn: "11/10/9/8/7",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [70, 115, 160, 205, 250],
            [30, 30, 30, 30, 30],
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
            "70/115/160/205/250",
            "30",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "attackdamage", coeff: 0.5, key: "a1" }],
          costType: "Coûte  PV",
          maxammo: "-1",
          range: [325, 325, 325, 325, 325],
          rangeBurn: "325",
          image: {
            full: "OlafRecklessStrike.png",
            sprite: "spell8.png",
            group: "spell",
            x: 384,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Coûte  PV",
        },
        {
          id: "OlafRagnarok",
          name: "Ragnarok",
          description: "Olaf devient temporairement insensible aux entraves.",
          tooltip:
            "<spellPassive>Passive : </spellPassive>Olaf gagne +{{ resists }} armure et +{{ resists }} résistance magique.<br /><br /><spellPassive>Active : </spellPassive>Olaf se libère de toutes les entraves et y devient insensible pendant les {{ duration }} sec suivantes. Durant {{ hasteduration }} sec, il reçoit également un bonus de {{ haste*100 }}% en vitesse de déplacement quand il se dirige vers des champions ennemis. Pendant ce temps, Olaf perd la propriété passive de Ragnarok et gagne +{{ ad }} dégâts d'attaque.",
          leveltip: {
            label: [
              "Armure et résistance magique",
              "Dégâts d'attaque",
              "Vitesse de déplacement",
              "Délai de récupération",
            ],
            effect: [
              "{{ resists }} -> {{ resistsNL }}",
              "{{ flatad }} -> {{ flatadNL }}",
              "{{ haste*100.000000 }} -> {{ hastenl*100.000000 }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [100, 90, 80],
          cooldownBurn: "100/90/80",
          cost: [0, 0, 0],
          costBurn: "0",
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
          costType: "Pas de coût",
          maxammo: "-1",
          range: [400, 400, 400],
          rangeBurn: "400",
          image: {
            full: "OlafRagnarok.png",
            sprite: "spell8.png",
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
        name: "Rage du berzerker",
        description:
          "La vitesse d'attaque d'Olaf augmente de 1% tous les 1% de PV qui lui manque.",
        image: {
          full: "Olaf_Passive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 144,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Olaf",
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
                { id: "1029", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
                { id: "3082", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
                { id: "3022", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Olaf",
          title: "OlafARAM",
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
                { id: "3071", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
                { id: "3005", count: 1, hideCount: false },
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Olaf",
          title: "OlafFIRSTBLOOD",
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
                { id: "1054", count: 1, hideCount: false },
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
                { id: "1039", count: 1, hideCount: false },
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
                { id: "3047", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
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
              items: [
                { id: "1401", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
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
                { id: "3748", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
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
                { id: "3800", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: false },
                { id: "3361", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Olaf",
          title: "OlafARAM",
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
                { id: "3071", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3074", count: 1, hideCount: false },
                { id: "3005", count: 1, hideCount: false },
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Olaf",
          title: "OlafSL",
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
                { id: "2033", count: 1, hideCount: false },
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
                { id: "3044", count: 1, hideCount: false },
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
                { id: "3044", count: 1, hideCount: false },
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
                { id: "3047", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3071", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
                { id: "4103", count: 1, hideCount: false },
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
                { id: "3074", count: 1, hideCount: false },
                { id: "3800", count: 1, hideCount: false },
                { id: "3005", count: 1, hideCount: false },
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
                { id: "3083", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
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
                { id: "2138", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Olaf",
          title: "OlafSR",
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
                { id: "2033", count: 1, hideCount: false },
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
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1001", count: 1, hideCount: false },
                { id: "3044", count: 1, hideCount: false },
                { id: "3067", count: 1, hideCount: false },
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
                { id: "3706", count: 1, hideCount: false },
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
                { id: "3047", count: 1, hideCount: false },
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
                { id: "1400", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3065", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
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
                { id: "3742", count: 1, hideCount: false },
                { id: "3110", count: 1, hideCount: false },
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
export default Olaf;