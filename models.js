const mongoose = require ('mongoose');

const doctores = mongoose.model('doctores', 
  { nombre: String, apellidos: String, direccion: String, especializacion: String }
);

const pacientes = mongoose.model('pacientes',
    new mongoose.Schema({ nombre: String, apellidos: String, telefono: String, enfermedad: String })
);

module.exports = {
    doctores: doctores,
    pacientes: pacientes
}

// module.exports = {
//     doctores,
//     pacientes
// }
