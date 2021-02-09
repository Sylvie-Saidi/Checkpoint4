import Varus from "./Varus";

const Varus2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Varus: {
      id: "Varus",
      key: "110",
      name: "Varus",
      title: "Flèche de la vengeance",
      image: {
        full: "Varus.png",
        sprite: "champion4.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "110000", num: 0, name: "default", chromas: false },
        {
          id: "110001",
          num: 1,
          name: "Varus au cristal impur",
          chromas: false,
        },
        { id: "110002", num: 2, name: "Varus à l'arc pur", chromas: false },
        { id: "110003", num: 3, name: "Varus arctique", chromas: false },
        { id: "110004", num: 4, name: "Varus cœur-de-cible", chromas: false },
        { id: "110005", num: 5, name: "Varus rôdeur", chromas: false },
        { id: "110006", num: 6, name: "Varus du pulsar sombre", chromas: true },
        { id: "110007", num: 7, name: "Varus conquérant", chromas: true },
        { id: "110009", num: 9, name: "Varus infernal", chromas: true },
      ],
      lore:
        "Membre de la race antique des Darkin, Varus était en son temps un assassin cruel qui aimait torturer ses ennemis, les conduisant jusqu'aux portes de la folie avant de les achever d'une flèche. À la fin de la Guerre des Darkin, il fut emprisonné. Des siècles plus tard, il s'évada en utilisant la chair recomposée de deux chasseurs d'Ionia : l'ayant relâché par imprudence, ils furent condamnés à porter l'arc lié à l'essence de Varus. Varus traque désormais ceux qui l'ont enfermé pour se venger, mais les âmes des mortels à l'intérieur de lui s'opposent à ses desseins de toutes leurs forces.",
      blurb:
        "Membre de la race antique des Darkin, Varus était en son temps un assassin cruel qui aimait torturer ses ennemis, les conduisant jusqu'aux portes de la folie avant de les achever d'une flèche. À la fin de la Guerre des Darkin, il fut emprisonné. Des...",
      allytips: [
        "Mettre rapidement un point dans Carquois meurtri permet de harceler les champions ennemis et d'achever les sbires.",
        "À courte portée, il vaut parfois mieux tirer Flèche perforante sans attendre qu'elle soit complètement chargée.",
        "Profitez de la longue portée de Flèche perforante pour tirer sur les champions ennemis avant le combat ou lors de leur fuite.",
      ],
      enemytips: [
        "Si vous êtes touché par Meurtrissure, les compétences de Varus vous infligeront des dégâts supplémentaires.",
        "Quand il tue un ennemi ou quand il réussit une assistance, Varus augmente temporairement sa vitesse d'attaque et devient beaucoup plus dangereux.",
        "Vous serez immobilisé si l'une des vrilles de Chaîne corruptrice, l'ultime de Varus, vous atteint. Cependant, les vrilles meurent si vous vous éloignez assez vite.",
      ],
      tags: ["Marksman", "Mage"],
      partype: "Mana",
      info: { attack: 7, defense: 3, magic: 4, difficulty: 2 },
      stats: {
        hp: 500,
        hpperlevel: 89,
        mp: 360,
        mpperlevel: 33,
        movespeed: 330,
        armor: 27,
        armorperlevel: 3.4,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 575,
        hpregen: 3.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 61,
        attackdamageperlevel: 3.11,
        attackspeedperlevel: 3,
        attackspeed: 0.658,
      },
      spells: [
        {
          id: "VarusQ",
          name: "Flèche perforante",
          description:
            "Varus effectue un tir puissant dont les dégâts et la portée augmentent avec la durée de la charge.",
          tooltip:
            '<span class="colorFF9900">Première activation :</span> Varus prépare son prochain tir, augmentant progressivement sa portée et ses dégâts. Pendant qu\'il se prépare à tirer, la vitesse de déplacement de Varus est réduite de {{ e7 }}%. Après {{ e5 }} sec, Flèche perforante s\'annule et rend {{ e4 }}% de son coût en mana.<br /><br /><span class="colorFF9900">Deuxième activation :</span> Varus tire, infligeant de <physicalDamage>{{ totaldamagemintooltip }}</physicalDamage> à <physicalDamage>{{ totaldamagemax }} pts de dégâts physiques</physicalDamage>. Les dégâts sont réduits de {{ e3 }}% par ennemi touché ({{ e9 }}% de dégâts minimum).<br /><br />Le délai de récupération de Flèche perforante est réduit de {{ f1 }} sec si la flèche déclenche des effets <span class="colorB829FF">Meurtrissure</span> sur au moins un champion ennemi.',
          leveltip: {
            label: ["Dégâts maximum", "Délai de récupération", "Coût en mana"],
            effect: [
              "{{ basedamagemax }} -> {{ basedamagemaxNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ basecost }} -> {{ basecostNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [18, 16, 14, 12, 10],
          cooldownBurn: "18/16/14/12/10",
          cost: [70, 75, 80, 85, 90],
          costBurn: "70/75/80/85/90",
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [15, 15, 15, 15, 15],
            [50, 50, 50, 50, 50],
            [4, 4, 4, 4, 4],
            [3, 3, 3, 3, 3],
            [20, 20, 20, 20, 20],
            [0, 0, 0, 0, 0],
            [33, 33, 33, 33, 33],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "0",
            "0",
            "15",
            "50",
            "4",
            "3",
            "20",
            "0",
            "33",
            "0",
          ],
          vars: [{ link: "attackdamage", coeff: 1, key: "f1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [925, 925, 925, 925, 925],
          rangeBurn: "925",
          image: {
            full: "VarusQ.png",
            sprite: "spell13.png",
            group: "spell",
            x: 96,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "VarusW",
          name: "Carquois meurtri",
          description:
            "Passive : les attaques de base de Varus infligent des dégâts magiques supplémentaires ainsi que Meurtrissure. Les autres compétences de Varus déclenchent Meurtrissure, infligeant des dégâts magiques en fonction des PV max de la cible. Active : Varus renforce sa prochaine Flèche perforante.",
          tooltip:
            ' <spellPassive>Passive : </spellPassive>les attaques de base de Varus infligent {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques supplémentaires ainsi que l\'effet <span class="colorB829FF">Meurtrissure</span> pendant {{ e3 }} sec (effet cumulable {{ e4 }} fois).<br /><br />Les autres compétences de Varus déclenchent <span class="colorB829FF">Meurtrissure</span>, infligeant des dégâts magiques équivalents à {{ e2 }}% <scaleAP>(+{{ a2 }}%)</scaleAP> des PV max de la cible par effet.<br /><br /><spellPassive>Active : </spellPassive>la prochaine Flèche perforante de Varus infligera des dégâts magiques supplémentaires équivalents à <span class="coloreeeeee">{{ f2*100 }}%</span>-<span class="coloreeeeee">{{ f1*100 }}%</span> des PV manquants de la cible (augmente avec la durée de la charge de Flèche perforante).<br /><br /><rules>Carquois meurtri est limité à {{ e5 }} pts de dégâts contre les monstres.</rules>',
          leveltip: {
            label: ["Dégâts par attaque", "Dégâts par Meurtrissure"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ effect2amount*100.000000 }}% -> {{ effect2amountnl*100.000000 }}%",
            ],
          },
          maxrank: 5,
          cooldown: [40, 40, 40, 40, 40],
          cooldownBurn: "40",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [7, 10.5, 14, 17.5, 20],
            [3, 3.5, 4, 4.5, 5],
            [6, 6, 6, 6, 6],
            [3, 3, 3, 3, 3],
            [360, 360, 360, 360, 360],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "7/10.5/14/17.5/20",
            "3/3.5/4/4.5/5",
            "6",
            "3",
            "360",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.25, key: "a1" },
            { link: "spelldamage", coeff: 0.02, key: "a2" },
          ],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [750, 750, 750, 750, 750],
          rangeBurn: "750",
          image: {
            full: "VarusW.png",
            sprite: "spell13.png",
            group: "spell",
            x: 144,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "VarusE",
          name: "Pluie de flèches",
          description:
            "Varus tire une pluie de flèches qui inflige des dégâts physiques et souille le sol. Le sol souillé réduit la vitesse de déplacement des ennemis et réduit les soins qu'ils reçoivent et leur régénération.",
          tooltip:
            "Varus tire une pluie de flèches qui inflige {{ e1 }} <scaleAD>(+{{ a1 }})</scaleAD> pts de dégâts physiques et souille le sol pendant {{ e3 }} sec.<br /><br />Le sol souillé réduit la vitesse de déplacement des ennemis de {{ e2 }}% et réduit leurs soins de {{ e4 }}%.",
          leveltip: {
            label: ["Dégâts", "Ralentissement", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ effect2amount*-100.000000 }}% -> {{ effect2amountnl*-100.000000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [18, 16, 14, 12, 10],
          cooldownBurn: "18/16/14/12/10",
          cost: [80, 80, 80, 80, 80],
          costBurn: "80",
          datavalues: {},
          effect: [
            null,
            [70, 105, 140, 175, 210],
            [25, 30, 35, 40, 45],
            [4, 4, 4, 4, 4],
            [40, 40, 40, 40, 40],
            [300, 300, 300, 300, 300],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/105/140/175/210",
            "25/30/35/40/45",
            "4",
            "40",
            "300",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "bonusattackdamage", coeff: 0.6, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [925, 925, 925, 925, 925],
          rangeBurn: "925",
          image: {
            full: "VarusE.png",
            sprite: "spell13.png",
            group: "spell",
            x: 192,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "VarusR",
          name: "Chaîne corruptrice",
          description:
            "Varus lance une vrille de corruption qui blesse et immobilise le premier champion ennemi touché et qui se propage ensuite vers les champions non infectés proches, les immobilisant eux aussi en les touchant.",
          tooltip:
            'Varus lance une vrille de corruption qui inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et immobilise le premier champion ennemi touché pendant {{ e2 }} sec.<br /><br />La corruption se propage ensuite vers les champions ennemis non infectés proches. Si elle les atteint, elle leur inflige les mêmes dégâts et les immobilise aussi. Les unités immobilisées reçoivent {{ e4 }} effets <span class="colorB829FF">Meurtrissure</span> sur la durée.',
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [130, 100, 70],
          cooldownBurn: "130/100/70",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [150, 200, 250],
            [2, 2, 2],
            [650, 650, 650],
            [3, 3, 3],
            [0.5, 0.5, 0.5],
            [600, 600, 600],
            [1.75, 1.75, 1.75],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "150/200/250",
            "2",
            "650",
            "3",
            "0.5",
            "600",
            "1.75",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 1, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1200, 1200, 1200],
          rangeBurn: "1200",
          image: {
            full: "VarusR.png",
            sprite: "spell13.png",
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
        name: "Vengeance incarnée",
        description:
          "Quand il tue un ennemi ou quand il réussit une assistance, Varus augmente temporairement sa vitesse d'attaque. Ce bonus est plus important si l'ennemi tué est un champion.",
        image: {
          full: "VarusPassive.png",
          sprite: "passive4.png",
          group: "passive",
          x: 336,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Varus",
          title: "Beginner",
          type: "riot",
          map: "SR",
          mode: "INTRO",
          priority: false,
          blocks: [
            {
              type: "beginner_Starter",
              maxSummonerLevel: 4,
              items: [{ id: "1055", count: 1 }],
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
                { id: "3022", count: 1 },
                { id: "3031", count: 1 },
                { id: "3102", count: 1 },
              ],
            },
          ],
        },
        {
          champion: "Varus",
          title: "VarusARAM",
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
                { id: "1053", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "3124", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "3085", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
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
                { id: "3091", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "3115", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3146", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Varus",
          title: "VarusFIRSTBLOOD",
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
              hideIfSummonerSpell: "",
              items: [
                { id: "1038", count: 1, hideCount: false },
                { id: "3086", count: 1, hideCount: false },
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
                { id: "3508", count: 1, hideCount: false },
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
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              items: [
                { id: "3031", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
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
                { id: "3139", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
                { id: "3363", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Varus",
          title: "VarusARAM",
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
                { id: "1053", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "3124", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
                { id: "3085", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
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
                { id: "3091", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
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
                { id: "3115", count: 1, hideCount: false },
                { id: "3089", count: 1, hideCount: false },
                { id: "3146", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Varus",
          title: "VarusSL",
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
                { id: "1043", count: 1, hideCount: false },
                { id: "1037", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
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
                { id: "1043", count: 1, hideCount: false },
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
                { id: "3124", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3124", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
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
                { id: "3153", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
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
                { id: "3139", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
          champion: "Varus",
          title: "VarusPRJ17",
          map: "ProjectSlums",
          mode: "PROJECT",
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
              items: [
                { id: "3006", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
              ],
            },
            {
              type: "recommended",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              items: [
                { id: "3142", count: 1, hideCount: false },
                { id: "3147", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
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
              items: [
                { id: "3814", count: 1, hideCount: false },
                { id: "3124", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Varus",
          title: "VarusSR",
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3144", count: 1, hideCount: false },
                { id: "1043", count: 1, hideCount: false },
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
                { id: "3153", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3124", count: 1, hideCount: false },
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
                { id: "3085", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3139", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3156", count: 1, hideCount: false },
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
export default Varus2;