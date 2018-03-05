import { Injectable } from "@angular/core";

import { Hotel } from "../models/hotel";

@Injectable()
export class DataService {
  hotels: Hotel[];
  constructor() {
    this.hotels = [
      {
        id: "249942",
        name: "Hotel Stefanos",
        stars: 3,
        price: 994.18,
        image: "4900059_30_b.jpg",
        amenities: [
          "safety-box",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "business-center"
        ]
      },{
        "id": "187306",
        "name": "Casa Andina Standard Miraflores Centro",
        "stars": 3,
        "price": 1218.06,
        "image": "85248126_b.jpg",
        "amenities": [
          "fitness-center",
          "children-club",
          "separate-bredroom",
          "deep-soaking-bathtub",
          "bathrobes"
        ]
      },
      {
        "id": "432536",
        "name": "Wyndham Costa Del Sol Lima City",
        "stars": 4,
        "price": 1749.25,
        "image": "10210122_194_b.jpg",
        "amenities": [
          "children-club",
          "beach",
          "nightclub",
          "beach-pool-facilities",
          "deep-soaking-bathtub"
        ]
      },
      {
        "id": "27227",
        "name": "Sonesta Hotel El Olivar Lima",
        "stars": 4,
        "price": 2339.9,
        "image": "525844_90_b.jpg",
        "amenities": [
          "restaurant",
          "coffe-maker",
          "business-center",
          "nightclub",
          "safety-box"
        ]
       }
    ];
  }
  getHotel(): Hotel[] {
    return this.hotels;
  }
}
