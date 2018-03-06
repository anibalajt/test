import { Component, OnInit } from "@angular/core";
import { Hotel } from "../../models/hotel";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.css"]
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  hotelXpage: number = 8;
  offeset: number = 0;
  limit: number = 8;
  total: number;
  btnshow: boolean = true;
  constructor(public dataServices: DataService) {}

  ngOnInit() {
    this.getHotels(this.offeset, this.limit);
  }
  getHotels(offset, limit) {
    this.dataServices.getHotel(offset, limit).subscribe(hotels => {
      this.btnshow = hotels.length < this.hotelXpage ? false : true;
      this.hotels = [...this.hotels, ...hotels];
      this.offeset = this.limit;
      this.limit = this.limit + this.hotelXpage;
    });
  }
}
