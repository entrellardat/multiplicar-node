const fs = require('fs');
var colors = require('colors');


let data = '';

// module.exports.crearArchivo =
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });

    });
}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('========================================='.green);
        console.log(`TABLA DEL  ${base}`.green);
        console.log(`=========================================`.green);
        for (let i = 1; i < limite; i++) {
            console.log(`${base} * ${i} = ${ base * i}\n`);
        }

        let mensaje = 'todo correcto';
        resolve(mensaje);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}