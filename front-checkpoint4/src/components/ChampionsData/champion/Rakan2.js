import Rakan from "./Rakan";

const Rakan2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Rakan: {
      id: "Rakan",
      key: "497",
      name: "Rakan",
      title: "Charmeur",
      image: {
        full: "Rakan.png",
        sprite: "champion3.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "497000", num: 0, name: "default", chromas: false },
        {
          id: "497001",
          num: 1,
          name: "Rakan de l'aube cosmique",
          chromas: false,
        },
        { id: "497002", num: 2, name: "Rakan cœur tendre", chromas: false },
        { id: "497003", num: 3, name: "SSG Rakan", chromas: false },
        { id: "497004", num: 4, name: "iG Rakan", chromas: false },
        {
          id: "497005",
          num: 5,
          name: "Rakan gardien des étoiles",
          chromas: true,
        },
      ],
      lore:
        "Aussi lunatique qu'il est charmeur, Rakan est un trublion vastaya tristement célèbre, et le plus grand danseur guerrier de l'histoire de la tribu Lhotla. Pour les humains qui vivent dans les hautes terres d'Ionia, son nom est depuis longtemps synonyme de festivals endiablés, de fêtes déraisonnables et de musique anarchique. Peu de gens savent cependant que cet histrion ambulant est également le partenaire de Xayah, la rebelle, dont il défend avec ferveur la cause.",
      blurb:
        "Aussi lunatique qu'il est charmeur, Rakan est un trublion vastaya tristement célèbre, et le plus grand danseur guerrier de l'histoire de la tribu Lhotla. Pour les humains qui vivent dans les hautes terres d'Ionia, son nom est depuis longtemps synonyme...",
      allytips: [
        "Rakan a besoin d'alliés proches pour profiter au maximum de ses capacités.",
        "La vitesse des ruées de Rakan augmente avec sa vitesse de déplacement. Profitez de ce surcroît de vitesse pour surprendre vos ennemis !",
        "Le danger est amusant si on le veut bien.",
      ],
      enemytips: [
        "Les compétences de déplacement de Rakan annoncent leur destination. Essayez de tirer parti de ces informations.",
        "Les champions pouvant rapidement appliquer des contrôles de foule excellent contre Rakan.",
        "Surprendre Rakan quand il est loin de ses alliés entrave grandement sa mobilité. Attaquez-vous à lui quand il est isolé.",
      ],
      tags: ["Support"],
      partype: "Mana",
      info: { attack: 2, defense: 4, magic: 8, difficulty: 5 },
      stats: {
        hp: 540,
        hpperlevel: 85,
        mp: 315,
        mpperlevel: 50,
        movespeed: 335,
        armor: 32,
        armorperlevel: 3.9,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 300,
        hpregen: 5,
        hpregenperlevel: 0.5,
        mpregen: 8.75,
        mpregenperlevel: 0.5,
        crit: 0,
        critperlevel: 0,
        attackdamage: 62,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 3,
        attackspeed: 0.635,
      },
      spells: [
        {
          id: "RakanQ",
          name: "Rémige rayonnante",
          description:
            "Rakan tire une plume magique qui inflige des dégâts magiques. Frapper un champion ou un monstre épique permet à Rakan de soigner ses alliés.",
          tooltip:
            "Rakan tire une plume magique qui inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques au premier ennemi touché.<br /><br />Si la plume touche un champion ou un monstre épique, Rakan récupère <scaleLevel>{{ f1 }}</scaleLevel> <scaleAP>(+{{ a2 }})</scaleAP> PV et rend le même montant aux alliés proches après un délai de {{ e4 }} sec ou quand il touche un allié.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e5 }} -> {{ e5NL }}"],
          },
          maxrank: 5,
          cooldown: [0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [60, 60, 60, 60, 60],
          costBurn: "60",
          datavalues: {},
          effect: [
            null,
            [70, 115, 160, 205, 250],
            [12, 12, 12, 12, 12],
            [6, 6, 6, 6, 6],
            [3, 3, 3, 3, 3],
            [12, 11, 10, 9, 8],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "70/115/160/205/250",
            "12",
            "6",
            "3",
            "12/11/10/9/8",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.6, key: "a1" },
            { link: "spelldamage", coeff: 0.7, key: "a2" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [850, 850, 850, 850, 850],
          rangeBurn: "850",
          image: {
            full: "RakanQ.png",
            sprite: "spell9.png",
            group: "spell",
            x: 384,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "RakanW",
          name: "Entrée triomphale",
          description:
            "Rakan fonce vers l'endroit ciblé, projetant en l'air les ennemis proches de son point d'arrivée.",
          tooltip:
            "Rakan fonce vers l'endroit ciblé. À l'arrivée, il se projette dans les airs, infligeant <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> aux ennemis et les projetant en l'air pendant {{ knockupduration }} sec.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération", "Coût en mana"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ basecost }} -> {{ basecostNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [18, 16.5, 15, 13.5, 12],
          cooldownBurn: "18/16.5/15/13.5/12",
          cost: [50, 60, 70, 80, 90],
          costBurn: "50/60/70/80/90",
          datavalues: {},
          effect: [
            null,
            [70, 115, 160, 205, 250],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
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
            "0",
            "1",
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
          range: [600, 600, 600, 600, 600],
          rangeBurn: "600",
          image: {
            full: "RakanW.png",
            sprite: "spell9.png",
            group: "spell",
            x: 432,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "RakanE",
          name: "Valse guerrière",
          description:
            "Rakan s'envole vers un champion allié en lui octroyant un bouclier. La compétence peut être relancée sans coût pendant un court instant.",
          tooltip:
            'Rakan s\'envole vers un champion allié, lui octroyant un bouclier de {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> PV pendant {{ e3 }} sec.<br /><br />La compétence peut être relancée sans coût dans les {{ e2 }} sec.<br /><br /><span class="colore5c100">La portée de Valse guerrière est augmentée si vous ciblez Xayah.</span>',
          leveltip: {
            label: [
              "PV du bouclier",
              "Délai de récupération",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e4 }} -> {{ e4NL }}",
              "{{ e5 }} -> {{ e5NL }}",
            ],
          },
          maxrank: 5,
          cooldown: [0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [60, 70, 80, 90, 100],
          costBurn: "60/70/80/90/100",
          datavalues: {},
          effect: [
            null,
            [40, 65, 90, 115, 140],
            [5, 5, 5, 5, 5],
            [3, 3, 3, 3, 3],
            [20, 18, 16, 14, 12],
            [60, 70, 80, 90, 100],
            [700, 700, 700, 700, 700],
            [1000, 1000, 1000, 1000, 1000],
            [1150, 1150, 1150, 1150, 1150],
            [1250, 1250, 1250, 1250, 1250],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "40/65/90/115/140",
            "5",
            "3",
            "20/18/16/14/12",
            "60/70/80/90/100",
            "700",
            "1000",
            "1150",
            "1250",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.8, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "RakanE.png",
            sprite: "spell9.png",
            group: "spell",
            x: 0,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "RakanR",
          name: "Danse ultime",
          description:
            "Rakan augmente sa vitesse de déplacement, charme les ennemis touchés et leur inflige des dégâts magiques.",
          tooltip:
            "La vitesse de déplacement de Rakan est augmentée de {{ e5 }}% pendant {{ e2 }} sec.<br /><br />Toucher des ennemis leur inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et les charme pendant {{ e3 }} sec la première fois qu'ils sont touchés. Le premier champion charmé octroie à Rakan un bonus de {{ e6 }}% en vitesse de déplacement qui se dissipe progressivement.",
          leveltip: {
            label: ["Durée du charme", "Dégâts", "Délai de récupération"],
            effect: [
              "{{ e3 }} -> {{ e3NL }}",
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [130, 110, 90],
          cooldownBurn: "130/110/90",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [100, 200, 300],
            [4, 4, 4],
            [1, 1.25, 1.5],
            [0.25, 0.25, 0.25],
            [50, 50, 50],
            [150, 150, 150],
            [150, 150, 150],
            [130, 110, 90],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "100/200/300",
            "4",
            "1/1.25/1.5",
            "0.25",
            "50",
            "150",
            "150",
            "130/110/90",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.5, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [150, 150, 150],
          rangeBurn: "150",
          image: {
            full: "RakanR.png",
            sprite: "spell9.png",
            group: "spell",
            x: 48,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Plumes enchantées",
        description: "Rakan gagne périodiquement un bouclier.",
        image: {
          full: "Rakan_P.png",
          sprite: "passive3.png",
          group: "passive",
          x: 48,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Rakan",
          title: "Beginner",
          map: "HA",
          mode: "ARAM",
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
              items: [
                { id: "3301", count: 1, hideCount: false },
                { id: "2003", count: 3, hideCount: false },
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
              appendAfterSection: "",
              items: [
                { id: "1028", count: 1, hideCount: false },
                { id: "2049", count: 1, hideCount: false },
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
              appendAfterSection: "",
              items: [
                { id: "3096", count: 1, hideCount: false },
                { id: "2053", count: 1, hideCount: false },
                { id: "3069", count: 1, hideCount: false },
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
                { id: "3800", count: 1, hideCount: false },
                { id: "3504", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Rakan",
          title: "RakanARAM",
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
              hideIfSummonerSpell: "SummonerSmite",
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
                { id: "3109", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
                { id: "3504", count: 1, hideCount: false },
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3107", count: 1, hideCount: false },
                { id: "3222", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
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
                { id: "3152", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
          champion: "Rakan",
          title: "RakanARAM",
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
              hideIfSummonerSpell: "SummonerSmite",
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
                { id: "3109", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
                { id: "3504", count: 1, hideCount: false },
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
                { id: "3050", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3107", count: 1, hideCount: false },
                { id: "3222", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
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
                { id: "3152", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
          champion: "Rakan",
          title: "RakanSL",
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
                { id: "4301", count: 1, hideCount: false },
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
                { id: "3114", count: 1, hideCount: false },
                { id: "3801", count: 1, hideCount: false },
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
                { id: "1027", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "3107", count: 1, hideCount: false },
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
                { id: "3111", count: 1, hideCount: false },
                { id: "2065", count: 1, hideCount: false },
                { id: "4104", count: 1, hideCount: false },
              ],
            },
            {
              type: "protective",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "S5_SummonerSmiteDuel",
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3504", count: 1, hideCount: false },
                { id: "2065", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
              ],
            },
            {
              type: "protective",
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
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
          champion: "Rakan",
          title: "RakanSR",
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
                { id: "3850", count: 1, hideCount: false },
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
                { id: "3114", count: 1, hideCount: false },
                { id: "3024", count: 1, hideCount: false },
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
                { id: "2065", count: 1, hideCount: false },
                { id: "3050", count: 1, hideCount: false },
                { id: "3107", count: 1, hideCount: false },
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
                { id: "3504", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
                { id: "3190", count: 1, hideCount: false },
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
export default Rakan2;