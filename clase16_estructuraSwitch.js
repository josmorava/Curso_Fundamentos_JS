//Estructura switch para mostrar oroscopo
//prompt => pregunta y pide datos
var signo = prompt('¿Cuál es tu signo?')
switch(signo){
    case 'aries':
        console.log('Hoy será una jornada óptima para planificar todos los deseos que anheló en su vida. Si se lo propone, en poco tiempo conseguirá alcanzarlos sin problemas.')
    break
    case 'tauro':
        console.log('En este momento, sentirá que ya no puede guardar más sus emociones. Compártalas con los demás y serán bien recibidas. Exprese todo lo que tiene adentro.')
    break
    case 'geminis':
    case 'géminis':
        console.log('Antes de realizar algún movimiento, procure definir cuáles son las prioridades en su vida y luego dedíquese a aquello que merece tanto atención.')
    break
    case 'cancer':
    case 'cáncer':
        console.log('Continuará con la Luna en su signo, le convendrá aprovechar este tránsito para lograr los objetivos que tiene en mente hace tiempo y nunca pudo lograr.')
    break
    case 'leo':
        console.log('Trate de enfocar la vida de forma responsable y paciente, de lo contrario, todo lo que se proponga podría diluirse rápidamente. Sea más ordenado.')
    break
    case 'virgo':
        console.log('De ahora en más, comience a poner distancia de las emociones internas y sea más racional a la hora de tomar una decisión. Evite guiarse por la percepción.')
    break
    case 'libra':
        console.log('No permita que ninguna persona lo bloquee en sus decisiones ni tampoco ejerza poder sobre su persona. Usted ya es adulto y sabé que hacer con su vida.')
    break
    case 'escorpio':
        console.log('Evite los esfuerzos y tómese el tiempo necesario para cumplir con todas sus obligaciones, ya que un cierto estado de indiferencia lo acompañará en el día.')
    break
    case 'sagitario':
        console.log('Será una etapa muy importante para los logros laborales y el reconocimiento social. Su inteligencia brillará en todos los aspectos y será bien adquirida por todos.')
    break
    case 'capricornio':
        console.log('Aparecerán algunas dificultades inesperadas y le harán imposible que cumpla con el cronograma de actividades que se había propuesto para el día de hoy.')
    break
    case 'acuario':
        console.log('En caso de que deba tomar una decisión, piénselo bien, ya que podría actuar de manera errónea. Manténgase firme en sus pensamientos y sea precavido.')
    break
    case 'piscis':
        console.log('Esté preparado, ya que su inseguridad conspirará en contra de todos sus objetivos. Proyecte las metas y trate de cumplirlas de una manera ordenada.')
    break
    default:
        console.log('No es un signo sodiacal válido')
    break
}