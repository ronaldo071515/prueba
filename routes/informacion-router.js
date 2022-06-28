import { Router } from "express";

import {
    agregarInformacion,
    obtenerInfoPorCodigo 
} from '../controllers/informacion-controller.js';


const route = Router();


route.post('/', agregarInformacion);/* Para crear un registro */

route.get('/:id', obtenerInfoPorCodigo)/* Para obtener el registro por codigo de usuario */


export default route;