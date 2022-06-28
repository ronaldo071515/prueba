import mongoose from 'mongoose';

const informacionSchema = mongoose.Schema({
    direcion: {
        type: String,
        required: true
    },
    fecha_limite_pagos: {
        type: Date,
        required: true,
    },
    fecha_oportuna_pago: {
        type: Date,
        required: true
    },
    faccodi: {
        type: String,
        required: true
    },
    codigo_usuario: {
        type: Number,
        required: true
    },
    irreguaridad: {
        type: Boolean,
        required: true
    },
    pago_minimo: {
        type: Number,
        required: true
    },
    ciclo: {
        type: String,
        required: true
    },
    estado_conexion: {
        type: Boolean,
        required: true
    },
    suscname: {
        type: String,
        required: true
    },
    deuda_anterior: {
        type: Number,
        required: true
    },
    atrasos: {
        type: Number,
        required: true
    },
    deuda_total: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});



const Informacion = mongoose.model('Informacion', informacionSchema );

export default Informacion;