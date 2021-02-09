const Taliyah = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Taliyah: {
      id: "Taliyah",
      key: "163",
      name: "Taliyah",
      title: "Tisseuse de pierres",
      image: {
        full: "Taliyah.png",
        sprite: "champion3.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "163000", num: 0, name: "default", chromas: false },
        { id: "163001", num: 1, name: "Taliyah de Freljord", chromas: false },
        { id: "163002", num: 2, name: "SSG Taliyah", chromas: false },
      ],
      lore:
        "Taliyah est une mage issue des tribus nomades de Shurima, déchirée entre l'émerveillement de la jeunesse et les responsabilités des adultes. Elle a déjà traversé pratiquement tout Valoran pour découvrir la véritable nature de ses pouvoirs toujours plus puissants, avant d'être récemment retournée dans sa tribu pour la protéger. Certains se méprennent sur sa compassion et paient leur erreur au prix fort : sous son attitude joviale, Taliyah dissimule une volonté de fer capable de déplacer les montagnes et un esprit assez féroce pour faire trembler la terre.",
      blurb:
        "Taliyah est une mage issue des tribus nomades de Shurima, déchirée entre l'émerveillement de la jeunesse et les responsabilités des adultes. Elle a déjà traversé pratiquement tout Valoran pour découvrir la véritable nature de ses pouvoirs toujours plus...",
      allytips: [
        "Essayez de projeter les ennemis en direction de Défilage tellurique grâce à Poussée sismique.",
        "N'oubliez pas que rien ne vous oblige à passer votre temps sur le Mur de la tisseuse.",
        "Une fois que vous avez un Sceptre de Rylai, lancer Rafale filée sur les ennemis qui vous pourchassent est un excellent moyen de leur faire regretter leurs actes.",
      ],
      enemytips: [
        "Quand Taliyah lance Défilage tellurique sur sa voie, méfiez-vous de sa Poussée sismique. Si elle vous projette dans son champ de mines, vous risquez de subir de gros dégâts.",
        "La Rafale filée de Taliyah se lance dans une direction fixe. Si elle vous jette des pierres, esquivez latéralement !",
      ],
      tags: ["Mage", "Support"],
      partype: "Mana",
      info: { attack: 1, defense: 7, magic: 8, difficulty: 5 },
      stats: {
        hp: 532,
        hpperlevel: 90,
        mp: 425,
        mpperlevel: 30,
        movespeed: 335,
        armor: 20,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 525,
        hpregen: 7,
        hpregenperlevel: 0.7,
        mpregen: 9.335,
        mpregenperlevel: 0.85,
        crit: 0,
        critperlevel: 0,
        attackdamage: 58,
        attackdamageperlevel: 3.3,
        attackspeedperlevel: 1.36,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "TaliyahQ",
          name: "Rafale filée",
          description:
            "Taliyah lance une rafale de projectiles dans une direction ciblée, tout en se déplaçant librement. Cela crée un sol ouvragé sous ses pieds. Si Taliyah lance Rafale filée en se trouvant sur un sol ouvragé, elle ne lance qu'un seul projectile.",
          tooltip:
            'Lance 5 pierres dans une direction, chacune infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques. Les coups subséquents sur une même cible infligent {{ e2 }}% de dégâts en moins. Crée un <span class="colora56705">sol ouvragé</span> pendant {{ e6 }} sec.<br /><br />Utiliser Rafale filée en étant sur un <span class="colora56705">sol ouvragé</span> ne permet de lancer qu\'une seule pierre, mais son coût est alors réduit à {{ e7 }} pts de mana.',
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [7, 6, 5, 4, 3],
          cooldownBurn: "7/6/5/4/3",
          cost: [50, 60, 70, 80, 90],
          costBurn: "50/60/70/80/90",
          datavalues: {},
          effect: [
            null,
            [70, 95, 120, 145, 170],
            [50, 50, 50, 50, 50],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [160, 160, 160, 160, 160],
            [45, 45, 45, 45, 45],
            [1, 1, 1, 1, 1],
            [450, 450, 450, 450, 450],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/95/120/145/170",
            "50",
            "0",
            "0",
            "160",
            "45",
            "1",
            "450",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.45, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1000, 1000, 1000, 1000, 1000],
          rangeBurn: "1000",
          image: {
            full: "TaliyahQ.png",
            sprite: "spell11.png",
            group: "spell",
            x: 192,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "TaliyahWVC",
          name: "Poussée sismique",
          description:
            "Taliyah provoque l'éruption d'une zone du sol, ce qui projette les ennemis dans la direction de son choix.",
          tooltip:
            "Taliyah cible une zone. Après un court délai, les ennemis pris dans la zone sont <scaleLevel>poussés</scaleLevel> et subissent {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques.<br /><br />Vous pouvez contrôler la direction dans laquelle les ennemis seront <scaleLevel>poussés</scaleLevel> en cliquant et en faisant glisser votre souris.",
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [16, 15, 14, 13, 12],
          cooldownBurn: "16/15/14/13/12",
          cost: [70, 80, 90, 100, 110],
          costBurn: "70/80/90/100/110",
          datavalues: {},
          effect: [
            null,
            [60, 80, 100, 120, 140],
            [0.55, 0.55, 0.55, 0.55, 0.55],
            [400, 400, 400, 400, 400],
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
            "60/80/100/120/140",
            "0.55",
            "400",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.4, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [900, 900, 900, 900, 900],
          rangeBurn: "900",
          image: {
            full: "TaliyahWVC.png",
            sprite: "spell11.png",
            group: "spell",
            x: 240,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "TaliyahE",
          name: "Défilage tellurique",
          description:
            "Taliyah crée un champ de mines ralentissant qui explose si des ennemis effectuent une ruée, sont poussés ou sont tirés par-dessus.",
          tooltip:
            "Place un champ de pièges sensibles aux ruées qui infligent {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et ralentissent de <scaleAP>{{ f2 }}%</scaleAP> les ennemis dans la zone. Après {{ e3 }} sec, les pièges explosent, infligeant de nouveau des dégâts.<br /><br />Les ennemis qui effectuent une <scaleLevel>ruée</scaleLevel>, qui sont <scaleLevel>poussés</scaleLevel> ou qui sont <scaleLevel>attirés</scaleLevel> par-dessus Défilage tellurique déclenchent les pièges et subissent {{ f3 }} <scaleAP>(+{{ f1 }})</scaleAP> pts de dégâts magiques par piège (4 au maximum, chaque piège après le premier inflige {{ f4 }}% de dégâts en moins).",
          leveltip: {
            label: [
              "Dégâts",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [16, 14, 12, 10, 8],
          cooldownBurn: "16/14/12/10/8",
          cost: [90, 95, 100, 105, 110],
          costBurn: "90/95/100/105/110",
          datavalues: {},
          effect: [
            null,
            [50, 75, 100, 125, 150],
            [-0.2, -0.2, -0.2, -0.2, -0.2],
            [4, 4, 4, 4, 4],
            [85, 85, 85, 85, 85],
            [50, 60, 70, 80, 90],
            [4, 4, 4, 4, 4],
            [0.15, 0.15, 0.15, 0.15, 0.15],
            [0.3, 0.3, 0.3, 0.3, 0.3],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "50/75/100/125/150",
            "-0.2",
            "4",
            "85",
            "50/60/70/80/90",
            "4",
            "0.15",
            "0.3",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.4, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [800, 800, 800, 800, 800],
          rangeBurn: "800",
          image: {
            full: "TaliyahE.png",
            sprite: "spell11.png",
            group: "spell",
            x: 288,
            y: 144,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "TaliyahR",
          name: "Mur de la tisseuse",
          description: "Taliyah crée un très long mur et surfe ensuite dessus.",
          tooltip:
            "Activez le sort pour créer un mur. Réactivez-le immédiatement pour surfer devant le mur. Si Taliyah se déplace ou subit des dégâts, elle arrête de surfer.<br /><br />Mur de la tisseuse dure {{ e1 }} sec. Pour détruire le mur plus tôt, désactivez le sort.",
          leveltip: {
            label: ["Longueur du mur", "Délai de récupération"],
            effect: [
              "{{ e2 }} -> {{ e2NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [180, 150, 120],
          cooldownBurn: "180/150/120",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [5, 5, 5],
            [3000, 4500, 6000],
            [0.1, 0.1, 0.1],
            [2500, 2500, 2500],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "5",
            "3000/4500/6000",
            "0.1",
            "2500",
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
          range: [3000, 4500, 6000],
          rangeBurn: "3000/4500/6000",
          image: {
            full: "TaliyahR.png",
            sprite: "spell11.png",
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
        name: "Surf tellurique",
        description:
          "Taliyah augmente sa vitesse de déplacement lorsqu'elle est près des murs.",
        image: {
          full: "Taliyah_Passive.png",
          sprite: "passive3.png",
          group: "passive",
          x: 240,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Taliyah",
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Taliyah",
          title: "TaliyahARAM",
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
          champion: "Taliyah",
          title: "TaliyahFIRSTBLOOD",
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
                { id: "2003", count: 1, hideCount: false },
                { id: "3303", count: 1, hideCount: false },
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
                { id: "2049", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3098", count: 1, hideCount: false },
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
                { id: "3174", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3105", count: 1, hideCount: false },
                { id: "3069", count: 1, hideCount: false },
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
              items: [
                { id: "2003", count: 1, hideCount: false },
                { id: "2043", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Taliyah",
          title: "TaliyahARAM",
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
                { id: "3007", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
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
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
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
          champion: "Taliyah",
          title: "TaliyahSL",
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
                { id: "3802", count: 1, hideCount: false },
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
                { id: "3020", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "4104", count: 1, hideCount: false },
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
                { id: "3135", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
              ],
            },
            {
              type: "defensive",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "ItemSmiteAoE",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3029", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "ItemTeleportCancel",
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
          champion: "Taliyah",
          title: "TaliyahSR",
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
                { id: "1056", count: 1, hideCount: false },
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
                { id: "1039", count: 1, hideCount: false },
                { id: "2031", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3020", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
              ],
            },
            {
              type: "essential",
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
                { id: "1402", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3135", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
                { id: "3027", count: 1, hideCount: false },
                { id: "3029", count: 1, hideCount: false },
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
      ],
    },
  },
};
export default Taliyah;