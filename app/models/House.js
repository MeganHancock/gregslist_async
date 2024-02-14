import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data._id || data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description || ''
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }


    get HouseCardHTMLTemplate() {
        return `
        <div class="col-12 mb-3">
            <div class="row bg-light rounded shadow border border-dark">
                <div class="col-md-4 px-0">
                    <img src="${this.imgUrl}" alt="${this.bedrooms} Bedrooms / ${this.bathrooms} Bathroom"
                        class="img-fluid rounded-start listing-picture">
                </div>
                <div class="col-md-8 p-3 bg-white">

                    <div class="d-flex justify-content-between">
                        <div>
                            <h2>${this.bedrooms} Bedrooms / ${this.bathrooms} Bathroom</h2>
                            <h3>$${this.price}</h3>
                            <h3>Listed on ${this.createdAt}</h3>
                        </div>
                       
                    </div>
                    <p>Year Built: ${this.year} | Levels: ${this.levels}</p>
                    <p>${this.description}</p>

                    <div class="m-3 d-flex justify-content-end align-items-baseline text-center p-1">
                    <p class="me-5">Listed by ${this.creator.name}</p>
                    <img class="creator-picture m-1"
                        src="${this.creator.picture}" alt="${this.creator.name}">

                </div>

                
            </div>

            </div>
        </div>
        
        `
    }
}


// const houseData = {

//     "_id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "levels": 2,
//     "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//     "year": 2003,
//     "price": 230000,
//     "description": "Super sick house",
//     "creatorId": "63f7d6202d1cf882287f12e2",
//     "createdAt": "2023-05-11T21:41:07.979Z",
//     "updatedAt": "2023-05-11T21:41:07.979Z",
//     "__v": 0,
//     "creator": {
//         "_id": "63f7d6202d1cf882287f12e2",
//         "name": "Charles Francis Xavier",
//         "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//         "id": "63f7d6202d1cf882287f12e2"
//     },
