import Informacion from '../models/Informacion.js';

const agregarInformacion = async (req, res) => {

    const informacion = new Informacion( req.body );

    try {

        const informacionAgregada = await informacion.save();
        res.json({
            informacionAgregada
        });
        
    } catch (error) {
        console.log(error);
    }

}


const obtenerInfoPorCodigo = async (req, res) => {

    const { id } = req.params;
    console.log(id)
    const informacion = await Informacion.findOne({codigo_usuario: id});

    if( !informacion ) {
        res.status(404).json({
            msg: 'No encontrado'
        });
    }


    res.json({
        msg: 'Informacion por Codigo de usuario',
        informacion
    });

}

export {
    agregarInformacion,
    obtenerInfoPorCodigo
}