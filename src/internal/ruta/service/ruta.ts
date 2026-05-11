import type { AxiosResponse } from "axios";
import { instanceAxios } from "../../../app/config/instanceAxios";
import type { PosicionI } from "../interface/ruta";


export async  function regitsrarPosision(data:PosicionI):Promise<AxiosResponse> {
    try {
        const response = await instanceAxios.post("/ruta", data)
        return response
    } catch (error) {
        throw error
    }
}
