import Malzahar from "./Malzahar";

const Malzahar2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    Malzahar: {
      id: "Malzahar",
      key: "90",
      name: "Malzahar",
      title: "Prophète du Néant",
      image: {
        full: "Malzahar.png",
        sprite: "champion2.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "90000", num: 0, name: "default", chromas: false },
        { id: "90001", num: 1, name: "Malzahar vizir", chromas: false },
        {
          id: "90002",
          num: 2,
          name: "Malzahar prince des ténèbres",
          chromas: false,
        },
        { id: "90003", num: 3, name: "Malzahar djinn", chromas: false },
        { id: "90004", num: 4, name: "Malzahar tout-puissant", chromas: false },
        { id: "90005", num: 5, name: "Malzahar des neiges", chromas: true },
        {
          id: "90006",
          num: 6,
          name: "Malzahar boss de combat",
          chromas: false,
        },
        { id: "90007", num: 7, name: "Malzahar Hextech", chromas: false },
        { id: "90009", num: 9, name: "Malzahar brise-monde", chromas: true },
      ],
      lore:
        "Voyant fanatique ayant dédié son existence à l'unification de toute forme de vie, Malzahar croit fermement que le Néant est la voie du salut de Runeterra. Dans les étendues désertiques de Shurima, il suivit les voix qui murmuraient dans son esprit jusqu'à l'antique cité d'Icathia. Au plus profond des ruines, il plongea le regard dans le cœur noir du Néant et reçut de nouveaux pouvoirs, un nouveau but. Malzahar se considère désormais comme un berger : sa tâche est d'unir ses semblables… ou de libérer les créatures du Néant qui vivent sous terre.",
      blurb:
        "Voyant fanatique ayant dédié son existence à l'unification de toute forme de vie, Malzahar croit fermement que le Néant est la voie du salut de Runeterra. Dans les étendues désertiques de Shurima, il suivit les voix qui murmuraient dans son esprit...",
      allytips: [
        "Avant de lancer Nuée du Néant, attendez qu'il y ait des ennemis à proximité afin que l'être du Néant puisse attaquer ou tuer quelqu'un.",
        "Utilisez Appel du Néant et Poigne du Néant pour renouveler la durée des Visions maléfiques affectant les ennemis.",
        "Sur votre voie, évitez les dégâts pour profiter un maximum de Plan du Néant et ainsi grandement augmenter la sécurité de Malzahar.",
      ],
      enemytips: [
        "Quand Malzahar lance un sort sur des ennemis affectés par Visions maléfiques, les visions sont renouvelées.",
        "Restez loin des sbires touchés par Visions maléfiques, car s'ils meurent, ils risquent de vous transmettre leurs visions.",
        "Malzahar est particulièrement dangereux s'il a le temps de former une Nuée du Néant.",
      ],
      tags: ["Mage", "Assassin"],
      partype: "Mana",
      info: { attack: 2, defense: 2, magic: 9, difficulty: 6 },
      stats: {
        hp: 537,
        hpperlevel: 87,
        mp: 375,
        mpperlevel: 27.5,
        movespeed: 335,
        armor: 18,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0.5,
        attackrange: 500,
        hpregen: 6,
        hpregenperlevel: 0.6,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 55,
        attackdamageperlevel: 3,
        attackspeedperlevel: 1.5,
        attackspeed: 0.625,
      },
      spells: [
        {
          id: "MalzaharQ",
          name: "Appel du Néant",
          description:
            "Malzahar ouvre deux portails vers le Néant. Après un court délai, ils tirent des projectiles qui infligent des dégâts magiques et réduisent les champions ennemis au silence.",
          tooltip:
            "Malzahar ouvre deux portails vers le Néant qui tirent des projectiles l'un vers l'autre, infligeant {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques et réduisant les ennemis touchés au silence pendant {{ e2 }} sec.",
          leveltip: {
            label: ["Dégâts", "Durée du silence"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e2 }} -> {{ e2NL }}"],
          },
          maxrank: 5,
          cooldown: [6, 6, 6, 6, 6],
          cooldownBurn: "6",
          cost: [80, 80, 80, 80, 80],
          costBurn: "80",
          datavalues: {},
          effect: [
            null,
            [70, 105, 140, 175, 210],
            [1, 1.25, 1.5, 1.75, 2],
            [0.4, 0.4, 0.4, 0.4, 0.4],
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
            "70/105/140/175/210",
            "1/1.25/1.5/1.75/2",
            "0.4",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.65, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [900, 900, 900, 900, 900],
          rangeBurn: "900",
          image: {
            full: "MalzaharQ.png",
            sprite: "spell7.png",
            group: "spell",
            x: 0,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "MalzaharW",
          name: "Nuée du Néant",
          description:
            "Malzahar invoque des êtres du Néant qui attaquent les ennemis proches.",
          tooltip:
            "<scaleAD>Passive :</scaleAD> quand il lance ses autres sorts, Malzahar gagne une Nuée de Zz'Rot, ce qui augmente le nombre d'êtres du Néant invoqués par Nuée du Néant (max : {{ e6 }}).<br /><br /><scaleAD>Active :</scaleAD> invoque un ou plusieurs êtres du Néant. Les êtres du Néant durent {{ e1 }} sec et infligent {{ e2 }} <scaleAP>(+{{ a1 }})</scaleAP> <scaleAD>(+{{ a2 }})</scaleAD> pts de dégâts magiques supplémentaires par coup.<br /><br /><span class=\"color919191\"><i>Les êtres du Néant infligent {{ e3 }}% de dégâts aux sbires affectés par Visions maléfiques.<br />Les êtres du Néant infligent {{ e4 }}% de dégâts aux monstres épiques.</i></span>",
          leveltip: {
            label: [
              "Dégâts supplémentaires des êtres du Néant",
              "Durée des êtres du Néant",
              "Coût en @AbilityResourceName@",
            ],
            effect: [
              "{{ e2 }} -> {{ e2NL }}",
              "{{ e1 }} -> {{ e1NL }}",
              "{{ cost }} -> {{ costNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [8, 8, 8, 8, 8],
          cooldownBurn: "8",
          cost: [40, 45, 50, 55, 60],
          costBurn: "40/45/50/55/60",
          datavalues: {},
          effect: [
            null,
            [8, 8, 9, 9, 10],
            [12, 14, 16, 18, 20],
            [300, 300, 300, 300, 300],
            [50, 50, 50, 50, 50],
            [25000, 25000, 25000, 25000, 25000],
            [2, 2, 2, 2, 2],
            [0.5, 0.5, 0.5, 0.5, 0.5],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "8/8/9/9/10",
            "12/14/16/18/20",
            "300",
            "50",
            "25000",
            "2",
            "0.5",
            "0",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.2, key: "a1" },
            { link: "bonusattackdamage", coeff: 0.4, key: "a2" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "0",
          range: [150, 150, 150, 150, 150],
          rangeBurn: "150",
          image: {
            full: "MalzaharW.png",
            sprite: "spell7.png",
            group: "spell",
            x: 48,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "MalzaharE",
          name: "Visions maléfiques",
          description:
            "Malzahar tourmente sa cible avec des visions de sa mort, infligeant des dégâts sur la durée. Utiliser les autres sorts de Malzahar sur la cible renouvelle les visions.<br><br>Si la cible meurt en étant affectée par cet effet, les visions sont transmises à une unité ennemie proche et Malzahar regagne du mana. Les êtres du Néant de Malzahar sont attirés par les cibles ainsi affectées.",
          tooltip:
            "Inflige {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques à une cible ennemie en {{ e3 }} sec. Pendant cette durée, appliquer Appel du Néant ou Poigne du Néant sur la victime renouvelle les visions.<br /><br />Si la victime est tuée, Malzahar regagne <scaleMana>{{ f1 }}</scaleMana> pts de mana ({{ e5 }}% de son mana max) et les visions sont transmises à l'ennemi le plus proche.",
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
          cooldown: [15, 13, 11, 9, 7],
          cooldownBurn: "15/13/11/9/7",
          cost: [60, 70, 80, 90, 100],
          costBurn: "60/70/80/90/100",
          datavalues: {},
          effect: [
            null,
            [80, 115, 150, 185, 220],
            [8, 8, 8, 8, 8],
            [4, 4, 4, 4, 4],
            [8, 8, 8, 8, 8],
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/115/150/185/220",
            "8",
            "4",
            "8",
            "2",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.8, key: "a1" }],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [650, 650, 650, 650, 650],
          rangeBurn: "650",
          image: {
            full: "MalzaharE.png",
            sprite: "spell7.png",
            group: "spell",
            x: 96,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: "{{ cost }} {{ abilityresourcename }}",
        },
        {
          id: "MalzaharR",
          name: "Poigne du Néant",
          description:
            "Malzahar canalise l'essence du Néant pour neutraliser un champion ennemi dans une zone d'énergie négative infligeant des dégâts.",
          tooltip:
            "Malzahar neutralise le champion ciblé pendant {{ e4 }} sec, infligeant {{ e7 }} <scaleAP>(+{{ a2 }})</scaleAP> pts de dégâts magiques sur la durée. Une zone d'énergie négative est créée autour de sa cible pendant {{ e3 }} sec, infligeant aux ennemis proches des dégâts magiques équivalents à {{ e1 }}% <scaleAP>(+{{ a1 }}%)</scaleAP> de leurs PV max chaque seconde.",
          leveltip: {
            label: [
              "Dégâts de Poigne du Néant",
              "Dégâts de la zone d'énergie négative",
              "Délai de récupération",
            ],
            effect: [
              "{{ e7 }} -> {{ e7NL }}",
              "{{ e1 }}% -> {{ e1NL }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [140, 110, 80],
          cooldownBurn: "140/110/80",
          cost: [100, 100, 100],
          costBurn: "100",
          datavalues: {},
          effect: [
            null,
            [2, 3, 4],
            [120, 100, 80],
            [5, 5, 5],
            [2.5, 2.5, 2.5],
            [120, 120, 120],
            [10, 10, 10],
            [125, 200, 275],
            [1250, 1250, 1250],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "2/3/4",
            "120/100/80",
            "5",
            "2.5",
            "120",
            "10",
            "125/200/275",
            "1250",
            "0",
            "0",
          ],
          vars: [
            { link: "spelldamage", coeff: 0.8, key: "a2" },
            { link: "spelldamage", coeff: 0.005, key: "a1" },
          ],
          costType: " {{ abilityresourcename }}",
          maxammo: "-1",
          range: [700, 700, 700],
          rangeBurn: "700",
          image: {
            full: "MalzaharR.png",
            sprite: "spell7.png",
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
        name: "Plan du Néant",
        description:
          "Quand il ne subit pas de dégâts ou de contrôle de foule pendant un temps, Malzahar gagne une énorme réduction des dégâts et devient insensible aux contrôles de foule. Cet effet perdure pendant un court instant après avoir subi des dégâts.<br><br>Les dégâts des sbires ne sont pas affectés.",
        image: {
          full: "Malzahar_Passive.png",
          sprite: "passive2.png",
          group: "passive",
          x: 432,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "Malzahar",
          title: "MalzaharARAM",
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
                { id: "3802", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Malzahar",
          title: "MalzaharARAM",
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
                { id: "3802", count: 1, hideCount: false },
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
                { id: "3285", count: 1, hideCount: false },
                { id: "3020", count: 1, hideCount: false },
                { id: "3151", count: 1, hideCount: false },
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
                { id: "3116", count: 1, hideCount: false },
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
                { id: "2033", count: 1, hideCount: false },
                { id: "2139", count: 1, hideCount: true },
              ],
            },
          ],
        },
        {
          champion: "Malzahar",
          title: "MalzaharSL",
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
                { id: "3802", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
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
                { id: "4104", count: 1, hideCount: false },
                { id: "3116", count: 1, hideCount: false },
                { id: "3158", count: 1, hideCount: false },
              ],
            },
            {
              type: "standard",
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3135", count: 1, hideCount: false },
                { id: "3907", count: 1, hideCount: false },
              ],
            },
            {
              type: "situational",
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
                { id: "3157", count: 1, hideCount: false },
                { id: "3102", count: 1, hideCount: false },
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
          champion: "Malzahar",
          title: "MalzaharSR",
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
                { id: "2003", count: 3, hideCount: false },
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
                { id: "3802", count: 1, hideCount: false },
                { id: "1026", count: 1, hideCount: false },
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
                { id: "3715", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
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
                { id: "3158", count: 1, hideCount: false },
                { id: "1414", count: 1, hideCount: false },
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
                { id: "3907", count: 1, hideCount: false },
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
                { id: "3102", count: 1, hideCount: false },
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
      ],
    },
  },
};
export default Malzahar2;