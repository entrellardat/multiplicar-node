const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite).then((mensaje) => { console.log(mensaje) });
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ` + `${archivo}`.green))
            .catch(e => console.log(e))
        break;
    default:
        console.log('comando no reconocido');
}