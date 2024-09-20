const products = [
  {
    id: "1",
    name: "Aloe Vera",
    price: 1500,
    category: "interior",
    img: "/src/assets/plantas para interior/aloe vera.jpg",
    stock: 20,
    descripcion:
      "Famosa por sus propiedades medicinales, el aloe vera es una de las plantas más fáciles de cuidar. Prefiere temperaturas altas y es capaz de aguantar sin riego durante bastante tiempo.",
  },
  {
    id: "2",
    name: "Anthurium",
    price: 2500,
    category: "interior",
    img: "/src/assets/plantas para interior/Anthurium.jpg",
    stock: 15,
    descripcion:
      "Sus singulares y llamativas flores con forma de corazón y de color intenso darán más vida a tu hogar con muy pocos cuidados.",
  },
  {
    id: "3",
    name: "Aspidistra Elatior",
    price: 1800,
    category: "interior",
    img: "/src/assets/plantas para interior/Aspidistra elatior.jpg",
    stock: 25,
    descripcion:
      "Ideal para zonas poco iluminadas, esta planta es muy resistente y fácil de cuidar, perfecta para los iniciados en jardinería.",
  },
  {
    id: "4",
    name: "Beaucarnea Gracilis",
    price: 3000,
    category: "interior",
    img: "/src/assets/plantas para interior/Beaucarnea gracilis.png",
    stock: 10,
    descripcion:
      "Conocida como pata de elefante, es una planta que puede alcanzar hasta metro y medio de altura, fácil de cuidar y perfecta para principiantes.",
  },
  {
    id: "5",
    name: "Ceropegia Woodii",
    price: 2200,
    category: "interior",
    img: "/src/assets/plantas para interior/Ceropegia woodii.jpg",
    stock: 12,
    descripcion:
      "Una preciosa suculenta colgante que no necesita muchos cuidados. Perfecta para decorar con un toque único.",
  },
  {
    id: "6",
    name: "Chamadeaora Elegans",
    price: 2800,
    category: "interior",
    img: "/src/assets/plantas para interior/Chamadeaora Elegans.jpg",
    stock: 18,
    descripcion:
      "La palmera de salón es resistente y duradera, ideal para darle un toque tropical a tu hogar con muy pocos cuidados.",
  },
  {
    id: "7",
    name: "Chlorophytum Comosum",
    price: 1600,
    category: "interior",
    img: "/src/assets/plantas para interior/Chlorophytum comosum.jpg",
    stock: 30,
    descripcion:
      "Conocida como cinta o lazo de amor, es ideal para principiantes en jardinería. Es fácil de cuidar y tiene un porte elegante.",
  },
  {
    id: "8",
    name: "Clivia Miniata",
    price: 2700,
    category: "interior",
    img: "/src/assets/plantas para interior/Clivia miniata.jpg",
    stock: 14,
    descripcion:
      "Planta de hojas gruesas y color verde oscuro que florece durante todo el año, ideal para cualquier hogar.",
  },
  {
    id: "9",
    name: "Codiaeum Variegatum Pictum",
    price: 2400,
    category: "interior",
    img: "/src/assets/plantas para interior/Codiaeum Variegatum Pictum.jpg",
    stock: 20,
    descripcion:
      "El crotón ofrece una amplia variedad de colores para llenar tu casa de vida, desde el verde intenso hasta el amarillo o el rojo brillante.",
  },
  {
    id: "10",
    name: "Crassula Ovata",
    price: 2100,
    category: "interior",
    img: "/src/assets/plantas para interior/Crassula ovata.jpg",
    stock: 22,
    descripcion:
      "Conocida como planta de jade, es considerada una planta que atrae la buena suerte. Es muy fácil de mantener, ideal para principiantes.",
  },
  {
    id: "11",
    name: "Dracaena fragans",
    price: 3500,
    category: "interior",
    img: "/src/assets/plantas para interior/Dracaena fragans.jpg",
    stock: 10,
    descripcion:
      "Conocida como tronco de Brasil o palo del agua es una planta perfecta para iniciados en la jardinería. Prefiere los lugares frescos y no necesita de un riego constante para crecer de forma óptima. Además, tiene un porte muy llamativo gracias a su tronco ancho y hojas de color verde intenso.",
  },
  {
    id: "12",
    name: "Epipremnum aureum",
    price: 4300,
    category: "interior",
    img: "/src/assets/plantas para interior/Epipremnum aureum.jpg",
    stock: 15,
    descripcion:
      "Estas plantas son muy agradecidas y necesitan de muy pocos cuidados para lucir sus grandes y verdes hojas. Adornará cualquier rincón de tu hogar gracias a su tendencia colgante con efecto cascada. Además de su coloración y pocos cuidados es perfecta para mejorar la calidad del aire. Una planta todoterreno para descubrir y aprender más sobre los beneficios de la jardinería.",
  },
  {
    id: "13",
    name: "Euphorbia milii",
    price: 3800,
    category: "interior",
    img: "/src/assets/plantas para interior/Euphorbia milii.jpg",
    stock: 13,
    descripcion:
      "Esta planta es muy resistente y no necesita de un riego continuado para crecer. Sus cuidados sencillos, hacen a la también conocida como corona de espinas una muy buena opción para principiantes. Se caracteriza por contar con espinas de color gris y unas flores de color rojo llamativo, aunque hay algunas variedades con más colores, que estarán presentes en tu hogar durante todo el año.",
  },
  {
    id: "14",
    name: "Ficus lyrata",
    price: 3900,
    category: "interior",
    img: "/src/assets/plantas para interior/Ficus lyrata.jpg",
    stock: 19,
    descripcion:
      "También conocido como árbol lira, esta planta tropical originaría de África es una de las mejores opciones como planta para interior. Requiere de pocos cuidados y aporta un toque de color distintito gracias a sus llamativas hojas de color verde intenso. Colócala siempre en un lugar de tu hogar donde recibe luz de forma indirecta y donde la temperatura no baje de los 15 ºC.",
  },
  {
    id: "15",
    name: "Hedera helix",
    price: 5200,
    category: "interior",
    img: "/src/assets/plantas para interior/Hedera helix.jpg",
    stock: 10,
    descripcion:
      "Para los que quieren vestir sus paredes con un toque natural, la hiedra es una de las mejores opciones. Esta planta trepadora de hoja perenne y puede utilizarse tanto en interior como en exterior creando un efecto tapizante único. No requiere de muchos cuidados solo necesita un lugar espacioso y bien iluminado para crecer de forma natural. Verás que es una de las plantas de interior más resistentes y fáciles de cuidar.",
  },
  {
    id: "16",
    name: "Maranta leuconeura",
    price: 3800,
    category: "interior",
    img: "/src/assets/plantas para interior/Maranta leuconeura.jpg",
    stock: 25,
    descripcion:
      "Esta planta perenne es conocida también como maranta tricolor o planta de la oración. Este último nombre viene dado por la forma en que sus hojas se cierran ligeramente durante la noche. Para su crecimiento y desarrollo de necesita recibir luz constante, pero de forma indirecta, y estar situada en una zona húmeda. ",
  },
  {
    id: "17",
    name: "Monstera deliciosa",
    price: 6600,
    category: "interior",
    img: "/src/assets/plantas para interior/Monstera deliciosa.jpg",
    stock: 20,
    descripcion:
      "La conocida popularmente como costilla de Adán, debido a sus hojas grandes con aberturas, es originaria de Centroamérica y necesita de pocos cuidados específicos para su mantenimiento. Lo único realmente recomendando es colocarla en una zona espaciosa para que pueda crecer con libertad y colocarle un tutor para favorecer su crecimiento.",
  },
  {
    id: "18",
    name: "Nephrolepis exaltata",
    price: 3700,
    category: "interior",
    img: "/src/assets/plantas para interior/Nephrolepis exaltata.jpg",
    stock: 10,
    descripcion:
      "Los helechos son una elección segura para los que buscan plantas fáciles de cuidar con las que empezar a practicar sus conocimientos de jardinería básica. No requieren de cuidados específicos, aunque recomendamos colocarlos siempre que sea posible en semisombra y con una buena humedad ambiental. ",
  },
  {
    id: "19",
    name: "Peperomia polybotrya",
    price: 5400,
    category: "interior",
    img: "/src/assets/plantas para interior/Peperomia polybotrya.jpg",
    stock: 8,
    descripcion:
      "Con hojas grandes, carnosas de un color verde intenso y con forma de corazón la Peperomia polybotrya es una de las plantas más sencillas de cuidar. También es llamada corazón de hombre por la forma tan definida de sus hojas. esta planta solo requiere luz indirecta y una buena humedad ambiental para alegrar cualquier espacio.",
  },
  {
    id: "20",
    name: "Plectranthus verticillatus",
    price: 3100,
    category: "interior",
    img: "/src/assets/plantas para interior/Plectranthus verticillatus.jpg",
    stock: 12,
    descripcion:
      "Una de las plantas más conocidas y utilizadas para darle un poco de vida al interior de cocinas y salones. La planta del dinero cuenta con hojas carnosas y borde dentado con un color verde brillante. Es muy sencilla de cuidar por lo que siempre se recomienda a aquellos que empiezan a iniciarse en jardinera. Prefieren estancias luminosas, aunque sin recibir luz de forma directa, y un riego moderado.",
  },
  {
    id: "21",
    name: "Senecio Rowleyanus",
    price: 1500,
    category: "interior",
    img: "/src/assets/plantas para interior/Senecio Rowleyanus.jpg",
    stock: 20,
    descripcion:
      "Esta crasa originaria de África tan solo necesita estar en un lugar luminoso donde reciba la luz del sol durante un par de horas al día para su desarrollo. Su nombre común, planta rosario, le viene por la forma de su tallo alargado de los que penden bolitas del mismo color verde intenso.",
  },
  {
    id: "22",
    name: "Zamioculca",
    price: 2500,
    category: "interior",
    img: "/src/assets/plantas para interior/Zamioculca.jpg",
    stock: 15,
    descripcion:
      "La última de las plantas de interior resistentes y duraderas que te mostramos en este listado es la zamioculca. Esta planta tropical de hojas y tallos de color verde intenso es perfecta para novatos al ser muy poco exigente. De hecho, es que capaz de sobrevivir durante meses sin apenas riego. Perfecta para interiores, prefiere un lugar a la semisombra y un riego moderado.",
  },
  {
    id: "23",
    name: "Spathiphyllum",
    price: 2800,
    category: "interior",
    img: "/src/assets/plantas para interior/Spathiphyllum.jpg",
    stock: 15,
    descripcion:
      "Conocido como lirio de paz, el espatifilo o lirio de paz es una de las plantas con mayor capacidad para mejorar la calidad del aire. Además, su porte elegante y sus flores blancas aportan belleza y serenidad. Son perfectas para los novatos en jardinería ya que requieren de pocos cuidados específicos.",
  },
  {
    id: "24",
    name: "Sansevieria laurentii",
    price: 3000,
    category: "interior",
    img: "/src/assets/plantas para interior/Sansevieria laurentii.jpg",
    stock: 20,
    descripcion:
      "Es una planta muy fácil de cultivar y muy resistente, cuenta con unas hojas atigradas bastante llamativas y perfectas para darle un aspecto más vivo a tu casa. Además, no necesita de mucho espacio para crecer de forma óptima. De hecho, es una planta muy beneficiosa para cultivar en interiores ya que ayuda a eliminar impurezas en el ambiente.",
  },
  {
    id: "25",
    name: "Tillandsia cyanea",
    price: 4200,
    category: "interior",
    img: "/src/assets/plantas para interior/Tillandsia cyanea.jpg",
    stock: 8,
    descripcion:
      "Esta planta epifita de hojas largas y curvadas se caracteriza por contar, además, con brácteas en forma de espiga de color rosa, de ahí que también se le conozca como pluma rosa. Al igual que otras plantas de la familia de las bromelias, se recomienda regar por inmersión las raíces o utilizando un pulverizador. Por lo demás, no necesita de muchos cuidados para mantenerse como una planta que resalte cada pequeño rincón de la casa.",
  },
  {
    id: "26",
    name: "Clematis",
    price: 1500,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Clematis.jpg",
    stock: 20,
    descripcion:
      "También llamada clemátide, se trata en realidad de todo un género de plantas trepadoras de gran velocidad de crecimiento. Cuenta con una gran cantidad de especies y cultivares y se encuentra de forma natural en casi cualquier región templada del mundo. En el jardín, resiste muy bien los cambios de temperatura y apenas necesita cuidados, siendo la única excepción el hecho de que necesita un considerable nivel de humedad.",
  },
  {
    id: "27",
    name: "Hiedra",
    price: 2500,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Hiedra.jpg",
    stock: 15,
    descripcion:
      "El género Hedera cuenta con 15 especies, siendo la más conocida de ellas la hiedra común o Hedera helix. Se trata de una de las más conocidas plantas trepadoras y también de las más usadas en cobertura de muros y fachadas. Sus únicos cuidados destacables son que algunas de sus especies crecen tanto que es necesario controlarlas y que no tolera bien el sol directo.",
  },
  {
    id: "28",
    name: "Jazmín",
    price: 1800,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Jazmín.jpg",
    stock: 25,
    descripcion:
      "El género Jasminum cuenta con unas 200 especies, todas ellas provenientes de zonas tropicales y subtropicales y son unas de las mejores plantas de exterior fáciles de cuidar. Se trata de plantas trepadoras y arbustos de exterior, con unas flores blancas tan decorativas como fragantes. No es nada exquisito con sus cuidados, siendo su único requisito importante que requiere de abundante luz.",
  },
  {
    id: "29",
    name: "Palmito",
    price: 3000,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Palmito.jpg",
    stock: 10,
    descripcion:
      "Su nombre científico es Chamaerops humilis y se trata de la única palmera silvestre que existe con origen en Europa. Es una planta muy tupida, de porte bajo y con un sistema radicular de gran desarrollo. Es bastante resistente y su altura no supera habitualmente los 3 o 4 metros. Su debilidad son las heladas, que no tolera. Es una de las plantas de exterior que necesitan poca agua más fáciles de cuidar.",
  },
  {
    id: "30",
    name: "Col silvestre",
    price: 2200,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Col silvestre.jpg",
    stock: 12,
    descripcion:
      "A pesar de lo que se puede pensar, este tipo de col no comestible tiene un enorme valor decorativo gracias a sus hojas de tonos blancos, rosas y morados. Se le llama también col silvestre o col ornamental, aunque su nombre científico es Brassica oleracea. Soporta las heladas como pocas plantas y solo necesita un suelo rico o aporte de fertilizante.",
  },
  {
    id: "31",
    name: "Margarita",
    price: 2800,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Margarita.jpg",
    stock: 18,
    descripcion:
      "Las margaritas son especialmente resistentes cuando buscamos plantas de exterior resistentes al sol. En climas cálidos, estas flores arquetípicas y tan conocidas en todo el mundo no necesitarán apenas de ningún cuidado, siendo necesario solo regarlas de forma moderada en los meses cálidos, ya que en invierno será suficiente con lluvias o riegos esporádicos.",
  },
  {
    id: "32",
    name: "Crisantemo",
    price: 1600,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Crisantemo.jpg",
    stock: 30,
    descripcion:
      "Estas preciosas flores originarias de China y popularizadas en Japón son una gran forma de embellecer tu jardín a cambio de muy poco trabajo, especialmente en climas fríos o frescos, aunque no extremos. Lo único que necesitan es abundante luz indirecta para que sus flores se abran, siendo muy vistosas y fragantes. Los crisantemos alcanzan alturas de hasta metro y medio.",
  },
  {
    id: "33",
    name: "Agave",
    price: 2700,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Agave.jpg",
    stock: 14,
    descripcion:
      "Su nombre científico es Agave americana, aunque también se le llama Pita o Pitera. Es una crasa originaria de México, muy resistente a la sequía y a los suelos con escasez de nutrientes. Es muy valorada por su particular forma de roseta, tan característica de las agaváceas y llega a alcanzar alturas de hasta 2 metros. En suelo no necesita riego en absoluto, aunque en maceta sí requerirá de algunos ligeros.",
  },
  {
    id: "34",
    name: "Rosal",
    price: 2400,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Rosal.jpg",
    stock: 20,
    descripcion:
      "Los rosales son arbustos de la familia de las rosáceas, conocidos por sus preciosas y fragantes flores, populares en todo el mundo, y por sus espinas. A pesar de su popularidad, son arbustos de fácil cultivo, que solo necesitan abundante luz natural y un riego abundante durante sus meses de floración, especialmente si queremos ver rosas grandes y bonitas. Son muy adecuados para climas calurosos.",
  },
  {
    id: "35",
    name: "Lavanda",
    price: 2100,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Lavanda.jpg",
    stock: 22,
    descripcion:
      "Una de las plantas aromáticas más populares y apreciadas es la lavanda. Su éxito se debe a sus bonitas espigas florales, de tonos lilas y violetas que pueden verse durante todo el año, y al fresco y agradable aroma de estas, que se usa en todo tipo de productos. Es excepcionalmente resistente, tolerando bien tanto el frío como el calor, y solo necesita una buena cantidad de luz y riegos moderados.",
  },
  {
    id: "36",
    name: "Geranio",
    price: 3500,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Geranio.png",
    stock: 10,
    descripcion:
      "El geranio es una de las plantas decorativas más comunes en los jardines. Se pueden encontrar diferentes especies pero, en todos los casos, se trata de una planta muy estética debido a lo numerosas y vistosas que son flores, que pueden ir desde colores más habituales como rojos, rosas y blancos, hasta otros menos comunes como son el morado, el amarillo o incluso el naranja. ",
  },
  {
    id: "37",
    name: "Bugambilia",
    price: 4300,
    category: "exterior",
    img: "/src/assets/plantas para exterior/bugambilia.png",
    stock: 15,
    descripcion:
      "Si estás buscando una planta trepadora alternativa a los tradicionales rosales o a la hiedra pero con mucho color, la bugambilia es el ejemplar que estás buscando. Este precioso arbusto de origen brasileño ofrece preciosas flores rosadas, blancas, amarillas, salmón, rojas o moradas en ramas espinosas que pueden alcanzar hasta los 8 metros de altura. Se trata de un arbusto espectacular, especialmente durante los meses cálidos, en los que muestra su llamativa floración.",
  },
  {
    id: "38",
    name: "Flor pensamiento o Viola wittrockiana",
    price: 3800,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Flor pensamiento o Viola wittrockiana.png",
    stock: 13,
    descripcion:
      "La planta pensamiento o Viola x wittrockiana es una planta híbrida bianual que deriva de la viola tricolor. Fue cruzada en Europa del norte y actualmente cuenta con una enorme cantidad de variedades, con todo tipo de colores y tamaños de flor. Son plantas muy apreciadas en jardinería. Necesitan una zona muy luminosa y mantener la tierra húmeda sin encharcar.",
  },
  {
    id: "39",
    name: "Peonias",
    price: 3900,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Peonias.png",
    stock: 19,
    descripcion:
      "Las peonías, de nombre científico Paeoniaceae, son toda una familia de plantas con origen en Europa, América del Norte y China y sus alrededores. Las especies de peonías silvestres, que son 3, pueden encontrarse en la península ibérica y en el Magreb.",
  },
  {
    id: "40",
    name: "Jazmin Chino",
    price: 5200,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Jazmin Chino.png",
    stock: 10,
    descripcion:
      "El jazmín chino es una de las enredaderas con flores perfumadas más apreciadas por los aficionados a la jardinería, ya que no se trata de una planta exigente en sus cuidados y, en cambio, aporta mucho a cualquier espacio con el bonito verde de sus hojas y la cobertura blanca que sus flores forman en la época de floración, muy fragantes, además.",
  },
  {
    id: "41",
    name: "Glicina o wisteria",
    price: 3800,
    category: "exterior",
    img: "/src/assets/plantas para exterior/Glicina o wisteria.png",
    stock: 25,
    descripcion:
      "La wisteria, también llamada glicina o glicinia, es una de las plantas más utilizadas por decoradores y jardineros para cubrir grandes estructuras como pérgolas o paredes. Su nombre se refiere en realidad a todo el género Wisteria, con diferentes especies.",
  },
  {
    id: "42",
    name: "Romero",
    price: 6600,
    category: "exterior",
    img: "/src/assets/plantas para exterior/romero.png",
    stock: 20,
    descripcion:
      "El romero o Rosmarinus officinalis es una de las plantas medicinales y aromáticas más usadas para la cocina, la salud y la belleza. Por esto mismo, cada vez más personas quieren cultivar romero en casa. Quienes disponen de terrenos, como un huerto o un jardín, lo tienen más sencillo para cultivar esta planta, ya que en el suelo crece con mucha facilidad.",
  },
  {
    id: "43",
    name: "Clivias",
    price: 3700,
    category: "exterior",
    img: "/src/assets/plantas para exterior/clivias.png",
    stock: 10,
    descripcion:
      "La clivia es una planta tan bonita como fácil de cuidar, muy popular por su llamativa floración, que produce una sola vez al año en primavera, y que es de colores cálidos y muy vistosos.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
