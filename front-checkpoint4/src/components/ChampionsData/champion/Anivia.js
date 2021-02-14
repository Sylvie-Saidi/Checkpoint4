const Anivia = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Anivia: {
      id: "Anivia",
      key: "34",
      name: "Anivia",
      title: "Cryophénix",
      image: {
        full: "Anivia.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "34000", num: 0, name: "default", chromas: false },
        { id: "34001", num: 1, name: "Anivia Esprit d'équipe", chromas: false },
        { id: "34002", num: 2, name: "Anivia oiseau de proie", chromas: false },
        {
          id: "34003",
          num: 3,
          name: "Anivia chasseresse de Noxus",
          chromas: false,
        },
        { id: "34004", num: 4, name: "Anivia Hextech", chromas: false },
        {
          id: "34005",
          num: 5,
          name: "Anivia des glaces noires",
          chromas: false,
        },
        { id: "34006", num: 6, name: "Anivia préhistorique", chromas: false },
        {
          id: "34007",
          num: 7,
          name: "Anivia reine du carnaval",
          chromas: false,
        },
        { id: "34008", num: 8, name: "Anivia origami", chromas: true },
      ],
      lore:
        "Anivia est un esprit ailé bienveillant qui subit des cycles sans fin de vie, de mort et de renaissance pour protéger Freljord. Demi-déesse née de la glace la plus froide et des vents les plus coupants, elle utilise ses pouvoirs élémentaires contre quiconque prétend troubler la paix de sa terre natale. Anivia guide et protège les tribus du Nord, qui la vénèrent comme un symbole d'espoir et la promesse de grands changements. Elle combat de tout son être, sachant que son sacrifice fera vivre sa légende et qu'elle renaîtra dans un lendemain nouveau.",
      blurb:
        "Anivia est un esprit ailé bienveillant qui subit des cycles sans fin de vie, de mort et de renaissance pour protéger Freljord. Demi-déesse née de la glace la plus froide et des vents les plus coupants, elle utilise ses pouvoirs élémentaires contre...",
      allytips: [
        "Coordonner Lance de glace avec Gelure peut mener à des combinaisons dévastatrices.",
        "Anivia a besoin de beaucoup de mana pour Tempête glaciale, achetez donc des objets augmentant le mana ou (dans la Faille de l'invocateur) obtenez l'enchantement Cimier de la sentinelle bleue.",
        "En début de partie, l'œuf peut être très difficile à tuer pour les champions adverses. Profitez-en en jouant très agressivement.",
      ],
      enemytips: [
        "Essayez de faire un gank sur Anivia sur une voie. Avec plusieurs personnes, il est plus facile de s'assurer que son œuf meure.",
        "Si vous jouez un champion à distance, rester assez loin d'Anivia vous permet d'esquiver Lance de glace plus facilement.",
        "Essayez de combattre Anivia dans les voies. Dans la jungle, elle peut bloquer les chemins avec Cristallisation.",
      ],
      tags: ["Mage", "Support"],
      partype: "Mana",
      info: { attack: 1, defense: 4, magic: 10, difficulty: 10 },
      stats: {
        hp: 480,
        hpperlevel: 82,
        mp: 495,
        mpperlevel: 25,
        movespeed: 325,
        armor: 21.22,
        armorperlevel: 4,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 600,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 51.376,
        attackdamageperlevel: 3.2,
        attackspeedperlevel: 1.68,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "FlashFrost",
          name: "Lance de glace",
          description:
            "Anivia invoque une sphère de glace qui fonce vers ses adversaires, gelant et blessant tout le monde sur son passage. Quand la sphère explose, quiconque est à proximité est blessé et étourdi.",
          tooltip:
            "Un gros bloc de glace est envoyé vers une zone, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques. <br /><br />Une fois arrivé au bout de sa portée ou si Anivia active à nouveau le sort, le projectile explose, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques dans une petite zone et étourdissant les unités pendant {{ e4 }} sec.<br /><br />Les ennemis blessés par Lance de glace sont aussi ralentis de {{ spell.glacialstorm:slowamount }}% pendant {{ e5 }} sec.",
          leveltip: {
            label: [
              "Dégâts",
              "Durée d'étourdissement",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e4 }} -> {{ e4NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [10, 9.5, 9, 8.5, 8],
          cooldownBurn: "10/9.5/9/8.5/8",
          cost: [80, 90, 100, 110, 120],
          costBurn: "80/90/100/110/120",
          datavalues: {},
          effect: [
            null,
            [60, 85, 110, 135, 160],
            [13, 12, 11, 10, 9],
            [0, 0, 0, 0, 0],
            [1.1, 1.2, 1.3, 1.4, 1.5],
            [3, 3, 3, 3, 3],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "60/85/110/135/160",
            "13/12/11/10/9",
            "0",
            "1.1/1.2/1.3/1.4/1.5",
            "3",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.45, key: "a1" },
            { link: "spelldamage", coeff: 0.45, key: "a1" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1075, 1075, 1075, 1075, 1075],
          rangeBurn: "1075",
          image: {
            full: "FlashFrost.png",
            sprite: "spell0.png",
            group: "spell",
            x: 192,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "Crystallize",
          name: "Cristallisation",
          description:
            "En utilisant l'humidité de l'air, Anivia invoque un mur de glace impénétrable pour bloquer le passage. Le mur ne dure qu'un court moment avant de fondre.",
          tooltip:
            "Anivia fait apparaître un mur de glace impénétrable d'une largeur de {{ e2 }} unités, bloquant le passage. Le mur dure {{ e1 }} sec puis fond.",
          leveltip: { label: ["Largeur"], effect: ["{{ e2 }} -> {{ e2NL }}"] },
          maxrank: 5,
          cooldown: [17, 17, 17, 17, 17],
          cooldownBurn: "17",
          cost: [70, 70, 70, 70, 70],
          costBurn: "70",
          datavalues: {},
          effect: [
            null,
            [5, 5, 5, 5, 5],
            [400, 500, 600, 700, 800],
            [4, 5, 6, 7, 8],
            [120, 120, 120, 120, 120],
            [250, 250, 250, 250, 250],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "5",
            "400/500/600/700/800",
            "4/5/6/7/8",
            "120",
            "250",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1000, 1000, 1000, 1000, 1000],
          rangeBurn: "1000",
          image: {
            full: "Crystallize.png",
            sprite: "spell0.png",
            group: "spell",
            x: 240,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "Frostbite",
          name: "Gelure",
          description:
            "D'un mouvement d'ailes, Anivia lance une rafale de vent glacé vers sa cible, infligeant de faibles dégâts. Si la cible a récemment été étourdie par Lance de glace ou une Tempête glaciale à taille maximale, les dégâts sont doublés.",
          tooltip:
            "Anivia envoie un vent glacial sur sa cible, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques. <br /><br />Si la cible a récemment été étourdie par Anivia ou blessée par une Tempête glaciale à taille maximale, les dégâts sont doublés.",
          leveltip: {
            label: ["Dégâts", "Coût en @AbilityResourceName@"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ cost }} -> {{ costNL }}"],
          },
          maxrank: 5,
          cooldown: [4, 4, 4, 4, 4],
          cooldownBurn: "4",
          cost: [50, 60, 70, 80, 90],
          costBurn: "50/60/70/80/90",
          datavalues: {},
          effect: [
            null,
            [50, 75, 100, 125, 150],
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
            "50/75/100/125/150",
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
          vars: [{ link: "spelldamage", coeff: 0.5, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "Frostbite.png",
            sprite: "spell0.png",
            group: "spell",
            x: 288,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "GlacialStorm",
          name: "Tempête glaciale",
          description:
            "Anivia invoque une pluie de glace et de grêle qui blesse ses ennemis et les ralentit.",
          tooltip:
            "<spellPassive>Activation : </spellPassive>draine <mana>{{ manacostpersecond }} pts de mana</mana> par seconde. <br /><br />Anivia fait tomber une pluie de glace et de grêle dans une zone qui s'étend en {{ growthtime }} sec, infligeant <magicDamage>{{ totaldamagepersecond }} pts de dégâts magiques</magicDamage> par seconde et réduisant de {{ slowamount }}% la vitesse de déplacement des ennemis. <br /><br />Quand Tempête glaciale atteint sa taille maximale, elle réduit de {{ enhancedslow }}% la vitesse de déplacement des ennemis et inflige {{ bonusmultiplier }}% des dégâts.",
          leveltip: {
            label: [
              "Dégâts par seconde",
              "Ralentissement du gel",
              "Coût en mana par seconde",
            ],
            effect: [
              "{{ damagepersecond }} -> {{ damagepersecondNL }}",
              "{{ slowamount }}% -> {{ slowamountNL }}%",
              "{{ manacostpersecond }} -> {{ manacostpersecondNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [6, 6, 6],
          cooldownBurn: "6",
          cost: [75, 75, 75],
          costBurn: "75",
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
          range: [750, 750, 750],
          rangeBurn: "750",
          image: {
            full: "GlacialStorm.png",
            sprite: "spell0.png",
            group: "spell",
            x: 336,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Renaissance",
        description:
          "Quand elle subit des dégâts mortels, Anivia se transforme en œuf et revient à la vie avec tous ses PV.",
        image: {
          full: "Anivia_P.png",
          sprite: "passive0.png",
          group: "passive",
          x: 240,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Anivia",
          title: "AniviaARAM",
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
                { id: "3073", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 5, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
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
          champion: "Anivia",
          title: "AniviaFIRSTBLOOD",
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
                { id: "3010", count: 1, hideCount: false },
                { id: "3070", count: 1, hideCount: false },
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
                { id: "3027", count: 1, hideCount: false },
                { id: "3003", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
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
                { id: "3174", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
              items: [
                { id: "2003", count: 1, hideCount: true },
                { id: "2043", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Anivia",
          title: "AniviaARAM",
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
                { id: "3073", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "2003", count: 5, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
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
          champion: "Anivia",
          title: "AniviaSL",
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
                { id: "3073", count: 1, hideCount: false },
                { id: "3010", count: 1, hideCount: false },
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
                { id: "3073", count: 1, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
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
                { id: "3007", count: 1, hideCount: false },
                { id: "4104", count: 1, hideCount: false },
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
                { id: "3089", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
          champion: "Anivia",
          title: "AniviaSR",
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
                { id: "3070", count: 1, hideCount: false },
                { id: "3010", count: 1, hideCount: false },
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
                { id: "3027", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3003", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
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
          champion: "Anivia",
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
                { id: "1027", count: 1, hideCount: false },
                { id: "1028", count: 1, hideCount: false },
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
                { id: "3027", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default Anivia ;