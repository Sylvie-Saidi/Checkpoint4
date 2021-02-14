import DrMundo from "./DrMundo";

const DrMundo2 = {
  type: "champion",
  format: "standAloneComplex",
  version: "10.10.3224670",
  data: {
    DrMundo: {
      id: "DrMundo",
      key: "36",
      name: "Dr. Mundo",
      title: "Dément de Zaun",
      image: {
        full: "DrMundo.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48,
      },
      skins: [
        { id: "36000", num: 0, name: "default", chromas: false },
        { id: "36001", num: 1, name: "Dr. Mundo toxique", chromas: false },
        { id: "36002", num: 2, name: "M. Mundoverse", chromas: false },
        { id: "36003", num: 3, name: "Mundo de la bourse", chromas: false },
        { id: "36004", num: 4, name: "Mundo Mundo", chromas: false },
        { id: "36005", num: 5, name: "Mundo bourreau", chromas: false },
        { id: "36006", num: 6, name: "Mundo enragé", chromas: false },
        { id: "36007", num: 7, name: "TPA Mundo", chromas: false },
        { id: "36008", num: 8, name: "Mundo banjoïste", chromas: false },
        { id: "36009", num: 9, name: "Mundo El Macho", chromas: false },
        { id: "36010", num: 10, name: "Mundo prince gelé", chromas: true },
      ],
      lore:
        "Totalement fou, porté sans remords sur l'homicide, horriblement violet, Dr. Mundo est la principale raison pour laquelle les citoyens de Zaun restent calfeutrés chez eux les nuits les plus sombres. Ce monstre monosyllabique semble ne rechercher que la douleur, qu'il s'agisse de l'infliger ou de la recevoir. Brandissant son énorme hachoir comme s'il ne pesait rien, Mundo est tristement célèbre pour avoir capturé et torturé des dizaines de citoyens de Zaun dans le but de les « opérer ». Des opérations qui ne semblent avoir strictement aucun sens... Il est brutal. Il est imprévisible. Il va où il veut. Techniquement, en revanche, il n'est pas vraiment médecin.",
      blurb:
        "Totalement fou, porté sans remords sur l'homicide, horriblement violet, Dr. Mundo est la principale raison pour laquelle les citoyens de Zaun restent calfeutrés chez eux les nuits les plus sombres. Ce monstre monosyllabique semble ne rechercher que la...",
      allytips: [
        "Utiliser Sadisme au bon moment peut pousser les champions ennemis à vous attaquer, même quand ils ne sont pas assez forts pour vous éliminer.",
        "Visage spirituel améliore les soins prodigués par votre ultime et réduit le délai de récupération des capacités.",
        "Couperet souillé est très utile pour tuer les monstres neutres. Au lieu de rentrer à la base, éliminez-les en boucle jusqu'à pouvoir vous soigner avec votre ultime.",
      ],
      enemytips: [
        "Essayez de coordonner vos attaques les plus puissantes avec celles de vos alliés juste après que Dr. Mundo utilise son ultime ; si vous ne parvenez pas à le tuer assez vite, il soignera tous les dégâts qu'il a subis.",
        "Essayez de lancer Embrasement quand Dr. Mundo utilise Sadisme pour annuler une bonne partie de ses soins.",
      ],
      tags: ["Fighter", "Tank"],
      partype: "Aucune",
      info: { attack: 5, defense: 7, magic: 6, difficulty: 5 },
      stats: {
        hp: 582.52,
        hpperlevel: 89,
        mp: 0,
        mpperlevel: 0,
        movespeed: 345,
        armor: 36,
        armorperlevel: 3.5,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 125,
        hpregen: 8,
        hpregenperlevel: 0.75,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 61.27,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 2.8,
        attackspeed: 0.721,
      },
      spells: [
        {
          id: "InfectedCleaverMissileCast",
          name: "Couperet souillé",
          description:
            "Dr. Mundo lance son couperet, infligeant des dégâts équivalents à une portion des PV actuels de sa cible et la ralentissant un court moment. Dr. Mundo adore voir souffrir les autres, la moitié du coût en PV lui est donc rendue s'il touche une cible (le coût total est rendu si le coup tue la cible).",
          tooltip:
            "Dr. Mundo lance son couperet, infligeant des dégâts magiques équivalents à {{ e2 }}% des PV actuels de la cible (minimum : {{ e1 }}) et ralentissant la cible de {{ e4 }}% pendant {{ e5 }} sec.<br /><br />Si le couperet touche un ennemi, Dr. Mundo récupère {{ f1 }} PV ({{ f2 }} s'il le tue).<br /><br /><rules>Couperet souillé n'inflige pas plus de {{ e6 }} pts de dégâts aux monstres.</rules>",
          leveltip: {
            label: [
              "Dégâts",
              "Dégâts minimum",
              "Dégâts max aux monstres",
              "Coût",
            ],
            effect: [
              "{{ effect2amount*100.000000 }}% -> {{ effect2amountnl*100.000000 }}%",
              "{{ e1 }} -> {{ e1NL }}",
              "{{ e6 }} -> {{ e6NL }}",
              "{{ e3 }} -> {{ e3NL }}",
            ],
          },
          maxrank: 5,
          cooldown: [4, 4, 4, 4, 4],
          cooldownBurn: "4",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [80, 130, 180, 230, 280],
            [20, 22.5, 25, 27.5, 30],
            [50, 60, 70, 80, 90],
            [40, 40, 40, 40, 40],
            [2, 2, 2, 2, 2],
            [300, 350, 400, 450, 500],
            [0.4, 0.4, 0.4, 0.4, 0.4],
            [0.8, 0.8, 0.8, 0.8, 0.8],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "80/130/180/230/280",
            "20/22.5/25/27.5/30",
            "50/60/70/80/90",
            "40",
            "2",
            "300/350/400/450/500",
            "0.4",
            "0.8",
            "0",
            "0",
          ],
          vars: [],
          costType: " PV",
          maxammo: "-1",
          range: [975, 975, 975, 975, 975],
          rangeBurn: "975",
          image: {
            full: "InfectedCleaverMissileCast.png",
            sprite: "spell2.png",
            group: "spell",
            x: 288,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ e3 }} PV",
        },
        {
          id: "BurningAgony",
          name: "Agonie de flammes",
          description:
            "Dr. Mundo draine ses PV pour infliger des dégâts continus aux ennemis proches et réduire la durée des entraves.",
          tooltip:
            "<spellActive>Activable/Désactivable :</spellActive> Dr. Mundo prend feu, infligeant chaque seconde {{ damagepersecond }} <scaleAP>(+{{ a1 }})</scaleAP> pts de dégâts magiques aux ennemis proches.<br /><br />Pendant qu'il est en feu, la durée des entraves qui l'affectent est réduite de {{ e5 }}%.",
          leveltip: {
            label: ["Dégâts", "Coût"],
            effect: ["{{ e1 }} -> {{ e1NL }}", "{{ e2 }} -> {{ e2NL }}"],
          },
          maxrank: 5,
          cooldown: [4, 4, 4, 4, 4],
          cooldownBurn: "4",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [40, 55, 70, 85, 100],
            [10, 15, 20, 25, 30],
            [2, 2, 2, 2, 2],
            [325, 325, 325, 325, 325],
            [30, 30, 30, 30, 30],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [
            null,
            "40/55/70/85/100",
            "10/15/20/25/30",
            "2",
            "325",
            "30",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [{ link: "spelldamage", coeff: 0.2, key: "a1" }],
          costType: " PV par seconde",
          maxammo: "-1",
          range: [325, 325, 325, 325, 325],
          rangeBurn: "325",
          image: {
            full: "BurningAgony.png",
            sprite: "spell2.png",
            group: "spell",
            x: 336,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ e2 }} PV par seconde",
        },
        {
          id: "Masochism",
          name: "Masochisme",
          description:
            "Dr. Mundo augmente ses dégâts d'attaque selon ses PV manquants, et sa prochaine attaque de base sera un coup de tête qui infligera des dégâts supplémentaires. Augmente passivement la résistance magique de Dr. Mundo quand il subit des dégâts magiques ou quand il paie un coût en PV.",
          tooltip:
            "<spellPassive>Passive :</spellPassive> quand Dr. Mundo subit des dégâts magiques ou quand il paie un coût en PV, sa résistance magique augmente de {{ e8 }}% pendant {{ e0 }} sec, jusqu'à un bonus maximum de +{{ e9 }}%.<br /><br /><spellActive>Active :</spellActive> lors de sa prochaine attaque de base, Dr. Mundo donnera un coup de tête à l'ennemi, infligeant <scaleHealth>{{ f1 }}</scaleHealth> pts de dégâts physiques supplémentaires ({{ e1 }}% de ses PV max) et perdant {{ e2 }} PV au passage.<br /><br />À l'activation, Dr. Mundo gagne jusqu'à {{ e4 }} dégâts d'attaque (minimum : {{ e5 }}) pendant {{ e6 }} sec, selon ses PV manquants.<br /><br /><rules>En plus du bonus minimum, Masochisme octroie {{ f2 }} dégâts d'attaque tous les 1% de PV qu'il manque à Dr. Mundo (<scaleHealth>{{ f5 }}</scaleHealth>).</rules>",
          leveltip: {
            label: [
              "Dégâts du coup de tête",
              "Coût du coup de tête",
              "Dégâts d'attaque maximum",
              "Dégâts d'attaque minimum",
              "Résistance magique maximum",
              "Délai de récupération",
            ],
            effect: [
              "{{ effect1amount*100.000000 }}% -> {{ effect1amountnl*100.000000 }}%",
              "{{ e2 }} -> {{ e2NL }}",
              "{{ e4 }} -> {{ e4NL }}",
              "{{ e5 }} -> {{ e5NL }}",
              "{{ effect9amount*100.000000 }}% -> {{ effect9amountnl*100.000000 }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 5,
          cooldown: [6, 5.5, 5, 4.5, 4],
          cooldownBurn: "6/5.5/5/4.5/4",
          cost: [0, 0, 0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [3, 3.5, 4, 4.5, 5],
            [25, 35, 45, 55, 65],
            [25, 25, 25, 25, 25],
            [60, 90, 120, 150, 180],
            [40, 55, 70, 85, 100],
            [5, 5, 5, 5, 5],
            [0, 0, 0, 0, 0],
            [3, 3, 3, 3, 3],
            [6, 15, 24, 33, 42],
            [2, 2, 2, 2, 2],
          ],
          effectBurn: [
            null,
            "3/3.5/4/4.5/5",
            "25/35/45/55/65",
            "25",
            "60/90/120/150/180",
            "40/55/70/85/100",
            "5",
            "0",
            "3",
            "6/15/24/33/42",
            "2",
          ],
          vars: [],
          costType: "Pas de coût",
          maxammo: "-1",
          range: [300, 300, 300, 300, 300],
          rangeBurn: "300",
          image: {
            full: "Masochism.png",
            sprite: "spell2.png",
            group: "spell",
            x: 384,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "Pas de coût",
        },
        {
          id: "Sadism",
          name: "Sadisme",
          description:
            "Dr. Mundo sacrifie une partie de ses PV pour améliorer sa vitesse de déplacement et augmenter nettement la régénération de ses PV.",
          tooltip:
            "Dr. Mundo régénère <scaleHealth>{{ f1 }}</scaleHealth> PV ({{ e1 }}% de ses PV max) en {{ e2 }} sec et augmente sa vitesse de déplacement de {{ e3 }}% pendant la durée de l'effet.",
          leveltip: {
            label: [
              "Régénération",
              "Vitesse de déplacement",
              "Délai de récupération",
            ],
            effect: [
              "{{ e1 }}% -> {{ e1NL }}%",
              "{{ e3 }}% -> {{ e3NL }}%",
              "{{ cooldown }} -> {{ cooldownNL }}",
            ],
          },
          maxrank: 3,
          cooldown: [110, 100, 90],
          cooldownBurn: "110/100/90",
          cost: [0, 0, 0],
          costBurn: "0",
          datavalues: {},
          effect: [
            null,
            [50, 75, 100],
            [12, 12, 12],
            [15, 25, 35],
            [25, 25, 25],
            [0.015, 0.015, 0.015],
            [5, 5, 5],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [
            null,
            "50/75/100",
            "12",
            "15/25/35",
            "25",
            "0.01",
            "5",
            "0",
            "0",
            "0",
            "0",
          ],
          vars: [],
          costType: "% des PV actuels",
          maxammo: "-1",
          range: [20, 20, 20],
          rangeBurn: "20",
          image: {
            full: "Sadism.png",
            sprite: "spell2.png",
            group: "spell",
            x: 432,
            y: 96,
            w: 48,
            h: 48,
          },
          resource: "{{ e4 }}% des PV actuels",
        },
      ],
      passive: {
        name: "Poussée d'adrénaline",
        description: "Dr. Mundo régénère 0,3% de ses PV max chaque seconde.",
        image: {
          full: "DrMundo_Passive.png",
          sprite: "passive0.png",
          group: "passive",
          x: 144,
          y: 96,
          w: 48,
          h: 48,
        },
      },
      recommended: [
        {
          champion: "DrMundo",
          title: "DrMundoARAM",
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
                { id: "3009", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
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
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2138", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "DrMundo",
          title: "DrMundoFIRSTBLOOD",
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
                { id: "1041", count: 1, hideCount: false },
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
                { id: "3068", count: 1, hideCount: false },
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
                { id: "3151", count: 1, hideCount: false },
                { id: "3022", count: 1, hideCount: false },
                { id: "3091", count: 1, hideCount: false },
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
                { id: "3075", count: 1, hideCount: false },
                { id: "3083", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2043", count: 1, hideCount: false },
                { id: "2138", count: 1, hideCount: false },
                { id: "3361", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "DrMundo",
          title: "DrMundoARAM",
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
                { id: "3009", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
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
                { id: "3742", count: 1, hideCount: false },
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
                { id: "3143", count: 1, hideCount: false },
                { id: "3109", count: 1, hideCount: false },
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
                { id: "2003", count: 1, hideCount: false },
                { id: "2138", count: 1, hideCount: false },
              ],
            },
          ],
        },
        {
          champion: "DrMundo",
          title: "DrMundoSL",
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
                { id: "4201", count: 1, hideCount: false },
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
                { id: "3211", count: 1, hideCount: false },
                { id: "3751", count: 1, hideCount: false },
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
                { id: "3751", count: 1, hideCount: false },
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
                { id: "3009", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
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
                { id: "3009", count: 1, hideCount: false },
                { id: "4103", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3742", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "4401", count: 1, hideCount: false },
                { id: "3083", count: 1, hideCount: false },
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
          champion: "DrMundo",
          title: "DrMundoSR",
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
                { id: "1041", count: 1, hideCount: false },
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
                { id: "3211", count: 1, hideCount: false },
                { id: "3751", count: 1, hideCount: false },
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
                { id: "3751", count: 1, hideCount: false },
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
                { id: "3009", count: 1, hideCount: false },
                { id: "3065", count: 1, hideCount: false },
                { id: "3068", count: 1, hideCount: false },
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
                { id: "3009", count: 1, hideCount: false },
                { id: "1413", count: 1, hideCount: false },
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
              appendAfterSection: "",
              visibleWithAllOf: [""],
              hiddenWithAnyOf: [""],
              items: [
                { id: "3742", count: 1, hideCount: false },
                { id: "3075", count: 1, hideCount: false },
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
                { id: "3083", count: 1, hideCount: false },
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
      ],
    },
  },
};
export default DrMundo2 ;