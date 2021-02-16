const Ashe = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Ashe: {
      id: "Ashe",
      key: "22",
      name: "Ashe",
      title: "Archère de givre",
      image: {
        full: "Ashe.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "22000", num: 0, name: "default", chromas: false },
        { id: "22001", num: 1, name: "Ashe de Freljord", chromas: false },
        { id: "22002", num: 2, name: "Ashe de Sherwood", chromas: false },
        { id: "22003", num: 3, name: "Ashe pastel", chromas: false },
        { id: "22004", num: 4, name: "Reine Ashe", chromas: false },
        { id: "22005", num: 5, name: "Ashe d'améthyste", chromas: false },
        { id: "22006", num: 6, name: "Ashe cœur-de-cible", chromas: false },
        { id: "22007", num: 7, name: "Ashe maraudeuse", chromas: false },
        { id: "22008", num: 8, name: "PROJET : Ashe", chromas: false },
        { id: "22009", num: 9, name: "Ashe du championnat", chromas: true },
        { id: "22011", num: 11, name: "Ashe reine cosmique", chromas: true },
        { id: "22017", num: 17, name: "Ashe de l'Ouest", chromas: true },
      ],
      lore:
        "Chef de guerre sublimé de la tribu des Avarosans, Ashe est à la tête de la plus vaste horde des terres du nord. Stoïque, intelligente et idéaliste, mais mal à l'aise dans son rôle de leader, elle puise dans la magie ancestrale de sa lignée pour manier un arc de glace pure. Soutenue par son peuple qui voit en elle la réincarnation de la légendaire héroïne Avarosa, Ashe cherche à unifier Freljord en reprenant les terres tribales.",
      blurb:
        "Chef de guerre sublimé de la tribu des Avarosans, Ashe est à la tête de la plus vaste horde des terres du nord. Stoïque, intelligente et idéaliste, mais mal à l'aise dans son rôle de leader, elle puise dans la magie ancestrale de sa lignée pour manier...",
      allytips: [
        "Lancez Flèche de cristal enchantée dans la direction vers laquelle vont les ennemis pour avoir plus de chances de toucher.",
        "Les flèches de Salve sont bloquées par le premier ennemi touché, alors gardez vos distances pour que vos flèches ne soient pas toutes interceptées par la première ligne ennemie.",
        "Rapace dévoile les unités dans les herbes hautes. Si un combat important se déroule dans la jungle, Rapace peut vous donner l'avantage.",
      ],
      enemytips: [
        "Ashe a peu d'options défensives, et c'est une cible idéale pour les ganks.",
        "Si Ashe n'a pas récemment utilisé Flèche de cristal enchantée, soyez prudent lorsque vous vous déplacez en solitaire sur la carte.",
      ],
      tags: ["Marksman", "Support"],
      partype: "Mana",
      info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      stats: {
        hp: 539,
        hpperlevel: 85,
        mp: 280,
        mpperlevel: 32,
        movespeed: 325,
        armor: 26,
        armorperlevel: 3.4,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 600,
        hpregen: 3.5,
        hpregenperlevel: 0.55,
        mpregen: 6.972,
        mpregenperlevel: 0.4,
        crit: 0,
        critperlevel: 0,
        attackdamage: 61,
        attackdamageperlevel: 2.96,
        attackspeedperlevel: 3.33,
        attackspeed: 0.658,
      },
      spells: [
        {
          id: "AsheQ",
          name: "Concentration du ranger",
          description:
            "Ashe génère des effets Concentration quand elle attaque. Une fois le maximum d'effets Concentration atteint, Ashe peut lancer Concentration du ranger pour consommer tous les effets, ce qui augmente temporairement sa vitesse d'attaque et transforme son attaque de base en une puissante volée de flèches pendant la durée du sort.",
          tooltip:
            "<spellPassive>Passive : </spellPassive>les attaques de base octroient de la Concentration pendant {{ e1 }} sec (cumulable {{ e2 }} fois). Les effets cumulés se dissipent un par un. Quand {{ e2 }} effets Concentration sont cumulés, Concentration du ranger peut être utilisé, consommant toute la Concentration.<br /><br /><spellPassive>Active : </spellPassive>pendant {{ e3 }} sec, la vitesse d'attaque d'Ashe augmente de {{ e4 }}% et ses attaques de base tirent des rafales de flèches infligeant <scaleAD>{{ f1 }}</scaleAD> pts de dégâts physiques. Tant que l'effet est actif, Ashe ne cumule pas de Concentration. Concentration du ranger applique Tir givrant.",
          leveltip: {
            label: [
              "Vitesse d'attaque",
              "Ratio de dégâts d'attaque de la rafale",
            ],
            effect: ["{{ e4 }}% -> {{ e4NL }}%", "{{ e6 }} -> {{ e6NL }}"],
          },
          maxrank: 5,
          cooldown: [0, 0, 0, 0, 0],
          cooldownBurn: "0",
          cost: [50, 50, 50, 50, 50],
          costBurn: "50",
          datavalues: {},
          effect: [
            null,
            [4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4],
            [20, 30, 40, 50, 60],
            [0.21, 0.22, 0.23, 0.24, 0.25],
            [1.05, 1.1, 1.15, 1.2, 1.25],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "4",
            "4",
            "4",
            "20/30/40/50/60",
            "0.21/0.22/0.23/0.24/0.25",
            "1.05/1.1/1.15/1.2/1.25",
            "1",
            "1",
            "1",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [400, 400, 400, 400, 400],
          rangeBurn: "400",
          image: {
            full: "AsheQ.png",
            sprite: "spell1.png",
            group: "spell",
            x: 288,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "Volley",
          name: "Salve",
          description:
            "Ashe tire 9 flèches dans une zone conique pour infliger plus de dégâts. Applique aussi Tir givrant.",
          tooltip:
            "Tire des flèches dans une zone conique, chacune infligeant <scaleAD>{{ totaldamage }} pts de dégâts physiques</scaleAD>. Les ennemis peuvent être touchés par plusieurs flèches, mais ils ne subiront les dégâts que de la première.<br /><br />Contre les champions, les coups sont critiques et appliquent donc le ralentissement critique de Tir givrant.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [14, 11.5, 9, 6.5, 4],
          cooldownBurn: "14/11.5/9/6.5/4",
          cost: [70, 70, 70, 70, 70],
          costBurn: "70",
          datavalues: {},
          effect: [
            null,
            [5, 7, 9, 11, 13],
            [20, 35, 50, 65, 80],
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
            "5/7/9/11/13",
            "20/35/50/65/80",
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
          range: [1200, 1200, 1200, 1200, 1200],
          rangeBurn: "1200",
          image: {
            full: "Volley.png",
            sprite: "spell1.png",
            group: "spell",
            x: 336,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "AsheSpiritOfTheHawk",
          name: "Rapace",
          description:
            "Ashe envoie son faucon en reconnaissance à n'importe quel endroit de la carte.",
          tooltip:
            "Révèle le terrain qu'il survole jusqu'à la zone cible. Octroie la vision de la zone pendant {{ e4 }} sec. Ashe peut stocker jusqu'à 2 charges de Rapace.<br /><br />Rapace permet à Ashe de réussir des assistances si les champions ennemis révélés n'étaient pas déjà visibles.",
          leveltip: {
            label: ["Délai de rechargement"],
            effect: ["{{ ammorechargetime }} -> {{ ammorechargetimeNL }}"],
          },
          maxrank: 5,
          cooldown: [5, 5, 5, 5, 5],
          cooldownBurn: "5",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [3, 3, 3, 3, 3],
            [50, 90, 130, 170, 210],
            [25000, 25000, 25000, 25000, 25000],
            [5, 5, 5, 5, 5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "3",
            "50/90/130/170/210",
            "25000",
            "5",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: " {{ abilityresourcename }}",
          maxammo: "2",
          range: [25000, 25000, 25000, 25000, 25000],
          rangeBurn: "25000",
          image: {
            full: "AsheSpiritOfTheHawk.png",
            sprite: "spell1.png",
            group: "spell",
            x: 384,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "EnchantedCrystalArrow",
          name: "Flèche de cristal enchantée",
          description:
            "Ashe tire un trait de glace en ligne droite. Si la flèche touche un champion ennemi, elle le blesse et l'étourdit, la durée de l'étourdissement augmentant avec la distance parcourue par la flèche. De plus, les unités ennemies proches subissent des dégâts et sont ralenties.",
          tooltip:
            "Tire une flèche de cristal qui étourdit le premier champion ennemi touché et lui inflige {{ rmaindamage }} pts de dégâts magiques. Plus la distance parcourue par la flèche est grande, plus l'étourdissement est long, jusqu'à un maximum de {{ maxstunduration }} sec. Les ennemis proches subissent la moitié des dégâts.",
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ rbasedamage }} -> {{ rbasedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [100, 90, 80],
          cooldownBurn: "100/90/80",
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
          range: [25000, 25000, 25000],
          rangeBurn: "25000",
          image: {
            full: "EnchantedCrystalArrow.png",
            sprite: "spell1.png",
            group: "spell",
            x: 432,
            y: 0,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Tir givrant",
        description:
          "Les attaques d'Ashe ralentissent ses cibles et infligent des dégâts supplémentaires aux cibles affectées.<br><br>Les coups critiques d'Ashe n'infligent pas de dégâts supplémentaires, mais ils renforcent le ralentissement.",
        image: {
          full: "Ashe_P.png",
          sprite: "passive0.png",
          group: "passive",
          x: 384,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Ashe",
          title: "AsheARAM",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1038", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: false },
                { id: "2033", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Ashe",
          title: "AsheBT",
          map: "SR",
          mode: "TUTORIAL",
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
              items: [
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
              items: [
                { id: "1055", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3031", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3035", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3139", count: 1, hideCount: false },
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
              items: [{ id: "2003", count: 1, hideCount: false }],
            },
          ],
        },
        {
          champion: "Ashe",
          title: "AsheFIRSTBLOOD",
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
                { id: "3031", count: 1, hideCount: false },
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
              items: [
                { id: "3094", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3036", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
                { id: "3072", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: true },
                { id: "2140", count: 1, hideCount: true },
                { id: "3363", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Ashe",
          title: "AsheARAM",
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
              hideIfSummonerSpell: "SummonerSmite",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "1038", count: 1, hideCount: false },
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
                { id: "3006", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
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
                { id: "2140", count: 1, hideCount: false },
                { id: "2033", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Ashe",
          title: "AsheSL",
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
                { id: "3144", count: 1, hideCount: false },
                { id: "1001", count: 1, hideCount: false },
                { id: "1043", count: 1, hideCount: false },
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
                { id: "4105", count: 1, hideCount: false },
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
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
                { id: "3087", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
                { id: "3172", count: 1, hideCount: false },
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
          champion: "Ashe",
          title: "AshePRJ17",
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
                { id: "3009", count: 1, hideCount: false },
                { id: "3508", count: 1, hideCount: false },
                { id: "3046", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3094", count: 1, hideCount: false },
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
                { id: "3072", count: 1, hideCount: false },
                { id: "3812", count: 1, hideCount: false },
                { id: "3139", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Ashe",
          title: "AsheSR",
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
                { id: "1038", count: 1, hideCount: false },
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3508", count: 1, hideCount: false },
                { id: "3006", count: 1, hideCount: false },
                { id: "3085", count: 1, hideCount: false },
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
                { id: "3031", count: 1, hideCount: false },
                { id: "3153", count: 1, hideCount: false },
                { id: "3033", count: 1, hideCount: false },
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
          champion: "Ashe",
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
          champion: "Ashe",
          title: "Map12T",
          map: "HA",
          mode: "TUTORIAL",
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
              items: [{ id: "3075", count: 1, hideCount: false }],
            },
          ],
        },
      ],
    },
  },
};
export default Ashe ;
