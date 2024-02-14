import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    const houses = AppState.houses
    console.log('houses in draw houses', houses[0])
    let htmlString = ''
    houses.forEach(house => htmlString += house.HouseCardHTMLTemplate)
    setHTML('houseListings', htmlString)
}

export class HousesController {


    constructor() {
        console.log('houses controller hooked on up');
        this.getHouses()
        AppState.on('houses', _drawHouses)
    }

    createHouse() {
        try {
            event.preventDefault()
            console.log('creating house');

            const form = event.target
            console.log('car form', form);
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
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