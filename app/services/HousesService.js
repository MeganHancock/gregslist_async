import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        console.log('got houses', response.data);

        const newHouses = response.data.map(housePOJO => new House(housePOJO))
        console.log('mapped over houses', newHouses);
        AppState.houses = response.data
    }


}

export const housesService = new HousesService()