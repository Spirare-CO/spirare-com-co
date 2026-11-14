import type { IntentId } from "@/lib/whatsapp";

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  lead: string;
  purpose: string;
  consistsOf: string[];
  practical: string[];
  pendingValidation: string[];
  faqs: Faq[];
  intent: IntentId;
  relatedCategoryIds: string[];
};

const sharedFaq = (extra: Faq[] = []): Faq[] => [
  ...extra,
  {
    question: "¿Esta información reemplaza una consulta?",
    answer:
      "No. Describe el servicio en lenguaje general. La indicación, la preparación y el plan de cuidado los define el profesional que te atiende.",
  },
  {
    question: "¿Cuál es el valor y la cobertura?",
    answer:
      "Precios, cobertura de aseguradoras y disponibilidad no están publicados. Se confirman al solicitar la cita, porque dependen de cada caso y de la forma de atención.",
  },
  {
    question: "¿Cómo solicito el servicio?",
    answer:
      "Desde el botón de WhatsApp de esta página. Ese canal no atiende urgencias.",
  },
];

export const services: Service[] = [
  {
    slug: "consulta-medicina-interna",
    name: "Consulta de medicina interna",
    kicker: "Consulta",
    summary: "Valoración médica integral para orientar síntomas y el cuidado general de la salud.",
    lead: "Un espacio de consulta con medicina interna para revisar tu situación de salud, ordenar la información y definir, con el profesional, los siguientes pasos.",
    purpose:
      "Acompañar la evaluación de síntomas que pueden involucrar varios sistemas, incluida la respiración, y orientar si hace falta un estudio o una valoración por otra especialidad.",
    consistsOf: [
      "Conversación sobre lo que te ocurre, tus antecedentes y los medicamentos que usas.",
      "Examen físico según el criterio del profesional.",
      "Explicación de las opciones de estudio o seguimiento que apliquen a tu caso.",
    ],
    practical: [
      "Lleva el listado de medicamentos y los resultados de estudios que ya tengas.",
      "La duración, la necesidad de orden previa y la forma de pago se confirman al agendar.",
    ],
    pendingValidation: [
      "Preparación específica de la consulta.",
      "Credenciales del profesional que atiende.",
      "Habilitación del servicio en REPS.",
    ],
    faqs: sharedFaq([
      {
        question: "¿La consulta de medicina interna es lo mismo que neumología?",
        answer:
          "No. Medicina interna aborda la salud del adulto de forma integral. Neumología se concentra en las enfermedades respiratorias. El profesional puede indicar si necesitas una u otra.",
      },
    ]),
    intent: "medicina-interna",
    relatedCategoryIds: ["cuidado-general", "enfermedades"],
  },
  {
    slug: "consulta-neumologia",
    name: "Consulta de neumología",
    kicker: "Consulta",
    summary: "Valoración especializada cuando la tos, la falta de aire u otros síntomas respiratorios necesitan una mirada dirigida.",
    lead: "La neumología se ocupa de las enfermedades de los pulmones y las vías respiratorias. La consulta sirve para entender qué está pasando y cómo seguir el cuidado.",
    purpose:
      "Revisar síntomas como tos persistente, silbidos, falta de aire, infecciones respiratorias de repetición o el seguimiento de una enfermedad respiratoria ya conocida.",
    consistsOf: [
      "El profesional escucha tu relato y revisa antecedentes, exposiciones y tratamientos.",
      "Puede examinar el tórax y, si lo considera, solicitar pruebas como espirometría u otras mediciones.",
      "Al final explica el plan: observación, tratamiento, estudio adicional o control. Esa decisión es individual.",
    ],
    practical: [
      "Si usas inhaladores, anota el nombre y la frecuencia. No suspendas nada por tu cuenta antes de la cita.",
      "Trae informes previos si los tienes.",
    ],
    pendingValidation: [
      "Listado cerrado de motivos de consulta.",
      "Duración de la cita y requisitos administrativos.",
    ],
    faqs: sharedFaq([
      {
        question: "¿Debo llegar con una prueba ya hecha?",
        answer:
          "No siempre. En muchos casos la consulta ocurre primero y el profesional decide qué estudio aporta. Si ya tienes resultados, llévalos.",
      },
    ]),
    intent: "neumologia",
    relatedCategoryIds: ["inhaladores", "enfermedades", "preparacion-pruebas"],
  },
  {
    slug: "espirometria-pre-post-broncodilatador",
    name: "Espirometría pre y post broncodilatador",
    kicker: "Prueba",
    summary: "Medición del aire que puedes exhalar, antes y después de un medicamento que abre los bronquios.",
    lead: "La espirometría mide cómo sale el aire de los pulmones. Comparar la medición antes y después de un broncodilatador ayuda a ver si las vías responden a ese medicamento.",
    purpose:
      "Aportar datos objetivos sobre el flujo de aire. El profesional interpreta el resultado junto con tus síntomas. La prueba, por sí sola, no entrega un diagnóstico en esta página.",
    consistsOf: [
      "Respiras a través de una boquilla conectada al equipo, siguiendo las indicaciones de quien realiza el estudio.",
      "Se registran maniobras de espiración forzada. Hacen falta esfuerzos repetidos y aceptables.",
      "Después se administra un broncodilatador, se espera el tiempo que indique el protocolo del servicio y se repite la medición.",
    ],
    practical: [
      "La diferencia entre pre y post es temporal: la primera medición es sin el efecto reciente del broncodilatador de la prueba; la segunda, después de administrarlo.",
      "Durante la maniobra se te pedirá un esfuerzo. Puedes detenerte si te sientes mal y avisarlo de inmediato.",
    ],
    pendingValidation: [
      "Preparación: suspensión de inhaladores, ayuno, ropa o contraindicaciones. No las publicamos hasta validarlas con el responsable clínico.",
      "Duración exacta y marca del equipo.",
    ],
    faqs: sharedFaq([
      {
        question: "¿Duele?",
        answer:
          "La maniobra exige soplar con fuerza y puede fatigar o producir tos. No es un procedimiento con agujas. Si aparece malestar, se interrumpe y se avisa al personal.",
      },
    ]),
    intent: "espirometria",
    relatedCategoryIds: ["preparacion-pruebas", "inhaladores"],
  },
  {
    slug: "test-caminata-seis-minutos",
    name: "Test de caminata de seis minutos",
    kicker: "Prueba",
    summary: "Una caminata cronometrada que muestra cómo responde tu cuerpo al esfuerzo habitual de desplazarte.",
    lead: "Durante seis minutos caminas a tu propio paso en un recorrido definido. La prueba observa la distancia y la respuesta de la respiración y la oxigenación al esfuerzo.",
    purpose:
      "Ayudar a evaluar la capacidad para realizar una actividad cotidiana, el seguimiento de algunas enfermedades respiratorias o cardiacas y, cuando el profesional lo indica, la respuesta a un tratamiento. No sustituye otras pruebas de esfuerzo.",
    consistsOf: [
      "Antes de empezar se registran signos que el servicio tenga definidos, como oxigenación o percepción de fatiga.",
      "Caminas durante seis minutos. Puedes bajar el ritmo o detenerte si lo necesitas; el tiempo sigue contando según el protocolo.",
      "Al terminar se comparan las mediciones con las iniciales.",
    ],
    practical: [
      "Usa calzado cómodo para caminar.",
      "Informa si has tenido dolor de pecho, mareo o una caída reciente. El personal decide si la prueba puede hacerse ese día.",
    ],
    pendingValidation: [
      "Preparación detallada (comidas, medicamentos, oxígeno suplementario).",
      "Longitud del corredor y criterios de suspensión del servicio.",
    ],
    faqs: sharedFaq([
      {
        question: "¿Tengo que correr?",
        answer:
          "No. Se camina al paso que puedas sostener. El objetivo no es ir lo más rápido posible a costa de sentirte mal.",
      },
    ]),
    intent: "caminata",
    relatedCategoryIds: ["preparacion-pruebas", "cuidado-general"],
  },
  {
    slug: "feno",
    name: "Fracción exhalada de óxido nítrico (FeNO)",
    kicker: "Prueba",
    summary: "Mide el óxido nítrico en el aire que exhalas, una señal relacionada con inflamación de la vía aérea.",
    lead: "FeNO es la fracción de óxido nítrico en el aire exhalado. El resultado es un número que el profesional interpreta junto con tus síntomas y otros estudios.",
    purpose:
      "Puede utilizarse como apoyo en el seguimiento de inflamación de tipo alérgico en el asma y para conversar sobre el uso de algunos tratamientos. No diagnostica por sí solo ni reemplaza la consulta.",
    consistsOf: [
      "Soplas de forma constante por una boquilla, a la velocidad que indica el equipo, durante unos segundos.",
      "El dispositivo calcula la concentración de óxido nítrico en esa exhalación.",
      "Quien realiza la prueba te guía el ritmo. No requiere esfuerzo máximo como la espirometría.",
    ],
    practical: [
      "Evita comer, beber o fumar justo antes solo si el servicio te lo indicó. Esa preparación está pendiente de validación pública.",
      "Informa los inhaladores que usaste en las últimas horas.",
    ],
    pendingValidation: ["Preparación validada.", "Valores de referencia que el servicio utilizará en el informe."],
    faqs: sharedFaq([
      {
        question: "¿Un valor alto significa que estoy grave?",
        answer:
          "No se puede concluir eso desde esta página. El número se lee en contexto clínico. Pídele la explicación a quien ordenó o realizó la prueba.",
      },
    ]),
    intent: "feno",
    relatedCategoryIds: ["preparacion-pruebas", "enfermedades"],
  },
  {
    slug: "terapia-respiratoria",
    name: "Terapia respiratoria",
    kicker: "Acompañamiento",
    summary: "Sesiones guiadas por un profesional para entrenar la respiración, limpiar secreciones o aprender el uso de dispositivos.",
    lead: "La terapia respiratoria es un acompañamiento práctico. Busca que respires con más destreza en las actividades cotidianas y que uses correctamente los dispositivos que te formularon.",
    purpose:
      "Entrenar técnicas de respiración, apoyar la higiene bronquial y educar en el uso de inhaladores, nebulizadores u otros equipos indicados. Los objetivos concretos se acuerdan en cada caso.",
    consistsOf: [
      "El terapeuta revisa la indicación y lo que ya sabes hacer.",
      "Practicas las técnicas o el dispositivo con corrección en el momento.",
      "Sales con orientaciones para continuar en casa, sin sustituir los controles médicos.",
    ],
    practical: [
      "Lleva los inhaladores o el equipo que usas en casa.",
      "Las modalidades (individual, domiciliaria o grupal) se confirman cuando el servicio las tenga definidas. Hoy no las publicamos como disponibles.",
    ],
    pendingValidation: ["Modalidades vigentes.", "Número de sesiones habitual.", "Requisitos de orden médica."],
    faqs: sharedFaq([
      {
        question: "¿La terapia cura la enfermedad?",
        answer:
          "No prometemos curación ni un resultado concreto. La terapia apoya el cuidado que ya indicó tu médico y la forma en que usas los dispositivos.",
      },
    ]),
    intent: "terapia",
    relatedCategoryIds: ["inhaladores", "inhalocamaras", "dispositivos", "cuidado-general"],
  },
  {
    slug: "poligrafia-respiratoria-domiciliaria",
    name: "Poligrafía respiratoria domiciliaria",
    kicker: "Estudio",
    summary: "Registro nocturno, en tu casa, de señales respiratorias durante el sueño. No equivale a todos los estudios de sueño.",
    lead: "La poligrafía respiratoria registra, mientras duermes en casa, variables como el flujo de aire, el esfuerzo respiratorio y la oxigenación. Sirve para estudiar trastornos respiratorios del sueño cuando el profesional la considera adecuada.",
    purpose:
      "Aportar información sobre pausas respiratorias, ronquido y oxígeno durante la noche. Hay otros estudios de sueño, con más señales, que se reservan para situaciones distintas. Esta página no los ofrece como si fueran lo mismo.",
    consistsOf: [
      "Recibes el equipo y una explicación de cómo colocarlo.",
      "Duermes con los sensores en tu cama, siguiendo las instrucciones del servicio.",
      "Al día siguiente se devuelve el equipo para descargar y revisar el registro. La lectura la hace el profesional responsable.",
    ],
    practical: [
      "Necesitas un lugar para dormir y seguir las indicaciones de colocación.",
      "Requisitos, preparación y criterios de aceptación del estudio están pendientes de validación. No inventamos una lista de exclusión.",
    ],
    pendingValidation: [
      "Preparación y requisitos.",
      "Quién interpreta el estudio y en qué plazo.",
      "Si el equipo se entrega en sede o a domicilio.",
    ],
    faqs: sharedFaq([
      {
        question: "¿Es una polisomnografía?",
        answer:
          "No. La polisomnografía registra más señales, a menudo en un laboratorio de sueño. La poligrafía respiratoria es un estudio más sencillo y, en este servicio, se plantea en domicilio. Cuál necesitas lo decide quien te valora.",
      },
    ]),
    intent: "poligrafia",
    relatedCategoryIds: ["cpap", "preparacion-pruebas"],
  },
  {
    slug: "taller-adaptacion-cpap",
    name: "Taller de adaptación a CPAP",
    kicker: "Educación",
    summary: "Acompañamiento para familiarizarte con el equipo CPAP, la mascarilla y el cuidado diario.",
    lead: "CPAP es un equipo que entrega aire a presión mientras duermes, cuando un profesional lo ha indicado. El taller ayuda a ponerlo, tolerar la mascarilla y entender el mantenimiento.",
    purpose:
      "Facilitar la adaptación práctica y resolver dudas de uso. No reemplaza el control médico ni promete que vas a tolerar el equipo desde la primera noche.",
    consistsOf: [
      "Revisión de las partes: equipo, manguera, mascarilla y humidificador si lo tienes.",
      "Prueba de colocación y ajuste de la mascarilla.",
      "Orientación sobre limpieza, horarios de uso y qué observar para comentarlo en el seguimiento.",
    ],
    practical: [
      "Lleva tu equipo y tu mascarilla si ya los tienes. Si aún no, indícalo al escribir.",
      "No damos recomendaciones de presión ni cambios de tratamiento por este medio.",
    ],
    pendingValidation: ["Formato del taller (individual o grupal) y duración.", "Si incluye prueba en el día."],
    faqs: sharedFaq([
      {
        question: "¿El taller ajusta la presión del equipo?",
        answer:
          "No desde una página ni por un mensaje. Los parámetros los define el profesional tratante. El taller se concentra en el uso, la mascarilla y la educación.",
      },
    ]),
    intent: "cpap",
    relatedCategoryIds: ["cpap", "dispositivos"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
