import { Component, OnInit } from "@angular/core";
import { Hotel } from "../../models/hotel";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.css"]
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];
  constructor(public dataServices: DataService) {}

  ngOnInit() {
    // console.log(this.dataServices.getHotel());
    this.hotels = this.dataServices.getHotel();
  }
}
