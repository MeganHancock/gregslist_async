import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {

    constructor() {
        console.log('houses controller hooked on up');
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
            Pop.success('got houses')
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

}