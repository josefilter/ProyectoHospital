const mongoose = require ('mongoose');

const Doctores = mongoose.model('Doctores', 
new mongoose.Schema({ nombre: String, apellidos: String, direccion: String, especializacion: String })
);

const Pacientes = mongoose.model('Pacientes',
    new mongoose.Schema({ nombre: String, apellidos: String, telefono: String, enfermedad: String })
);

module.exports = {
    Doctores: Doctores,
    Pacientes: Pacientes
}

// module.exports = {
//     doctores,
//     pacientes
// }
