

import { World, MindMapNode, InfographicPoint, Mission, CourseStep } from '../types';

// --- MIND MAP DATA ---
export const algebraMindMap: MindMapNode = {
  id: "root",
  name: "El Grimorio del Álgebra",
  icon: "📘",
  color: "yellow",
  description: "La estructura fundamental de las matemáticas modernas.",
  details: "El Álgebra no es solo matemáticas; es el lenguaje de la creación en Mathoria. A diferencia de la aritmética simple que solo maneja números fijos, el Álgebra nos permite razonar sobre lo desconocido. \n\n**¿Por qué es importante?** \nNos permite crear fórmulas que funcionan para CUALQUIER número. Es la herramienta que usan los arquitectos para construir torres, los alquimistas para mezclar pociones y los guerreros para calcular la trayectoria de sus flechas. En este grimorio, descubrirás los pilares que sostienen esta realidad.",
  children: [
    { 
      id: "c1", name: "Lenguaje Algebraico", icon: "🗣️", color: "emerald",
      description: "La gramática de los dioses matemáticos.",
      details: "Dominar el lenguaje algebraico es como aprender a leer runas. Nos permite traducir problemas del mundo real (lenguaje común) a una forma que la lógica pura pueda resolver. \n\n**Conceptos Fundamentales:** \n1. **Traducción:** Pasar de 'el doble de una edad' a '2x'. \n2. **Abstracción:** Dejar de pensar en manzanas y peras para pensar en cantidades abstractas 'a' y 'b'. \n3. **Modelado:** Crear representaciones de situaciones complejas para predecir resultados.",
      children: [
        { 
          id: "c1-1", name: "Variables", icon: "x", color: "emerald",
          details: "Las variables son 'contenedores' mágicos. En su interior pueden albergar cualquier número. \n\n**Reglas de la Variable:** \n- Se representan comúnmente con letras (x, y, z, a, b, c). \n- Una variable puede representar un valor que cambia (como la velocidad de un dragón) o un valor que desconocemos y queremos encontrar (una incógnita). \n- **Tip del Mago:** Siempre que veas una letra en un hechizo algebraico, pregúntate: '¿Qué número podría estar escondido aquí?'"
        },
        { 
          id: "c1-2", name: "Constantes", icon: "5", color: "emerald",
          details: "A diferencia de las variables, las constantes son los cimientos inmutables de la realidad. \n\n**Naturaleza:** \n- Son números puros (5, -3, 0.5, π). \n- Su valor es absoluto y nunca cambia, sin importar el contexto del hechizo. \n- En una expresión como '3x + 4', el 4 es la constante que ancla el resultado al mundo físico."
        }
      ] 
    },
    { 
      id: "c2", name: "Aritmética de Poder", icon: "⚡", color: "blue",
      description: "Las leyes que gobiernan el flujo de energía numérica.",
      details: "Para manejar el poder del álgebra sin que te explote en las manos, debes dominar las leyes fundamentales de los signos y las potencias. Aquí es donde muchos aprendices fallan.",
      children: [
        { 
          id: "c2-1", name: "Leyes de Signos", icon: "±", color: "blue",
          details: "Los signos Positivo (+) y Negativo (-) son como la luz y la sombra en Mathoria. Deben estar en equilibrio. \n\n**Para Suma y Resta:** \n- Signos iguales: ¡Se unen! Suma los valores y mantén el signo. \n- Signos diferentes: ¡Combaten! Resta el menor del mayor y quédate con el signo del más poderoso (el de mayor valor absoluto). \n\n**Para Multiplicación y División:** \n- Amigos (+) x (+) = (+) \n- Enemigos (-) x (-) = (+) (¡Menos por menos es más!) \n- Conflicto (+) x (-) = (-) o (-) x (+) = (-)"
        },
        { 
          id: "c2-2", name: "Exponentes", icon: "x²", color: "blue",
          details: "El exponente es el multiplicador de intensidad. Indica cuántas veces una base se multiplica por sí misma. \n\n**Leyes de los Exponentes:** \n1. **Producto:** xᵃ * xᵇ = xᵃ⁺ᵇ (Si las bases son iguales, los poderes se suman). \n2. **Cociente:** xᵃ / xᵇ = xᵃ⁻ᵇ (En la división, los poderes se restan). \n3. **Potencia de Potencia:** (xᵃ)ᵇ = xᵃ*ᵇ (Los poderes se multiplican). \n4. **La Ley del Cero:** Todo guerrero sabe que x⁰ = 1 (excepto si x es 0)."
        }
      ] 
    },
    { 
      id: "c3", name: "Polinomios", icon: "⚔️", color: "orange",
      description: "La organización de los ejércitos de términos.",
      details: "Un polinomio es una cadena de términos algebraicos unidos por sumas y restas. Son como formaciones de combate: cada término tiene su lugar y su rango (grado).",
      children: [
        { 
          id: "c3-1", name: "Suma y Resta", icon: "➕", color: "orange",
          details: "Solo puedes sumar o restar términos que sean 'hermanos de sangre', es decir, **Términos Semejantes**. \n\n**¿Qué los hace semejantes?** \nDeben tener exactamente las mismas letras y los mismos exponentes. \n- 3x² y 5x² son semejantes. \n- 3x y 3x² NO lo son. \n\n**Técnica:** Agrupa los coeficientes de los términos semejantes y deja la parte literal (las letras) intacta."
        },
        { 
          id: "c3-2", name: "Multiplicación", icon: "✖️", color: "orange",
          details: "Al multiplicar polinomios, cada término del primer grupo debe 'atacar' a cada término del segundo grupo. \n\n**Propiedad Distributiva:** \na(b + c) = ab + ac. \nEs fundamental recordar que al multiplicar variables iguales, sus exponentes se suman (Aritmética de Poder). ¡No dejes a ningún término sin su pareja!"
        }
      ] 
    },
    { 
      id: "c4", name: "Ecuaciones", icon: "⚖️", color: "purple",
      description: "El arte de restaurar el equilibrio universal.",
      details: "Una ecuación es una declaración de igualdad perfecta. Es el rompecabezas definitivo donde debemos hallar el valor de la incógnita 'x' para que la balanza no se rompa.",
      children: [
        { 
          id: "c4-1", name: "Lineales de 1er Grado", icon: "➖", color: "purple",
          details: "Son las ecuaciones más puras. La 'x' no tiene poderes extra (exponentes mayores a 1). \n\n**Pasos del Despeje:** \n1. **Limpieza:** Mueve los términos con 'x' a un lado y los números al otro. \n2. **Inversión:** Si un número suma, pasa restando. Si multiplica, pasa dividiendo. \n3. **Resultado:** Al final, 'x' quedará sola y revelará su verdadera identidad numérica."
        },
        { 
          id: "c4-2", name: "Sistemas de Ecuaciones", icon: "🔄", color: "purple",
          details: "Cuando dos o más verdades (ecuaciones) deben cumplirse al mismo tiempo. Es como triangular la posición de un tesoro usando dos mapas distintos. \n\n**Métodos de Resolución:** \n- **Sustitución:** Despeja una variable en una ecuación y métela en la otra. \n- **Reducción:** Suma o resta las ecuaciones para eliminar una variable de un solo golpe. \n- **Igualación:** Despeja la misma variable en ambas y compáralas cara a cara."
        }
      ] 
    }
  ]
};

// --- INFOGRAPHIC DATA ---
export const infographicPoints: InfographicPoint[] = [
  { id: 1, x: 10, y: 85, title: "Valle de las Variables", icon: "🌱", color: "emerald", description: "El inicio del viaje.", details: "Donde los números se vuelven letras. Aquí aprenderás que 'x' puede ser cualquier cosa que imagines." },
  { id: 2, x: 25, y: 70, title: "Fortaleza de Signos", icon: "🏰", color: "red", description: "Controla el positivo y negativo.", details: "La base del equilibrio matemático. Sin dominar los signos, tus cálculos se derrumbarán como un castillo de naipes." },
  { id: 3, x: 15, y: 50, title: "Laboratorio Exponencial", icon: "🧪", color: "indigo", description: "El crecimiento rápido.", details: "Potencias y sus leyes. Aprende cómo pequeños números en la esquina pueden crear fuerzas masivas." },
  { id: 4, x: 40, y: 40, title: "Arena de Polinomios", icon: "⚔️", color: "orange", description: "Batallas de términos.", details: "Suma, resta y clasificación. Organiza tus expresiones algebraicas para el combate final." },
  { id: 5, x: 60, y: 55, title: "Templo de Productos", icon: "🏛️", color: "amber", description: "Arquitectura matemática.", details: "Productos notables y expansión. Descubre los atajos que los antiguos arquitectos usaban para calcular áreas y volúmenes al instante." },
  { id: 6, x: 80, y: 75, title: "Cueva de Factorización", icon: "💎", color: "purple", description: "Descomposición.", details: "Encontrar las raíces de una expresión. Aprende a romper una armadura compleja en sus piezas fundamentales." },
  { id: 7, x: 85, y: 25, title: "Ciudad Ecuación", icon: "⚖️", color: "blue", description: "El equilibrio.", details: "Despeje de incógnitas. Aquí es donde todas las piezas encajan y la verdad es revelada." },
  { id: 8, x: 50, y: 10, title: "Nexo Infinito", icon: "🌌", color: "fuchsia", description: "Sistemas complejos.", details: "Resolución de múltiples variables. El desafío final para aquellos que desean gobernar la lógica de Mathoria." }
];

// --- MISSION GENERATION HELPER ---

const getSpecificStep = (worldId: string, missionIndex: number): CourseStep => {
  const defaultStep: CourseStep = { 
    id: "default", type: "content", title: "En construcción", content: "Contenido próximamente." 
  };

  // --- MUNDO 1: VARIABLES ---
  if (worldId === "w1") {
    const steps: CourseStep[] = [
      { 
        id: "s1", type: "quiz", title: "El Despertar",
        content: "En el álgebra, usamos letras para representar números que no conocemos o que cambian. A estas letras las llamamos **Variables**.",
        theory: "Las variables suelen ser las últimas letras del abecedario (x, y, z) y sirven para generalizar operaciones.",
        quizData: { question: "¿Cuál de estos es una VARIABLE?", options: ["5", "10", "x", "Pi"], correctIndex: 2, explanation: "Las letras como x, y, z representan variables." }
      },
      { 
        id: "s2", type: "minigame", title: "Caza de Símbolos",
        theory: "Una constante es un valor fijo que no cambia durante el problema. Los números solos (5, -3, 100) son constantes.",
        minigameData: {
          instruction: "Identifica las **CONSTANTES** (valores que no cambian):",
          options: [
            { text: "x", isCorrect: false, feedback: "Es una variable." },
            { text: "7", isCorrect: true, feedback: "¡Correcto! 7 siempre vale 7." },
            { text: "y", isCorrect: false, feedback: "Es una variable." }
          ]
        }
      },
      { 
        id: "s3", type: "quiz", title: "El Coeficiente Oculto",
        content: "El número que está pegado a la izquierda de una variable la multiplica. Se llama **Coeficiente**. Si no ves ninguno, es un 1 invisible.",
        theory: "El coeficiente indica cuántas veces se suma la variable. 3x = x + x + x. Si ves 'x', el coeficiente es 1.",
        quizData: { question: "¿Cuál es el coeficiente en '5x'?", options: ["x", "5", "5x", "Ninguno"], correctIndex: 1, explanation: "El 5 multiplica a la x." }
      },
      { 
        id: "s4", type: "alchemy", title: "Forja de Términos", 
        theory: "Un término completo tiene 4 almas: Signo, Coeficiente, Variable y Exponente. ¡Constrúyelo!", 
        alchemyData: { 
            goalMessage: "Forja el término: **-5x²**", 
            correctCombination: ["sign", "coeff", "var", "exp"], 
            ingredients: [
                {id: "sign", label: "-"},
                {id: "coeff", label: "5"},
                {id: "var", label: "x"},
                {id: "exp", label: "²"},
                {id: "fake1", label: "+"},
                {id: "fake2", label: "³"},
            ],
            feedbackSuccess: "¡Término forjado correctamente!",
            feedbackError: "Esa combinación no crea -5x²."
        }
      },
      { 
        id: "s5", type: "memory", title: "Espejos Mágicos",
        theory: "Dos términos son SEMEJANTES si tienen exactamente las mismas letras con los mismos exponentes. El número (coeficiente) no importa.",
        memoryData: {
            pairs: [
                { id: 1, term: "3x", definition: "Término Semejante a -5x" },
                { id: 2, term: "Coeficiente", definition: "El número que multiplica" },
                { id: 3, term: "x²", definition: "Variable al cuadrado" },
                { id: 4, term: "Constante", definition: "Valor fijo (ej: 7)" }
            ]
        }
      },
      { 
        id: "s6", type: "maze", title: "Laberinto de Constantes",
        theory: "Para cruzar este valle, solo puedes pisar las **CONSTANTES** (números solos). Las variables son arenas movedizas.",
        mazeData: {
          instruction: "Cruza pisando solo NÚMEROS:",
          gridSize: 5,
          startIdx: 0,
          endIdx: 24,
          cells: [
            { content: "INICIO", isValid: true }, { content: "5", isValid: true }, { content: "-2", isValid: true }, { content: "x", isValid: false }, { content: "y", isValid: false },
            { content: "z", isValid: false }, { content: "3y", isValid: false }, { content: "10", isValid: true }, { content: "a", isValid: false }, { content: "b", isValid: false },
            { content: "x²", isValid: false }, { content: "2x", isValid: false }, { content: "8", isValid: true }, { content: "42", isValid: true }, { content: "0", isValid: true },
            { content: "3z", isValid: false }, { content: "c", isValid: false }, { content: "n", isValid: false }, { content: "a²", isValid: false }, { content: "1", isValid: true },
            { content: "5x", isValid: false }, { content: "2a", isValid: false }, { content: "7y", isValid: false }, { content: "b³", isValid: false }, { content: "META", isValid: true }
          ],
          feedbackSuccess: "¡Has cruzado el valle constante!",
          feedbackError: "¡Cuidado! Eso es una variable."
        }
      },
      { 
        id: "s7", type: "cryptex", title: "Criptex de Inicio", 
        theory: "Para abrir este sello, debes encontrar el valor numérico de cada letra. x = 2 significa que la x vale 2.",
        cryptexData: {
            instruction: "Descifra el código numérico:",
            wheels: [
                { label: "X", clue: "x = 5", correctValue: 5 },
                { label: "Y", clue: "y = 2 + 1", correctValue: 3 },
                { label: "Z", clue: "z = 10 - 2", correctValue: 8 }
            ],
            feedbackSuccess: "¡Código Aceptado! Entendiste el valor."
        }
      },
      { 
        id: "s8", type: "minigame", title: "Traductor Ancestral",
        theory: "Palabras clave: 'Aumentado' = Suma (+). 'Disminuido' = Resta (-). 'Producto' = Multiplicación (*). 'Cociente' = División (/).",
        minigameData: {
          instruction: "Traduce: **'Un número aumentado en 4'**",
          options: [
            { text: "4x", isCorrect: false, feedback: "Eso es 'cuatro veces un número'." },
            { text: "x - 4", isCorrect: false, feedback: "Eso es 'disminuido'." },
            { text: "x + 4", isCorrect: true, feedback: "¡Bien! Aumentar es sumar." }
          ]
        }
      },
      { 
        id: "s9", type: "quiz", title: "La Igualdad",
        content: "Una **Ecuación** es una igualdad con variables. Es como una balanza equilibrada.",
        theory: "Solo es ecuación si hay un signo '='. Si no tiene igual, es una 'Expresión'.",
        quizData: { question: "¿Cuál es una ecuación?", options: ["x + 2", "x + 2 = 5", "5 + 3 = 8", "x > 5"], correctIndex: 1, explanation: "Tiene variables y un signo igual." }
      },
      { 
        id: "s10", type: "boss", title: "El Guardián X",
        theory: "¡Usa todo lo aprendido! Coeficientes, sustitución y lenguaje algebraico. Recuerda: 'Doble' es multiplicar por 2.",
        bossData: {
          name: "Incógnita Suprema", hp: 100, playerMaxHp: 100, assetId: "skull_lord",
          questions: [
            { q: "Traduce: 'El doble de un número'", options: ["x+2", "x²", "2x", "x/2"], correct: 2, damageToBoss: 30, damageToPlayer: 20 },
            { q: "Si y=5, valora: 3y - 1", options: ["14", "4", "15", "12"], correct: 0, damageToBoss: 30, damageToPlayer: 25 },
            { q: "¿Coeficiente de -x?", options: ["1", "0", "-1", "x"], correct: 2, damageToBoss: 40, damageToPlayer: 30 }
          ]
        }
      }
    ];
    return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 2: SIGNOS ---
  else if (worldId === "w2") {
    const steps: CourseStep[] = [
      { 
        id: "s1", type: "quiz", title: "Más allá del Cero",
        content: "Hasta ahora conocías los números naturales (1, 2, 3...). Pero el mundo se duplica bajo el cero. Los números negativos representan deuda, profundidad o retroceso.",
        theory: "El Cero es el espejo. A la derecha están los positivos (+), a la izquierda los negativos (-).",
        quizData: { 
            question: "¿Qué número representa una deuda de 5 monedas?", 
            options: ["5", "-5", "0", "0.5"], 
            correctIndex: 1, 
            explanation: "Las deudas y pérdidas se representan con números negativos (-)." 
        }
      },
      { 
        id: "s2", type: "minigame", title: "Detector de Polaridad",
        theory: "Los números negativos siempre llevan un guion delante (-). Si un número no tiene signo, es positivo (excepto el 0 que es neutro).",
        minigameData: {
          instruction: "Selecciona solo los números **NEGATIVOS**:",
          options: [
            { text: "5", isCorrect: false, feedback: "Es positivo." },
            { text: "-3", isCorrect: true, feedback: "Correcto, es menor que cero." },
            { text: "0", isCorrect: false, feedback: "El cero es neutro." },
            { text: "-100", isCorrect: true, feedback: "Muy negativo." }
          ]
        }
      },
      { 
        id: "s3", type: "memory", title: "Leyes del Choque",
        theory: "Al MULTIPLICAR o DIVIDIR: Amigos (signos iguales) dan Positivo. Enemigos (signos distintos) dan Negativo.",
        memoryData: {
            pairs: [
                { id: 1, term: "(+) por (+)", definition: "Positivo (+)" },
                { id: 2, term: "(-) por (-)", definition: "Positivo (+)" },
                { id: 3, term: "(+) por (-)", definition: "Negativo (-)" },
                { id: 4, term: "Signos Distintos", definition: "Resultado Negativo" }
            ]
        }
      },
      { 
        id: "s4", type: "quiz", title: "Guerra de Sumas",
        content: "Al sumar números con diferente signo, ocurre una batalla. Se RESTAN sus valores absolutos y gana el signo del número más poderoso (mayor valor absoluto).",
        theory: "Ejemplo: -5 + 8. Gana el 8 (Positivo) por diferencia de 3. Resultado: +3.",
        quizData: { question: "Calcula: -10 + 4", options: ["14", "-14", "-6", "6"], correctIndex: 2, explanation: "Signos distintos se restan (10-4=6). Gana el negativo (-10). Resultado -6." }
      },
      { 
        id: "s5", type: "puzzle", title: "Escalera Térmica",
        theory: "En los negativos, mientras 'más grande' parece el número, más pequeño es su valor real porque está más lejos del cero a la izquierda. -100 es menor que -1.",
        puzzleData: {
            instruction: "Ordena de MENOR (más frío) a MAYOR (más caliente):",
            items: ["-10", "-2", "0", "5"],
            correctOrder: [0, 1, 2, 3], // -10, -2, 0, 5
            feedback: "¡Orden correcto! Recuerda: -10 es más pequeño que -2."
        }
      },
      { 
        id: "s6", type: "alchemy", title: "Equilibrio Cero",
        theory: "Para destruir un número, debes sumar su OPUESTO. El opuesto de 5 es -5. Juntos crean la nada (Cero).",
        alchemyData: { 
            goalMessage: "Crea el Cero Absoluto (0) combinando opuestos.", 
            correctCombination: ["pos", "neg"], //IDs
            ingredients: [
                {id: "pos", label: "3"},
                {id: "neg", label: "-3"},
                {id: "wrong1", label: "0"},
                {id: "wrong2", label: "4"},
                {id: "wrong3", label: "-2"},
            ],
            feedbackSuccess: "¡Anulación exitosa! 3 + (-3) = 0",
            feedbackError: "Esos números no se cancelan entre sí."
        }
      },
      { 
        id: "s7", type: "maze", title: "Camino Positivo",
        theory: "¡Cuidado! Multiplicar un negativo por otro negativo crea un positivo. Pero multiplicar un positivo por un negativo crea un agujero negro (negativo).",
        mazeData: {
          instruction: "Avanza solo por casillas cuyo resultado sea **POSITIVO (+)**:",
          gridSize: 4,
          startIdx: 0,
          endIdx: 15,
          cells: [
            { content: "INICIO", isValid: true }, { content: "(-2)*(-2)", isValid: true }, { content: "-5 * 1", isValid: false }, { content: "-1 * 4", isValid: false },
            { content: "-8 + 2", isValid: false }, { content: "10 / 2", isValid: true }, { content: "-3 * -3", isValid: true }, { content: "-2 + -2", isValid: false },
            { content: "0 - 5", isValid: false }, { content: "4 + 4", isValid: true }, { content: "-10 / 5", isValid: false }, { content: "-1 * -1", isValid: true },
            { content: "-9 + 1", isValid: false }, { content: "(-5)²", isValid: true }, { content: "20 - 10", isValid: true }, { content: "META", isValid: true }
          ],
          feedbackSuccess: "¡Has sobrevivido a la negatividad!",
          feedbackError: "Caíste en un resultado negativo."
        }
      },
      { 
        id: "s8", type: "cryptex", title: "Criptex Negativo",
        theory: "Resuelve las operaciones para obtener el código. Recuerda: |-5| es valor absoluto (siempre positivo).",
        cryptexData: {
            instruction: "Calcula los valores (X, Y, Z):",
            wheels: [
                { label: "X", clue: "x = (-2) * (-3)", correctValue: 6 },
                { label: "Y", clue: "y = 10 + (-8)", correctValue: 2 },
                { label: "Z", clue: "z = |-5|", correctValue: 5 } // Absolute value is 5
            ],
            feedbackSuccess: "¡Sello roto! Dominas los signos."
        }
      },
      { 
        id: "s9", type: "minigame", title: "Reflejos de División",
        theory: "La ley de signos en división es idéntica a la multiplicación. (-) / (-) = (+).",
        minigameData: {
          instruction: "Selecciona las operaciones correctas:",
          options: [
            { text: "-10 / -2 = 5", isCorrect: true, feedback: "Correcto. Menos entre menos es más." },
            { text: "-20 / 2 = 10", isCorrect: false, feedback: "Error. Debería ser -10." },
            { text: "15 / -3 = -5", isCorrect: true, feedback: "Bien. Más entre menos es menos." }
          ]
        }
      },
      { 
        id: "s10", type: "boss", title: "El Golem Polar",
        theory: "¡Prepárate! Este guardián cambia de polaridad. Usa paréntesis mentalmente: -(-5) se convierte en +5. ¡No falles en el signo!",
        bossData: {
          name: "Golem de Hielo y Fuego", hp: 120, playerMaxHp: 100, assetId: "golem",
          questions: [
            { q: "Resuelve: -5 - (-5)", options: ["-10", "0", "10", "-25"], correct: 1, damageToBoss: 40, damageToPlayer: 20 },
            { q: "Calcula: (-3) * 4 * (-2)", options: ["-24", "12", "24", "-12"], correct: 2, damageToBoss: 40, damageToPlayer: 25 }, // 24 positive
            { q: "¿Cuál es mayor?", options: ["-100", "-1", "0", "-50"], correct: 2, damageToBoss: 40, damageToPlayer: 30 } // 0 is larger than negatives
          ]
        }
      }
    ];
    return steps[missionIndex] || defaultStep;
  }
  
  // --- MUNDO 3: EXPONENTES ---
  else if (worldId === "w3") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "El Multiplicador Sagrado",
          content: "Un exponente es un pequeño número flotante que indica cuántas veces multiplicas la base por sí misma. x³ = x·x·x.", theory: "Base: el número grande. Exponente: el pequeño.",
          quizData: { question: "¿Qué significa 2³?", options: ["2+2+2", "2x3", "2x2x2", "3x3"], correctIndex: 2, explanation: "Es la base multiplicada 3 veces." } },
        { id: "s2", type: "memory", title: "La Ley del Cero",
          theory: "Cualquier número (excepto 0) elevado a la potencia CERO es igual a 1. ¡Es una ley universal!",
          memoryData: { pairs: [{ id: 1, term: "x⁰", definition: "1" }, { id: 2, term: "5⁰", definition: "1" }, { id: 3, term: "Base", definition: "Número inferior" }] } },
        { id: "s3", type: "alchemy", title: "Fusión de Poderes",
          theory: "Ley del Producto: Si multiplicas bases iguales, SUMA los exponentes. x² · x³ = x⁵.",
          alchemyData: { goalMessage: "Combina potencias para crear x⁵ (Multiplicación)", correctCombination: ["x2", "x3"], ingredients: [{id:"x2", label:"x²"}, {id:"x3", label:"x³"}, {id:"x4", label:"x⁴"}, {id:"plus", label:"+"}], feedbackSuccess: "¡Correcto! 2+3=5", feedbackError: "Recuerda: los exponentes se suman." } },
        { id: "s4", type: "minigame", title: "Potencia de Potencia",
          theory: "Si elevas una potencia a otra potencia, MULTIPLICA los exponentes. (x²)³ = x⁶.",
          minigameData: { instruction: "Selecciona la equivalencia correcta para (a⁴)²", options: [{text:"a⁶", isCorrect:false, feedback:"No sumes."}, {text:"a⁸", isCorrect:true, feedback:"¡Sí! 4x2=8"}, {text:"a¹⁶", isCorrect:false, feedback:"No eleves el exponente."}] } },
        { id: "s5", type: "puzzle", title: "Secuencia Exponencial",
          theory: "Ordena las operaciones para simplificar (2x)³ = 2³ · x³ = 8x³.",
          puzzleData: { instruction: "Ordena los pasos de simplificación de (2x)²:", items: ["(2x)²", "2² · x²", "4x²"], correctOrder: [0, 1, 2], feedback: "Lógica perfecta." } },
        { id: "s6", type: "maze", title: "Ruta de Simplificación",
          theory: "Sigue el camino donde la simplificación sea correcta.",
          mazeData: { instruction: "Pisa las igualdades VERDADERAS:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"x²·x=x³", isValid:true}, {content:"x²+x²=x⁴", isValid:false}, {content:"(x²)³=x⁵", isValid:false}, {content:"x⁵/x²=x³", isValid:true}, {content:"x⁰=0", isValid:false}, {content:"2x²=4x", isValid:false}, {content:"(xy)²=x²y²", isValid:true}, {content:"META", isValid:true}], feedbackSuccess: "¡Has cruzado el laberinto!", feedbackError: "Esa igualdad es falsa." } },
        { id: "s7", type: "cryptex", title: "Código de Exponente",
          theory: "Encuentra el exponente que falta. xᵃ · x³ = x⁷ -> a + 3 = 7 -> a = 4.",
          cryptexData: { instruction: "Halla el valor del exponente desconocido:", wheels: [{label:"A", clue:"xᵃ · x² = x⁵", correctValue:3}, {label:"B", clue:"(x²)ᵇ = x⁸", correctValue:4}, {label:"C", clue:"xᶜ / x = x", correctValue:2}], feedbackSuccess: "¡Sistema desbloqueado!" } },
        { id: "s8", type: "quiz", title: "División de Poderes",
          theory: "Al dividir bases iguales, RESTA los exponentes. x⁵ / x² = x³.",
          quizData: { question: "Simplifica: x¹⁰ / x³", options: ["x¹³", "x⁷", "x³⁰", "x⁻⁷"], correctIndex: 1, explanation: "10 - 3 = 7." } },
        { id: "s9", type: "minigame", title: "Negatividad",
          theory: "Un exponente negativo invierte la base. x⁻¹ = 1/x.",
          minigameData: { instruction: "Selecciona lo cierto:", options: [{text:"x⁻² = -x²", isCorrect:false, feedback:"No es negativo el número, es inversión."}, {text:"x⁻² = 1/x²", isCorrect:true, feedback:"¡Correcto! Inverso."}, {text:"x⁻² = √x", isCorrect:false, feedback:"No es raíz."}] } },
        { id: "s10", type: "boss", title: "Dragón Exponencial",
          theory: "Combina todas las leyes. (x²y)³ = x⁶y³. x⁵/x⁵ = x⁰ = 1.",
          bossData: { name: "Draco de la Potencia", hp: 150, playerMaxHp: 100, assetId: "dragon_red", questions: [{q:"Simplifica (x³)² · x", options:["x⁷","x⁶","x⁵","x⁹"], correct:0, damageToBoss:50, damageToPlayer:20}, {q:"Calcula 2⁻²", options:["-4","1/4","4","-2"], correct:1, damageToBoss:50, damageToPlayer:25}, {q:"Valor de 100⁰", options:["0","1","100","Indefinido"], correct:1, damageToBoss:50, damageToPlayer:30}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 4: POLINOMIOS ---
  else if (worldId === "w4") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "La Legión Algebraica", content: "Un polinomio es una suma de términos. Cada término tiene un coeficiente y una variable. 3x² + 2x - 5.", theory: "Grado: El exponente más alto.", quizData: { question: "¿Cuál es el GRADO de 4x³ + 2x?", options: ["1", "2", "3", "4"], correctIndex: 2, explanation: "El exponente mayor es 3." } },
        { id: "s2", type: "minigame", title: "Clasificación de Tropas", theory: "1 término = Monomio. 2 términos = Binomio. 3 términos = Trinomio.", minigameData: { instruction: "Selecciona los **BINOMIOS**:", options: [{text:"x + y", isCorrect:true, feedback:"Dos términos."}, {text:"3x²", isCorrect:false, feedback:"Monomio."}, {text:"a - b", isCorrect:true, feedback:"Dos términos."}] } },
        { id: "s3", type: "alchemy", title: "Suma de Fuerzas", theory: "Solo puedes sumar términos semejantes (mismas letras y exponentes).", alchemyData: { goalMessage: "Crea **5x** sumando términos.", correctCombination: ["2x", "3x"], ingredients: [{id:"2x", label:"2x"}, {id:"3x", label:"3x"}, {id:"x2", label:"x²"}, {id:"5", label:"5"}], feedbackSuccess: "¡Fusión exitosa!", feedbackError: "No son semejantes o suma incorrecta." } },
        { id: "s4", type: "memory", title: "Pares Semejantes", theory: "Encuentra las parejas que se pueden sumar.", memoryData: { pairs: [{ id: 1, term: "3ab", definition: "-ab" }, { id: 2, term: "x²", definition: "5x²" }, { id: 3, term: "Constante", definition: "Número solo" }] } },
        { id: "s5", type: "quiz", title: "Resta Traicionera", theory: "Para restar un polinomio, cambia el signo de TODOS los términos del segundo grupo. -(3x - 2) se vuelve -3x + 2.", quizData: { question: "Resultado de (5x) - (2x + 1)", options: ["3x + 1", "3x - 1", "7x + 1", "3x"], correctIndex: 1, explanation: "5x - 2x - 1 = 3x - 1." } },
        { id: "s6", type: "puzzle", title: "Orden de Batalla", theory: "Escribe los polinomios en orden descendente de grado (mayor a menor exponente).", puzzleData: { instruction: "Ordena: 3 + x² - 2x", items: ["x²", "-2x", "+3"], correctOrder: [0, 1, 2], feedback: "Forma estándar alcanzada." } },
        { id: "s7", type: "maze", title: "Camino Monomio", theory: "Cruza pisando solo MONOMIOS (un solo término).", mazeData: { instruction: "Solo Monomios:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"3xyz", isValid:true}, {content:"x+y", isValid:false}, {content:"a-b", isValid:false}, {content:"-5x²", isValid:true}, {content:"3+x", isValid:false}, {content:"x²+y²", isValid:false}, {content:"8", isValid:true}, {content:"META", isValid:true}], feedbackSuccess: "Ruta despejada.", feedbackError: "Eso es un polinomio." } },
        { id: "s8", type: "cryptex", title: "Coeficientes Perdidos", theory: "Suma los coeficientes: (2x) + (3x) = 5x. 2+3=5.", cryptexData: { instruction: "Halla A y B: Ax + Bx = 10x", wheels: [{label:"A (Si B=3)", clue:"A+3=10", correctValue:7}, {label:"B (Si A=5)", clue:"5+B=10", correctValue:5}], feedbackSuccess: "Cálculo preciso." } },
        { id: "s9", type: "minigame", title: "Evaluación Rápida", theory: "Evaluar es sustituir la x por un número. Si x=2, entonces 3x = 6.", minigameData: { instruction: "Evalúa x² + 1 si x=3", options: [{text:"7", isCorrect:false, feedback:"3² es 9."}, {text:"10", isCorrect:true, feedback:"9+1=10."}, {text:"6", isCorrect:false, feedback:"No es 3x2."}] } },
        { id: "s10", type: "boss", title: "General Polinomio", theory: "Combate final de términos. Agrupa semejantes y ordena.", bossData: { name: "General Poly", hp: 180, playerMaxHp: 100, assetId: "skull_lord", questions: [{q:"Suma: (2x+1) + (3x-5)", options:["5x-4","5x+6","6x-5","5x+4"], correct:0, damageToBoss:60, damageToPlayer:20}, {q:"Grado de 5x⁴ - 2x³ + 1", options:["3","5","4","1"], correct:2, damageToBoss:60, damageToPlayer:20}, {q:"Resta: 5x - (x - 2)", options:["4x-2","4x+2","6x-2","4x"], correct:1, damageToBoss:60, damageToPlayer:25}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 5: PRODUCTOS NOTABLES ---
  else if (worldId === "w5") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "Expansión Básica", content: "Propiedad Distributiva: a(b+c) = ab + ac. El término de afuera multiplica a TODOS los de adentro.", theory: "Flechas multiplicadoras.", quizData: { question: "Expande: 2(x + 3)", options: ["2x + 3", "2x + 6", "x + 6", "2x + 5"], correctIndex: 1, explanation: "2 por x y 2 por 3." } },
        { id: "s2", type: "alchemy", title: "Binomio al Cuadrado", theory: "(a+b)² = a² + 2ab + b². ¡No olvides el término del medio!", alchemyData: { goalMessage: "Construye (x+1)²", correctCombination: ["x2", "2x", "1"], ingredients: [{id:"x2", label:"x²"}, {id:"2x", label:"2x"}, {id:"1", label:"1"}, {id:"x", label:"x"}], feedbackSuccess: "Trinomio Cuadrado Perfecto.", feedbackError: "Falta el término central." } },
        { id: "s3", type: "minigame", title: "Diferencia de Cuadrados", theory: "El par conjugado: (a+b)(a-b) = a² - b². Los términos centrales se cancelan.", minigameData: { instruction: "Resultado de (x-3)(x+3)", options: [{text:"x² - 9", isCorrect:true, feedback:"¡Exacto!"}, {text:"x² + 9", isCorrect:false, feedback:"El signo es menos."}, {text:"x² - 6x + 9", isCorrect:false, feedback:"No hay término medio."}] } },
        { id: "s4", type: "puzzle", title: "Método FOIL", theory: "First, Outer, Inner, Last. (x+2)(x+3) = x² + 3x + 2x + 6.", puzzleData: { instruction: "Ordena los pasos de (x+1)(x+2):", items: ["x² (x·x)", "+ 3x (Suma)", "+ 2 (1·2)"], correctOrder: [0, 1, 2], feedback: "Secuencia lógica correcta." } },
        { id: "s5", type: "memory", title: "Patrones Geométricos", theory: "Asocia la fórmula con su nombre.", memoryData: { pairs: [{ id: 1, term: "(a+b)²", definition: "Trinomio Cuadrado Perfecto" }, { id: 2, term: "(a+b)(a-b)", definition: "Diferencia de Cuadrados" }, { id: 3, term: "x(a+b)", definition: "Distributiva" }] } },
        { id: "s6", type: "maze", title: "Ruta del Cuadrado", theory: "Sigue las expansiones correctas.", mazeData: { instruction: "Pisa verdades:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"(x+2)²=x²+4", isValid:false}, {content:"(x+1)²=x²+2x+1", isValid:true}, {content:"(x-1)²=x²-2x+1", isValid:true}, {content:"2(x+1)=2x+2", isValid:true}, {content:"(x-2)(x+2)=x²-4", isValid:true}, {content:"x²·x²=2x²", isValid:false}, {content:"x(x)=2x", isValid:false}, {content:"META", isValid:true}], feedbackSuccess: "¡Has evitado los errores comunes!", feedbackError: "Caíste en la trampa del binomio." } },
        { id: "s7", type: "cryptex", title: "El Término Fantasma", theory: "En (x+5)², el término del medio es 2·x·5 = 10x.", cryptexData: { instruction: "Halla el coeficiente medio 'K':", wheels: [{label:"(x+3)² -> Kx", clue:"2*3", correctValue:6}, {label:"(x-4)² -> Kx", clue:"2*4 (negativo ignora)", correctValue:8}], feedbackSuccess: "Doble producto hallado." } },
        { id: "s8", type: "quiz", title: "Productos Rápidos", theory: "(x+a)(x+b) = x² + (a+b)x + ab.", quizData: { question: "(x+2)(x+5)", options: ["x² + 7x + 10", "x² + 10x + 7", "x² + 7x + 7", "x² + 10"], correctIndex: 0, explanation: "Suma 2+5=7, Multiplica 2*5=10." } },
        { id: "s9", type: "minigame", title: "Identifica el Error", theory: "El error más común es olvidar el término medio en (a+b)².", minigameData: { instruction: "¿Cuál es CORRECTO?", options: [{text:"(x+3)² = x² + 9", isCorrect:false, feedback:"¡Falta 6x!"}, {text:"(x+3)² = x² + 6x + 9", isCorrect:true, feedback:"Perfecto."}] } },
        { id: "s10", type: "boss", title: "Arquitecto de Fórmulas", theory: "Usa los atajos mentales. No multipliques todo si conoces la fórmula.", bossData: { name: "El Constructor", hp: 200, playerMaxHp: 100, assetId: "dwarf", questions: [{q:"Expande (x-5)²", options:["x²-25","x²-10x+25","x²+25","x²-5x+25"], correct:1, damageToBoss:70, damageToPlayer:25}, {q:"(2x+1)(2x-1)", options:["4x²-1","2x²-1","4x-1","4x²+1"], correct:0, damageToBoss:70, damageToPlayer:25}, {q:"(x+2)(x+3)", options:["x²+5x+6","x²+6x+5","x²+5x+5"], correct:0, damageToBoss:60, damageToPlayer:20}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 6: FACTORIZACIÓN ---
  else if (worldId === "w6") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "Ingeniería Inversa", content: "Factorizar es lo opuesto a multiplicar. Es convertir una suma en un producto. x² + x -> x(x+1).", theory: "Busca qué tienen en común.", quizData: { question: "¿Qué tienen en común 4x y 8?", options: ["x", "4", "8", "2x"], correctIndex: 1, explanation: "Ambos son divisibles por 4." } },
        { id: "s2", type: "minigame", title: "Factor Común (GCF)", theory: "El Factor Común Mayor es el número/letra más grande que divide a todos.", minigameData: { instruction: "Factor común de 3x² + 6x", options: [{text:"3", isCorrect:false, feedback:"Falta la x."}, {text:"3x", isCorrect:true, feedback:"Correcto, divide a ambos."}, {text:"x", isCorrect:false, feedback:"Falta el 3."}] } },
        { id: "s3", type: "alchemy", title: "Descomposición", theory: "Rompe x² - 16 en dos paréntesis.", alchemyData: { goalMessage: "Factoriza x² - 16", correctCombination: ["x+4", "x-4"], ingredients: [{id:"x+4", label:"(x+4)"}, {id:"x-4", label:"(x-4)"}, {id:"x-8", label:"(x-8)"}, {id:"x+2", label:"(x+2)"}], feedbackSuccess: "Diferencia de Cuadrados perfecta.", feedbackError: "Recuerda: raíz de 16 es 4." } },
        { id: "s4", type: "memory", title: "Parejas de Raíces", theory: "Encuentra dos números que multiplicados den C y sumados den B.", memoryData: { pairs: [{ id: 1, term: "Multiplican 6, Suman 5", definition: "2 y 3" }, { id: 2, term: "Multiplican 12, Suman 7", definition: "3 y 4" }, { id: 3, term: "Multiplican 9, Suman 6", definition: "3 y 3" }] } },
        { id: "s5", type: "puzzle", title: "Trinomio Simple", theory: "x² + bx + c. Paso 1: paréntesis (x )(x ). Paso 2: Signos. Paso 3: Números.", puzzleData: { instruction: "Pasos para x² + 5x + 6:", items: ["(x   )(x   )", "(x + )(x + )", "(x + 2)(x + 3)"], correctOrder: [0, 1, 2], feedback: "Estructura correcta." } },
        { id: "s6", type: "maze", title: "Ruta de Primos", theory: "Avanza por polinomios que NO se pueden factorizar más (Irreducibles o Primos).", mazeData: { instruction: "Solo polinomios PRIMOS:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"x+1", isValid:true}, {content:"x²-4", isValid:false}, {content:"2x+2", isValid:false}, {content:"x²+1", isValid:true}, {content:"x²-9", isValid:false}, {content:"3x+9", isValid:false}, {content:"x-5", isValid:true}, {content:"META", isValid:true}], feedbackSuccess: "Has encontrado los elementos puros.", feedbackError: "Ese se podía factorizar." } },
        { id: "s7", type: "cryptex", title: "Buscando Raíces", theory: "Si (x-3)(x+2) = 0, las raíces son x=3 y x=-2. ¡Cambia el signo!", cryptexData: { instruction: "Halla la raíz positiva:", wheels: [{label:"x²-25=0", clue:"Raíz de 25", correctValue:5}, {label:"(x-7)(x+2)=0", clue:"El valor que anula x-7", correctValue:7}], feedbackSuccess: "Raíces halladas." } },
        { id: "s8", type: "quiz", title: "Trinomio Cuadrado", theory: "Si el primero y el último tienen raíz exacta, comprueba el doble producto.", quizData: { question: "Factoriza x² + 2x + 1", options: ["(x+1)(x-1)", "(x+1)²", "(x+2)(x-1)"], correctIndex: 1, explanation: "Es un trinomio cuadrado perfecto." } },
        { id: "s9", type: "minigame", title: "Agrupación", theory: "Si hay 4 términos, agrupa en parejas. ax + ay + bx + by = a(x+y) + b(x+y).", minigameData: { instruction: "Primer paso para: x³ + x² + 2x + 2", options: [{text:"x²(x+1) + 2(x+1)", isCorrect:true, feedback:"Bien agrupado."}, {text:"x(x²+x+2)+2", isCorrect:false, feedback:"No ayuda."}] } },
        { id: "s10", type: "boss", title: "El Divisor", theory: "Reconoce el patrón. ¿Diferencia de cuadrados o Trinomio?", bossData: { name: "The Splitter", hp: 200, playerMaxHp: 100, assetId: "alien", questions: [{q:"Factoriza x² - 81", options:["(x-9)²","(x+9)(x-9)","(x-81)(x+1)"], correct:1, damageToBoss:70, damageToPlayer:25}, {q:"Factoriza x² + 7x + 10", options:["(x+5)(x+2)","(x+10)(x+1)","(x+7)(x+1)"], correct:0, damageToBoss:70, damageToPlayer:25}, {q:"Factor común: 5x³ - 5x", options:["5x(x²-1)","5(x³-x)","x(5x²-5)"], correct:0, damageToBoss:60, damageToPlayer:20}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 7: ECUACIONES ---
  else if (worldId === "w7") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "La Balanza", content: "Resolver es dejar la 'x' sola. Lo que hagas a un lado, debemos hacerlo al otro para mantener el equilibrio.", theory: "Objetivo: x = número.", quizData: { question: "Si x + 5 = 10, ¿qué hago?", options: ["Resto 5 a ambos lados", "Sumo 5 a ambos lados", "Resto 10"], correctIndex: 0, explanation: "Operación inversa: +5 pasa como -5." } },
        { id: "s2", type: "minigame", title: "Operación Inversa", theory: "Suma <-> Resta. Multiplicación <-> División.", minigameData: { instruction: "Para eliminar el 3 en '3x = 12', debo...", options: [{text:"Restar 3", isCorrect:false, feedback:"El 3 está multiplicando."}, {text:"Dividir por 3", isCorrect:true, feedback:"Correcto, inverso de multiplicar."}] } },
        { id: "s3", type: "alchemy", title: "Equilibrio Químico", theory: "Resuelve 2x - 4 = 6. Primero suma 4, luego divide por 2.", alchemyData: { goalMessage: "Halla el valor de x en: **2x - 4 = 6**", correctCombination: ["5"], ingredients: [{id:"5", label:"5"}, {id:"2", label:"2"}, {id:"10", label:"10"}, {id:"6", label:"6"}], feedbackSuccess: "2(5)-4=6. Correcto.", feedbackError: "Error de cálculo." } },
        { id: "s4", type: "puzzle", title: "Pasos de Resolución", theory: "Orden: 1. Sumas/Restas 2. Mult/Div.", puzzleData: { instruction: "Pasos para 2x + 1 = 9:", items: ["Restar 1 (2x = 8)", "Dividir por 2 (x = 4)", "Resolver"], correctOrder: [0, 1, 2], feedback: "Algoritmo correcto." } },
        { id: "s5", type: "memory", title: "Traducción Real", theory: "Asocia la frase con la ecuación.", memoryData: { pairs: [{ id: 1, term: "Doble de un número es 10", definition: "2x = 10" }, { id: 2, term: "Número más 5 es 8", definition: "x + 5 = 8" }, { id: 3, term: "Mitad de un número", definition: "x / 2" }] } },
        { id: "s6", type: "maze", title: "Camino de la Verdad", theory: "Sigue la ecuación hasta su solución.", mazeData: { instruction: "Conecta Ecuación -> Solución:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"x+2=5 -> x=3", isValid:true}, {content:"2x=10 -> x=2", isValid:false}, {content:"x/2=4 -> x=2", isValid:false}, {content:"x-1=1 -> x=2", isValid:true}, {content:"3x=0 -> x=3", isValid:false}, {content:"5x=5 -> x=0", isValid:false}, {content:"x+x=10 -> x=5", isValid:true}, {content:"META", isValid:true}], feedbackSuccess: "Verdad alcanzada.", feedbackError: "Esa solución es falsa." } },
        { id: "s7", type: "cryptex", title: "Incógnita Oculta", theory: "Resuelve mentalmente.", cryptexData: { instruction: "Resuelve:", wheels: [{label:"3x = 15", clue:"x = ?", correctValue:5}, {label:"x/2 = 4", clue:"x = ?", correctValue:8}], feedbackSuccess: "Valores correctos." } },
        { id: "s8", type: "minigame", title: "Variables en Ambos Lados", theory: "Mueve las x a la izquierda y los números a la derecha. 3x = x + 4 -> 2x = 4.", minigameData: { instruction: "Primer paso en: 5x = 2x + 9", options: [{text:"Restar 2x", isCorrect:true, feedback:"Queda 3x = 9."}, {text:"Restar 9", isCorrect:false, feedback:"No agrupa las x."}] } },
        { id: "s9", type: "quiz", title: "Paréntesis Primero", theory: "2(x+3)=10. Primero distribuye: 2x+6=10. Luego resuelve.", quizData: { question: "Resuelve: 3(x-1) = 6", options: ["x=2", "x=3", "x=1"], correctIndex: 1, explanation: "3x-3=6 -> 3x=9 -> x=3." } },
        { id: "s10", type: "boss", title: "El Equilibrador", theory: "No entres en pánico. Paso a paso. Agrupa x, despeja.", bossData: { name: "Equilibrium", hp: 220, playerMaxHp: 100, assetId: "vampire", questions: [{q:"Resuelve: 4x + 2 = 14", options:["2","3","4","12"], correct:1, damageToBoss:70, damageToPlayer:25}, {q:"Resuelve: 2x = x + 5", options:["1","5","2.5","-5"], correct:1, damageToBoss:70, damageToPlayer:25}, {q:"3(x+1) = 12", options:["3","4","2"], correct:0, damageToBoss:80, damageToPlayer:20}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // --- MUNDO 8: SISTEMAS ---
  else if (worldId === "w8") {
      const steps: CourseStep[] = [
        { id: "s1", type: "quiz", title: "Doble Verdad", content: "Un sistema son dos ecuaciones que deben ser verdad AL MISMO TIEMPO. La solución es donde se cruzan sus líneas.", theory: "Buscas (x, y).", quizData: { question: "¿Qué significa resolver un sistema?", options: ["Hallar dos líneas", "Hallar la intersección", "Sumar todo"], correctIndex: 1, explanation: "El punto común." } },
        { id: "s2", type: "minigame", title: "Verificador", theory: "Prueba el punto (x,y) en las ecuaciones. ¿Cumple ambas?", minigameData: { instruction: "¿Es (2,1) solución de x+y=3?", options: [{text:"Sí", isCorrect:true, feedback:"2+1=3. Correcto."}, {text:"No", isCorrect:false, feedback:"La suma da 3."}] } },
        { id: "s3", type: "alchemy", title: "Método de Suma", 
          theory: "Al sumar dos ecuaciones, si una variable tiene coeficientes opuestos (como +y y -y), se anula al sumarlas. Ejemplo: x+y=5 y x-y=1 sumados dan 2x=6.", 
          alchemyData: { 
            goalMessage: "Suma este sistema para eliminar la 'Y':\n**x + y = 7**, \n**x - y = 3**", 
            correctCombination: ["res_2x", "res_eq", "res_10"], 
            ingredients: [
                {id:"res_2x", label:"2x"}, 
                {id:"res_eq", label:"="}, 
                {id:"res_10", label:"10"},
                {id:"res_2y", label:"2y"},
                {id:"res_0", label:"0"},
                {id:"res_4", label:"4"}
            ], 
            feedbackSuccess: "¡Y eliminada con éxito! La nueva ecuación es 2x = 10.", 
            feedbackError: "Esa no es la ecuación resultante al sumar el sistema." 
          } 
        },
        { id: "s4", type: "puzzle", title: "Sustitución Lógica", theory: "Si y = 2x, pon '2x' donde veas 'y' en la otra ecuación.", puzzleData: { instruction: "Pasos para sustituir y=x en y+x=4:", items: ["x + x = 4", "2x = 4", "x = 2"], correctOrder: [0, 1, 2], feedback: "Sustitución exitosa." } },
        { id: "s5", type: "memory", title: "Métodos Maestros", theory: "Conoce tus herramientas.", memoryData: { pairs: [{ id: 1, term: "Sustitución", definition: "Reemplazar variable" }, { id: 2, term: "Eliminación", definition: "Sumar ecuaciones" }, { id: 3, term: "Gráfico", definition: "Dibujar líneas" }] } },
        { id: "s6", type: "maze", title: "Coordenada Perdida", theory: "Sistema: x + y = 8, x - y = 4. \nBusca el camino donde x + y = 8 hasta encontrar la solución (6,2).", mazeData: { instruction: "Sigue pares donde x+y=8:", gridSize: 3, startIdx: 0, endIdx: 8, cells: [{content:"INICIO", isValid:true}, {content:"(4,4)", isValid:true}, {content:"(5,2)", isValid:false}, {content:"(1,6)", isValid:false}, {content:"(5,3)", isValid:true}, {content:"(8,1)", isValid:false}, {content:"(3,4)", isValid:false}, {content:"(6,2)", isValid:true}, {content:"META", isValid:true}], feedbackSuccess: "¡Coordenada (6,2) asegurada!", feedbackError: "La suma no es 8." } },
        { id: "s7", type: "cryptex", title: "Sistema Binario", theory: "x+y=10, x-y=2. Suma: 2x=12 -> x=6. Resta: 2y=8 -> y=4.", cryptexData: { instruction: "Halla X e Y:", wheels: [{label:"X", clue:"x+y=6, x-y=0", correctValue:3}, {label:"Y", clue:"x=3, x+y=6", correctValue:3}], feedbackSuccess: "Coordenadas fijadas." } },
        { id: "s8", type: "minigame", title: "Decisión Táctica", theory: "Si una ecuación dice 'y=...', usa Sustitución. Si están alineadas, usa Eliminación.", minigameData: { instruction: "Mejor método para: y=3x, 2x+y=10", options: [{text:"Sustitución", isCorrect:true, feedback:"Porque y está despejada."}, {text:"Eliminación", isCorrect:false, feedback:"Más lento aquí."}] } },
        { id: "s9", type: "quiz", title: "Problema Verbal", theory: "Dos números suman 10. Su resta es 2. ¿Cuáles son?", quizData: { question: "x+y=10, x-y=2", options: ["6 y 4", "5 y 5", "8 y 2"], correctIndex: 0, explanation: "6+4=10, 6-4=2." } },
        { id: "s10", type: "boss", title: "Paradoja Gemela", theory: "El reto final. Resuelve por el método que prefieras, pero rápido.", bossData: { name: "Gemini", hp: 250, playerMaxHp: 100, assetId: "demon", questions: [{q:"Sistema: x+y=8, x-y=4", options:["(6,2)","(4,4)","(5,3)"], correct:0, damageToBoss:80, damageToPlayer:25}, {q:"Sistema: y=x, x+y=10", options:["(5,5)","(10,0)","(2,8)"], correct:0, damageToBoss:80, damageToPlayer:25}, {q:"Sistema: 2x+y=5, x=1", options:["y=3","y=2","y=1"], correct:0, damageToBoss:90, damageToPlayer:30}] } }
      ];
      return steps[missionIndex] || defaultStep;
  }

  // Fallback for safety
  const genericTitles = ["Iniciación", "Práctica", "Teoría", "Lógica", "Simulación", "Estrategia", "Dominio", "Maestría", "Prueba", "Jefe"];
  const isBoss = missionIndex === 9;
  
  return {
     id: `gen-${worldId}-${missionIndex}`,
     type: isBoss ? 'boss' : 'quiz',
     title: genericTitles[missionIndex],
     theory: "Contenido genérico de respaldo.",
     content: "Este nivel está en mantenimiento por los magos del código.",
     quizData: { question: "¿1+1?", options: ["2","3"], correctIndex: 0, explanation: "Básico." },
     bossData: isBoss ? { name: "Placeholder Boss", hp: 100, playerMaxHp: 100, assetId: "skull_lord", questions: [{q:"Win?", options:["Yes"], correct:0, damageToBoss:100, damageToPlayer:0}] } : undefined
  };
};

// --- WORLD DATA GENERATOR ---
const generateMissions = (worldId: string, worldName: string): Mission[] => {
    return Array.from({ length: 10 }).map((_, i) => {
        const step = getSpecificStep(worldId, i);
        let displayType: any = 'Quiz';
        if (step.type === 'puzzle') displayType = 'Puzzle';
        if (step.type === 'minigame') displayType = 'Simulación';
        if (step.type === 'boss') displayType = 'Jefe Final';
        if (step.type === 'alchemy') displayType = 'Alquimia';
        if (step.type === 'cryptex') displayType = 'Criptex';
        if (step.type === 'maze') displayType = 'Laberinto';
        if (step.type === 'memory') displayType = 'Memoria';

        return {
            id: `${worldId}-m${i}`,
            title: step.title,
            description: step.type === 'boss' ? "Derrota al Guardián." : `Nivel ${i+1} de ${worldName}`,
            difficulty: i > 8 ? 'Legendario' : i > 5 ? 'Difícil' : 'Medio',
            type: displayType,
            locked: i > 0,
            completed: false,
            stars: 0,
            steps: [step]
        };
    });
};

export const worldsData: World[] = [
  {
    id: "w1", name: "El Valle de las Variables", emoji: "🌱",
    description: "Donde los números cobran vida y se transforman.",
    themeColor: "emerald", bgGradient: "from-emerald-900 to-slate-900",
    missions: generateMissions("w1", "Variables")
  },
  {
    id: "w2", name: "Fortaleza de Signos", emoji: "🏰",
    description: "Domina la dualidad del positivo y negativo.",
    themeColor: "red", bgGradient: "from-red-900 to-slate-900",
    missions: generateMissions("w2", "Signos")
  },
  {
    id: "w3", name: "Laboratorio Exponencial", emoji: "🧪",
    description: "Desata el poder del crecimiento explosivo.",
    themeColor: "indigo", bgGradient: "from-indigo-900 to-slate-900",
    missions: generateMissions("w3", "Exponentes")
  },
  {
    id: "w4", name: "Arena de Polinomios", emoji: "⚔️",
    description: "Comanda ejércitos de términos algebraicos.",
    themeColor: "orange", bgGradient: "from-orange-900 to-slate-900",
    missions: generateMissions("w4", "Polinomios")
  },
  {
    id: "w5", name: "Templo de Productos", emoji: "🏛️",
    description: "Descubre los patrones arquitectónicos antiguos.",
    themeColor: "amber", bgGradient: "from-amber-800 to-slate-900",
    missions: generateMissions("w5", "Productos")
  },
  {
    id: "w6", name: "Cueva de Factorización", emoji: "💎",
    description: "Rompe las estructuras en sus gemas primarias.",
    themeColor: "purple", bgGradient: "from-purple-900 to-slate-900",
    missions: generateMissions("w6", "Factorización")
  },
  {
    id: "w7", name: "Ciudad Ecuación", emoji: "⚖️",
    description: "Restaura el equilibrio de la gran balanza.",
    themeColor: "blue", bgGradient: "from-blue-900 to-slate-900",
    missions: generateMissions("w7", "Ecuaciones")
  },
  {
    id: "w8", name: "Nexo Infinito", emoji: "🌌",
    description: "Donde múltiples realidades convergen.",
    themeColor: "fuchsia", bgGradient: "from-fuchsia-900 to-slate-900",
    missions: generateMissions("w8", "Sistemas")
  }
];
