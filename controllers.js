const { Doctores, Pacientes } = require("./models.js");


// ------- DOCTORES

exports.readDoctores = (req, res) => {
    Doctores.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readDoctor = (req, res) => {
    Doctores.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteDoctor = (req, res) => {
    Doctores.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateDoctor = (req, res) => {
    Doctores.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, direccion: req.body.direccion, especializacion: req.body.especializacion } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createDoctor = (req, res) => {
    const doctor = new Doctores({ nombre: req.body.nombre, apellidos: req.body.apellidos, direccion: req.body.direccion, especializacion: req.body.especializacion });
    doctor.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ PACIENTES

exports.readPacientes = (req, res) => {
    Pacientes.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readPaciente = (req, res) => {
    Pacientes.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deletePaciente = (req, res) => {
    Pacientes.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updatePaciente = (req, res) => {
    Pacientes.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, telefono: req.body.telefono, enfermedad: req.body.enfermedad } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createPaciente = (req, res) => {
    const paciente = new Pacientes({ nombre: req.body.nombre, apellidos: req.body.apellidos, telefono: req.body.telefono, enfermedad: req.body.enfermedad });
    paciente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}