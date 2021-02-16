const Irelia = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Irelia: {
      id: "Irelia",
      key: "39",
      name: "Irelia",
      title: "Danseuse des lames",
      image: {
        full: "Irelia.png",
        sprite: "champion1.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "39000", num: 0, name: "default", chromas: false },
        { id: "39001", num: 1, name: "Irelia assassin", chromas: false },
        { id: "39002", num: 2, name: "Irelia aviatrice", chromas: false },
        { id: "39003", num: 3, name: "Cyber Irelia", chromas: false },
        { id: "39004", num: 4, name: "Irelia lame de glace", chromas: true },
        {
          id: "39005",
          num: 5,
          name: "Irelia de l'Ordre du lotus",
          chromas: false,
        },
        { id: "39006", num: 6, name: "Irelia à l'épée divine", chromas: true },
        { id: "39015", num: 15, name: "iG Irelia", chromas: false },
        { id: "39016", num: 16, name: "PROJET : Irelia", chromas: false },
        {
          id: "39017",
          num: 17,
          name: "PROJET : Irelia édition prestige",
          chromas: false,
        },
      ],
      lore:
        "Des nombreux héros qui naquirent de l'occupation noxienne, aucun n'est plus étonnant que la jeune Irelia de Navori. Formée aux danses ancestrales de sa province, elle adapta son art pour la guerre, se servant de ses mouvements gracieux et précis pour faire léviter une multitude de lames acérées. Après avoir prouvé ses talents de guerrière, elle devint le chef et le symbole de la Résistance ; à ce jour, sa tâche est toujours de défendre son pays.",
      blurb:
        "Des nombreux héros qui naquirent de l'occupation noxienne, aucun n'est plus étonnant que la jeune Irelia de Navori. Formée aux danses ancestrales de sa province, elle adapta son art pour la guerre, se servant de ses mouvements gracieux et précis pour...",
      allytips: [
        "Utilisez Rush fatal sur des sbires proches de la mort pour parcourir une grande distance et approcher des champions ennemis.",
        "Danse de défi n'est pas interrompue par les contrôles de foule ; essayez de l'activer quand des entraves vous ciblent.",
        "Duo parfait n'a pas de limite de distance, alors n'hésitez pas à être créatif.",
      ],
      enemytips: [
        "Gardez un œil sur les effets Ferveur ionienne cumulés par Irelia et attaquez-la quand elle n'en a plus.",
        "Les vagues de sbires améliorent grandement la mobilité d'Irelia. Prudence quand vous l'affrontez au milieu des sbires.",
        "Attention à ne pas gaspiller vos sorts les plus puissants sur Danse de défi.",
      ],
      tags: ["Fighter", "Assassin"],
      partype: "Mana",
      info: { attack: 7, defense: 4, magic: 5, difficulty: 5 },
      stats: {
        hp: 580,
        hpperlevel: 95,
        mp: 350,
        mpperlevel: 30,
        movespeed: 335,
        armor: 36,
        armorperlevel: 3,
        spellblock: 32,
        spellblockperlevel: 1.25,
        attackrange: 200,
        hpregen: 8.5,
        hpregenperlevel: 0.85,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 63,
        attackdamageperlevel: 4,
        attackspeedperlevel: 2.5,
        attackspeed: 0.656,
      },
      spells: [
        {
          id: "IreliaQ",
          name: "Rush fatal",
          description:
            "Irelia fonce vers l'avant pour frapper sa cible tout en récupérant des PV. Si la cible était marquée ou si elle est tuée par Rush fatal, le délai de récupération de la compétence est annulé.",
          tooltip:
            'Irelia fonce sur un ennemi, infligeant {{ championdamage }} pts de dégâts physiques, appliquant ses effets à l\'impact et récupérant {{ healamount }} PV.<br /><br />Le délai de récupération de Rush fatal est annulé si la cible était <span class="colorDDDD77">marquée</span> ou si Rush fatal la tue.<br /><br /><span class="size16 color8C8C8C">Rush fatal inflige {{ miniondamage }} pts de dégâts aux sbires.</span>',
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Dégâts supplémentaires aux sbires",
              "Ratio de soins",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ damagebonuspve }} -> {{ damagebonuspveNL }}",
              "{{ healtadcoefficient }}% -> {{ healtadcoefficientNL }}%",
            ],
          },
          maxrank: 5,
          cooldown: [12, 11, 10, 9, 8],
          cooldownBurn: "12/11/10/9/8",
          cost: [20, 20, 20, 20, 20],
          costBurn: "20",
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
          range: [600, 600, 600, 600, 600],
          rangeBurn: "600",
          image: {
            full: "IreliaQ.png",
            sprite: "spell4.png",
            group: "spell",
            x: 192,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "IreliaW",
          name: "Danse de défi",
          description:
            "Irelia charge une attaque. Plus la charge dure longtemps, plus les dégâts augmentent. Irelia subit moins de dégâts physiques pendant la charge.",
          tooltip:
            '<span class="colorFF9900">Première activation :</span> Irelia place ses lames en formation défensive, gagnant {{ finalphysicaldr }}% de réduction des dégâts physiques. Dans cette posture, Irelia ne peut plus agir.<br /><br /><span class="colorFF9900">Deuxième activation :</span> Irelia frappe, infligeant {{ mindamagecalc }} pts de dégâts physiques. Les dégâts augmentent avec la durée de la charge, jusqu\'à {{ maxdamagecalc }} au bout de {{ chargetimeformax }} sec.<br /><br /><span class="size16 color8C8C8C">Danse de défi ne peut pas être interrompue.</span>',
          leveltip: {
            label: ["Dégâts", "Délai de récupération", "Coût en mana"],
            effect: [
              "{{ mindamage }} -> {{ mindamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [20, 18, 16, 14, 12],
          cooldownBurn: "20/18/16/14/12",
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
            full: "IreliaW.png",
            sprite: "spell4.png",
            group: "spell",
            x: 240,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "IreliaE",
          name: "Duo parfait",
          description:
            "Irelia envoie deux lames qui volent ensuite l'une vers l'autre. Les ennemis pris entre les lames sont blessés, étourdis et marqués.",
          tooltip:
            "Irelia prépare 2 lames qui voleront l'une vers l'autre une fois placées, infligeant {{ totaldamage }} pts de dégâts magiques et étourdissant les ennemis pendant {{ stunduration }} sec.<br /><br />Les champions et les grands monstres sont <span class=\"colorDDDD77\">marqués</span> pendant {{ markduration }} sec.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [18, 16.5, 15, 13.5, 12],
          cooldownBurn: "18/16.5/15/13.5/12",
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
          range: [850, 850, 850, 850, 850],
          rangeBurn: "850",
          image: {
            full: "IreliaE.png",
            sprite: "spell4.png",
            group: "spell",
            x: 288,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "IreliaR",
          name: "Pointe de l'avant-garde",
          description:
            "Irelia tire un grand nombre de lames qui se dispersent en touchant un champion ennemi. Les ennemis touchés par les lames sont blessés et marqués. Les lames forment ensuite un mur qui blesse et ralentit les ennemis qui le traversent.",
          tooltip:
            'Irelia lance une tempête de lames qui se dispersent en frappant un champion. Les lames infligent {{ missiledamage }} pts de dégâts magiques et <span class="colorDDDD77">marquent</span> les champions et les grands monstres pendant {{ markduration }} sec.<br /><br />Irelia crée ensuite un mur avec ces lames pendant {{ zoneduration }} sec. Les ennemis qui traversent le mur subissent {{ zonedamage }} pts de dégâts magiques et sont ralentis de {{ slowamount }}% pendant {{ ccduration }} sec.',
          leveltip: {
            label: ["Dégâts", "Dégâts du mur", "Délai de récupération"],
            effect: [
              "{{ basemissiledamage }} -> {{ basemissiledamageNL }}",
              "{{ basezonedamage }} -> {{ basezonedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [140, 120, 100],
          cooldownBurn: "140/120/100",
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
          range: [950, 950, 950],
          rangeBurn: "950",
          image: {
            full: "IreliaR.png",
            sprite: "spell4.png",
            group: "spell",
            x: 336,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Ferveur ionienne",
        description:
          "Quand Irelia frappe des ennemis avec ses compétences, elle gagne un bonus de vitesse d'attaque cumulable. Au maximum d'effets cumulés, elle gagne aussi des dégâts à l'impact supplémentaires.",
        image: {
          full: "Irelia_Passive.png",
          sprite: "passive1.png",
          group: "passive",
          x: 0,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Irelia",
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1055", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1055", count: 1, hideCount: false },
                { id: "3340", count: 1, hideCount: false },
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
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3057", count: 1, hideCount: false },
                { id: "3101", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3053", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Irelia",
          title: "IreliaARAM",
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
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
                { id: "3748", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "3091", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
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
          champion: "Irelia",
          title: "IreliaFIRSTBLOOD",
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
                { id: "3044", count: 1, hideCount: false },
                { id: "3057", count: 1, hideCount: false },
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
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
              items: [
                { id: "3053", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "3065", count: 1, hideCount: false },
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
                { id: "2043", count: 1, hideCount: true },
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Irelia",
          title: "IreliaARAM",
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
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
                { id: "3748", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "3091", count: 1, hideCount: false },
                { id: "3143", count: 1, hideCount: false },
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
          champion: "Irelia",
          title: "IreliaSL",
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
                { id: "3057", count: 1, hideCount: false },
                { id: "3044", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "3077", count: 1, hideCount: false },
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
                { id: "3078", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
              ],
            },
            {
              type: "essentialjungle",
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
                { id: "4102", count: 1, hideCount: false },
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
                { id: "3748", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3143", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3156", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
          champion: "Irelia",
          title: "IreliaSR",
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
                { id: "3715", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "3044", count: 1, hideCount: false },
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
                { id: "1419", count: 1, hideCount: false },
                { id: "3047", count: 1, hideCount: false },
                { id: "3078", count: 1, hideCount: false },
              ],
            },
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
                { id: "3044", count: 1, hideCount: false },
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
                { id: "3078", count: 1, hideCount: false },
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
                { id: "3748", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3091", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "ItemTeleportCancel",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3156", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
export default Irelia;