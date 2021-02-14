const Qiyana = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Qiyana: {
      id: "Qiyana",
      key: "246",
      name: "Qiyana",
      title: "Impératrice des éléments",
      image: {
        full: "Qiyana.png",
        sprite: "champion2.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "246000", num: 0, name: "default", chromas: false },
        { id: "246001", num: 1, name: "Qiyana boss de combat", chromas: true },
        { id: "246002", num: 2, name: "True Damage Qiyana", chromas: false },
        {
          id: "246010",
          num: 10,
          name: "True Damage Qiyana édition prestige",
          chromas: false,
        },
      ],
      lore:
        "Dans la ville d'Ixaocan, perdue dans la jungle, Qiyana complote pour obtenir au prix du sang le siège révéré des Yun Tal. Dernière dans l'ordre de la succession, elle affronte ceux qui sont sur son chemin avec une absolue confiance en elle et une maîtrise exceptionnelle de la magie élémentaire. La terre elle-même obéit à ses ordres et Qiyana se considère comme la plus grande élémentaliste de l'histoire d'Ixaocan. À ce titre, elle pense mériter, non une ville, mais un empire.",
      blurb:
        "Dans la ville d'Ixaocan, perdue dans la jungle, Qiyana complote pour obtenir au prix du sang le siège révéré des Yun Tal. Dernière dans l'ordre de la succession, elle affronte ceux qui sont sur son chemin avec une absolue confiance en elle et une...",
      allytips: [],
      enemytips: [],
      tags: ["Assassin", "Fighter"],
      partype: "Mana",
      info: { attack: 0, defense: 2, magic: 4, difficulty: 8 },
      stats: {
        hp: 590,
        hpperlevel: 90,
        mp: 320,
        mpperlevel: 50,
        movespeed: 335,
        armor: 28,
        armorperlevel: 3.5,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 150,
        hpregen: 8.5,
        hpregenperlevel: 0.65,
        mpregen: 8,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 64,
        attackdamageperlevel: 3.1,
        attackspeedperlevel: 2.1,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "QiyanaQ",
          name: "Courroux élémentaire/Lame d'Ixtal",
          description:
            "Qiyana frappe avec son arme, infligeant des dégâts et un effet supplémentaire selon son élément.",
          tooltip:
            "<spellActive>Courroux élémentaire :</spellActive> vous tirez l'enchantement de votre arme dans la direction ciblée, ce qui le consomme. En explosant, le projectile inflige <physicalDamage>{{ enchanteddamage }} pts de dégâts physiques</physicalDamage> et :<br /><li><scaleMana>Enchantement de la glace </scaleMana>: immobilise brièvement les ennemis touchés, puis les ralentit de {{ slowpotency*-100 }}% pendant {{ slowduration }} sec.<li><span class=\"colorba7221\">Enchantement des pierres </span>: <physicalDamage>{{ tremordamage }}</physicalDamage> pts de dégâts supplémentaires aux unités qui ont moins de {{ critthreshold*100 }}% de leurs PV max.<li><scaleAP>Enchantement de la nature </scaleAP>: laisse une canopée qui vous octroie un effet de furtivité et qui augmente votre vitesse de déplacement de {{ haste*100 }}%. La canopée se dissipe quand vous attaquez depuis la zone de furtivité, quand vous en sortez ou au bout de {{ stealthduration }} sec.<br /><br /><spellActive>Lame d'Ixtal :</spellActive> si vous n'avez pas d'enchantement, vous frappez dans la direction ciblée, infligeant <physicalDamage>{{ vanilladamage }} pts de dégâts physiques</physicalDamage> aux ennemis dans une petite zone.<br /><br /><rules>Les deux compétences infligent {{ falloffdamage }} de dégâts aux cibles après la première.</rules>",
          leveltip: {
            label: ["Dégâts"],
            effect: ["{{ vanillabase }} -> {{ vanillabaseNL }}"],
          },
          maxrank: 5,
          cooldown: [7, 7, 7, 7, 7],
          cooldownBurn: "7",
          cost: [35, 35, 35, 35, 35],
          costBurn: "35",
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
          maxammo: "0",
          range: [525, 525, 525, 525, 525],
          rangeBurn: "525",
          image: {
            full: "QiyanaQ.png",
            sprite: "spell9.png",
            group: "spell",
            x: 0,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "QiyanaW",
          name: "Terraforce",
          description:
            "Qiyana se rue vers la zone ciblée et enchante son arme avec un élément. Ses attaques et ses compétences infligent des dégâts supplémentaires quand son arme est enchantée. ",
          tooltip:
            "<spellActive>Active :</spellActive> vous ciblez une <scaleMana>rivière</scaleMana>, un <span class=\"colorba7221\">mur</span> ou une parcelle d'<scaleAP>herbes hautes</scaleAP>. Vous puisez dans le pouvoir élémentaire de l'environnement et vous vous ruez dans sa direction, ce qui enchante votre arme avec cet élément et réinitialise le délai de récupération de <b><active>Courroux élémentaire [{{ spell.qiyanaq:hotkey }}]</active></b>.<br /><br /><spellActive>Passive :</spellActive> tant que votre arme est enchantée, votre vitesse d'attaque est augmentée de {{ attackspeed*100 }}% et vos attaques et compétences de base infligent {{ onhitdamage }}<magicDamage> pts de dégâts magiques supplémentaires</magicDamage>. De plus, votre vitesse de déplacement est augmentée de {{ passivems*100 }}% en dehors des combats et à proximité du terrain correspondant à votre élément.",
          leveltip: {
            label: [
              "Dégâts à l'impact",
              "Vitesse de déplacement",
              "Vitesse d'attaque supplémentaire",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ passivems*100.000000 }}% -> {{ passivemsnl*100.000000 }}%",
              "{{ attackspeed*100.000000 }}% -> {{ attackspeednl*100.000000 }}%",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [7, 7, 7, 7, 7],
          cooldownBurn: "7",
          cost: [25, 30, 35, 40, 45],
          costBurn: "25/30/35/40/45",
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
          maxammo: "0",
          range: [1100, 1100, 1100, 1100, 1100],
          rangeBurn: "1100",
          image: {
            full: "QiyanaW.png",
            sprite: "spell9.png",
            group: "spell",
            x: 48,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "QiyanaE",
          name: "Audace",
          description: "Qiyana se rue sur un ennemi et lui inflige des dégâts.",
          tooltip:
            "Vous vous ruez à travers la cible ennemie et lui infligez <physicalDamage>{{ damage }} pts de dégâts physiques</physicalDamage>.<br /><br /><rules>Si <b>Courroux élémentaire/Lame d'Ixtal [{{ spell.qiyanaq:hotkey }}]</b> est lancé pendant que cette compétence vise un champion, Qiyana le lancera automatiquement sur cette cible.</rules>",
          leveltip: {
            label: ["Dégâts de base", "Délai de récupération", "Coût en mana"],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
              "{{ basecost }} -> {{ basecostNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [12, 11, 10, 9, 8],
          cooldownBurn: "12/11/10/9/8",
          cost: [40, 45, 50, 55, 60],
          costBurn: "40/45/50/55/60",
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
          maxammo: "0",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "QiyanaE.png",
            sprite: "spell9.png",
            group: "spell",
            x: 96,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "QiyanaR",
          name: "Tour de force suprême",
          description:
            "Qiyana envoie une onde de choc qui provoque une explosion en touchant un élément, ce qui étourdit et blesse les ennemis proches.",
          tooltip:
            'Lance une onde de choc qui repousse les ennemis et explose en touchant un <span class="colorba7221">mur</span>. Le <span class="colorba7221">mur</span> tout entier explose ensuite, étourdissant les ennemis proches pendant un maximum de {{ stunduration }} sec et leur infligeant des <physicalDamage>dégâts physiques</physicalDamage> équivalents à <physicalDamage>{{ damage }} + {{ missinghealthdamagerock }}</physicalDamage> <scaleHealth>de leurs PV max</scaleHealth>.<br /><br />Toute <scaleMana>rivière</scaleMana> et toute parcelle d\'<scaleAP>herbes hautes</scaleAP> traversées par l\'onde de choc explosent aussi après un délai, infligeant les mêmes dégâts et un étourdissement.',
          leveltip: {
            label: ["Dégâts initiaux"],
            effect: ["{{ basedamage }} -> {{ basedamageNL }}"],
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
          maxammo: "0",
          range: [950, 950, 950],
          rangeBurn: "950",
          image: {
            full: "QiyanaR.png",
            sprite: "spell9.png",
            group: "spell",
            x: 144,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Privilège royal",
        description:
          "La première compétence ou attaque de base de Qiyana contre un ennemi inflige des dégâts supplémentaires.",
        image: {
          full: "Qiyana_Passive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 432,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Qiyana",
          title: "QiyanaARAM",
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3111", count: 1, hideCount: false },
                { id: "3147", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
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
                { id: "3812", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2140", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Qiyana",
          title: "QiyanaBeginner",
          map: "SR",
          mode: "INTRO",
          type: "riot",
          customTag: "",
          sortrank: 0,
          extensionPage: false,
          useObviousCheckmark: false,
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
                { id: "1054", count: 1, hideCount: false },
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
                { id: "1054", count: 1, hideCount: false },
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
                { id: "1036", count: 1, hideCount: false },
                { id: "3133", count: 1, hideCount: false },
                { id: "3147", count: 1, hideCount: false },
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
                { id: "1033", count: 1, hideCount: false },
                { id: "3111", count: 1, hideCount: false },
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
                { id: "3071", count: 1, hideCount: false },
                { id: "3053", count: 1, hideCount: false },
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
                { id: "3036", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3142", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Qiyana",
          title: "QiyanaARAM",
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
              hideIfSummonerSpell: "",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3111", count: 1, hideCount: false },
                { id: "3147", count: 1, hideCount: false },
                { id: "3071", count: 1, hideCount: false },
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
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
                { id: "3812", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2140", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "Qiyana",
          title: "QiyanaSR",
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
                { id: "1412", count: 1, hideCount: false },
                { id: "3147", count: 1, hideCount: false },
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
                { id: "3147", count: 1, hideCount: false },
                { id: "3179", count: 1, hideCount: false },
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
                { id: "3142", count: 1, hideCount: false },
                { id: "3026", count: 1, hideCount: false },
                { id: "3814", count: 1, hideCount: false },
              ],
            },
            {
              type: "selective",
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
                { id: "3156", count: 1, hideCount: false },
                { id: "3036", count: 1, hideCount: false },
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
export default Qiyana;