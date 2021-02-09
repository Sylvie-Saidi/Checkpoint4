const Brand = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Brand: {
      id: "Brand",
      key: "63",
      name: "Brand",
      title: "Vengeur flamboyant",
      image: {
        full: "Brand.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "63000", num: 0, name: "default", chromas: false },
        { id: "63001", num: 1, name: "Brand apocalyptique", chromas: false },
        { id: "63002", num: 2, name: "Brand Vandale", chromas: false },
        { id: "63003", num: 3, name: "Cryo Brand", chromas: false },
        { id: "63004", num: 4, name: "Brand zombie", chromas: false },
        { id: "63005", num: 5, name: "Brand feu spirituel", chromas: false },
        { id: "63006", num: 6, name: "Brand boss de combat", chromas: false },
        { id: "63007", num: 7, name: "Brand aux flammes pures", chromas: true },
      ],
      lore:
        "Autrefois membre d'une tribu de Freljord, Kegan Rodhe est devenu l'être que l'on connaît sous le nom de Brand à force de convoiter des pouvoirs toujours plus grands. Alors qu'il recherchait l'une des légendaires Runes telluriques, Kegan trahit ses compagnons et s'en empara ; en un instant, son âme fut consumée par un brasier qui le changea à jamais. Désormais animé d'un feu inextinguible, Brand parcourt Valoran en quête d'autres runes, jurant vengeance pour des trahisons qu'aucun mortel n'aurait pu subir au cours d'une dizaine de vies.",
      blurb:
        "Autrefois membre d'une tribu de Freljord, Kegan Rodhe est devenu l'être que l'on connaît sous le nom de Brand à force de convoiter des pouvoirs toujours plus grands. Alors qu'il recherchait l'une des légendaires Runes telluriques, Kegan trahit ses...",
      allytips: [
        "Vous pouvez empêcher vos ennemis de rester à proximité de leurs sbires en enflammant ces derniers avec Conflagration.",
        "Les compétences de Brand peuvent servir à effectuer différentes combos pour maximiser les dégâts selon la situation.",
        "Pyrolyse rebondit aléatoirement sur les ennemis : utilisez-le de préférence sur de petits groupes pour que le sort rebondisse plusieurs fois sur la même cible.",
      ],
      enemytips: [
        "Brand doit utiliser une compétence pour initier son combo. Si vous esquivez Brûlure ou Colonne de flammes, vous interromprez sa routine.",
        "Pensez à vous éloigner de vos alliés lorsque vous le voyez incanter Pyrolyse. La vitesse du projectile est assez lente au début, ce qui laisse le temps de réagir.",
        "La compétence passive de Brand lui permet d'exceller contre les équipes regroupées. Ne restez pas tous au même endroit.",
      ],
      tags: ["Mage"],
      partype: "Mana",
      info: { attack: 2, defense: 2, magic: 9, difficulty: 4 },
      stats: {
        hp: 519.68,
        hpperlevel: 88,
        mp: 469,
        mpperlevel: 21,
        movespeed: 340,
        armor: 21.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 550,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 10.665,
        mpregenperlevel: 0.6,
        crit: 0,
        critperlevel: 0,
        attackdamage: 57.04,
        attackdamageperlevel: 3,
        attackspeedperlevel: 1.36,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "BrandQ",
          name: "Brûlure",
          description:
            "Brand lance une boule de feu devant lui, infligeant des dégâts magiques. Si la cible est en flammes, Brûlure l'étourdit pendant 1,5 sec.",
          tooltip:
            'Brand lance une boule de feu devant lui, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques.<br /><br /><span class="colorDDDD77">Flammes :</span> Si la cible est en flammes, Brûlure l\'étourdit pendant 1,5 sec.',
          leveltip: {
            label: ["Dégâts", "Délai de récupération"],
            effect: [
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [8, 7.5, 7, 6.5, 6],
          cooldownBurn: "8/7.5/7/6.5/6",
          cost: [50, 50, 50, 50, 50],
          costBurn: "50",
          datavalues: {},
          effect: [
            null,
            [80, 110, 140, 170, 200],
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
            "80/110/140/170/200",
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
          vars: [{ link: "spelldamage", coeff: 0.55, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [1050, 1050, 1050, 1050, 1050],
          rangeBurn: "1050",
          image: {
            full: "BrandQ.png",
            sprite: "spell1.png",
            group: "spell",
            x: 288,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "BrandW",
          name: "Colonne de flammes",
          description:
            "Après un court délai, Brand crée une colonne de flammes dans la zone ciblée, infligeant des dégâts magiques aux unités ennemies qui s'y trouvent. Les unités qui sont en flammes subissent 25% de dégâts supplémentaires.",
          tooltip:
            'Après un court délai, Brand crée une colonne de flammes dans la zone ciblée, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux ennemis.<br /><br /><span class="colorDDDD77">Flammes :</span> Colonne de flammes inflige 25% de dégâts supplémentaires aux unités en flammes.',
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
          cooldown: [10, 9.5, 9, 8.5, 8],
          cooldownBurn: "10/9.5/9/8.5/8",
          cost: [60, 70, 80, 90, 100],
          costBurn: "60/70/80/90/100",
          datavalues: {},
          effect: [
            null,
            [75, 120, 165, 210, 255],
            [20, 40, 60, 80, 100],
            [0.25, 0.25, 0.25, 0.25, 0.25],
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
            "75/120/165/210/255",
            "20/40/60/80/100",
            "0.25",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.6, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [900, 900, 900, 900, 900],
          rangeBurn: "900",
          image: {
            full: "BrandW.png",
            sprite: "spell1.png",
            group: "spell",
            x: 336,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "BrandE",
          name: "Conflagration",
          description:
            "Brand provoque une puissante explosion sur sa cible, infligeant des dégâts magiques. Si la cible est en flammes, Conflagration frappe aussi les ennemis proches.",
          tooltip:
            'Brand provoque une puissante explosion sur sa cible, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques.<br /><br /><span class="colorDDDD77">Flammes :</span> Si la cible est en flammes, Conflagration frappe aussi les ennemis proches. ',
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
          cooldown: [10, 9, 8, 7, 6],
          cooldownBurn: "10/9/8/7/6",
          cost: [70, 75, 80, 85, 90],
          costBurn: "70/75/80/85/90",
          datavalues: {},
          effect: [
            null,
            [70, 95, 120, 145, 170],
            [375, 375, 375, 375, 375],
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
            "70/95/120/145/170",
            "375",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.45, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [625, 625, 625, 625, 625],
          rangeBurn: "625",
          image: {
            full: "BrandE.png",
            sprite: "spell1.png",
            group: "spell",
            x: 384,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "BrandR",
          name: "Pyrolyse",
          description:
            "Brand libère un torrent de flammes, infligeant des dégâts magiques à chaque rebond (5 rebonds max). Les rebonds visent en priorité les champions affectés par Flammes mais qui n'ont pas atteint le nombre d'effets max. Si une cible est en flammes, Pyrolyse la ralentit brièvement.",
          tooltip:
            "Brand libère un torrent de flammes, infligeant <magicDamage>{{ totaldamage }} pts de dégâts magiques</magicDamage> à chaque rebond (5 rebonds max). Les rebonds visent en priorité les champions affectés par Flammes mais qui n'ont pas atteint le nombre d'effets max.<br /><br /><span class=\"colorDDDD77\">Flammes :</span> si la cible est en flammes, Pyrolyse la ralentit brièvement de {{ slowamount }}%.",
          leveltip: {
            label: [
              "Dégâts par rebond",
              "Ralentissement",
              "Délai de récupération",
            ],
            effect: [
              "{{ basedamage }} -> {{ basedamageNL }}",
              "{{ slowamount }}% -> {{ slowamountNL }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [105, 90, 75],
          cooldownBurn: "105/90/75",
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
          range: [750, 750, 750],
          rangeBurn: "750",
          image: {
            full: "BrandR.png",
            sprite: "spell1.png",
            group: "spell",
            x: 432,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
      ],
      passive: {
        name: "Flammes",
        description:
          "Les compétences de Brand enflamment ses cibles, leur infligeant des dégâts en 4 sec (cumulable 3 fois). Si Brand tue un ennemi en flammes, il récupère du mana. Quand Flammes atteint son maximum d'effets cumulés sur un champion ou un grand monstre, Flammes devient instable et explose au bout de 2 sec, infligeant les effets de sort et d'énormes dégâts autour de la victime.",
        image: {
          full: "BrandP.png",
          sprite: "passive0.png",
          group: "passive",
          x: 144,
          y: 48,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Brand",
          title: "Beginner",
          type: "riot",
          map: "SR",
          mode: "INTRO",
          priority: false,
          blocks: [
            {
              type: "beginner_Starter",
              maxSummonerLevel: 4,
              items: [{ id: "1056", count: 1 }],
            },
            {
              type: "beginner_Starter",
              minSummonerLevel: 5,
              items: [
                { id: "1056", count: 1 },
                { id: "2003", count: 1 },
              ],
            },
            {
              type: "beginner_Advanced",
              recMath: true,
              items: [
                { id: "1028", count: 1 },
                { id: "1027", count: 1 },
                { id: "3010", count: 1 },
              ],
            },
            {
              type: "beginner_MovementSpeed",
              recMath: true,
              items: [
                { id: "1001", count: 1 },
                { id: "3020", count: 1 },
              ],
            },
            {
              type: "beginner_LegendaryItem",
              recMath: true,
              items: [
                { id: "3010", count: 1 },
                { id: "1026", count: 1 },
                { id: "3027", count: 1 },
              ],
            },
            {
              type: "beginner_MoreLegendaryItems",
              items: [
                { id: "3151", count: 1 },
                { id: "3174", count: 1 },
                { id: "3116", count: 1 },
                { id: "3089", count: 1 },
              ],
            },
          ],
        },
        {
          champion: "Brand",
          title: "BrandARAM",
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3102", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Brand",
          title: "BrandFIRSTBLOOD",
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
                { id: "3136", count: 1, hideCount: false },
                { id: "1058", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
              items: [
                { id: "3165", count: 1, hideCount: false },
                { id: "3174", count: 1, hideCount: false },
                { id: "3285", count: 1, hideCount: false },
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
          champion: "Brand",
          title: "BrandARAM",
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
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
                { id: "3102", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Brand",
          title: "BrandSL",
          map: "NB",
          mode: "NEXUSBLITZ",
          type: "riot-mid",
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
                { id: "1026", count: 1, hideCount: false },
                { id: "3802", count: 1, hideCount: false },
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
                { id: "1027", count: 1, hideCount: false },
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
                { id: "4104", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
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
                { id: "3029", count: 1, hideCount: false },
                { id: "3165", count: 1, hideCount: false },
                { id: "3157", count: 1, hideCount: false },
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
          champion: "Brand",
          title: "BrandSR",
          map: "SR",
          mode: "CLASSIC",
          type: "riot-mid",
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
                { id: "1026", count: 1, hideCount: false },
                { id: "3802", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
          champion: "Brand",
          title: "BrandSRSupport",
          map: "SR",
          mode: "CLASSIC",
          type: "riot-support",
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
                { id: "3136", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
              ],
            },
            {
              type: "essential",
              recMath: false,
              recSteps: false,
              minSummonerLevel: -1,
              maxSummonerLevel: -1,
              showIfSummonerSpell: "",
              hideIfSummonerSpell: "ItemSmiteAoE",
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3020", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
                { id: "3916", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
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
                { id: "2031", count: 1, hideCount: true },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
      ],
    },
  },
};
export default Brand ;