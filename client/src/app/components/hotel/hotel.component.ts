import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "../../models/hotel";
@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"]
})
export class HotelComponent implements OnInit {
  @Input("hotel") hotel: Hotel;
  image: string;
  constructor() {}

  ngOnInit() {
    this.image = `url(./assets/images/hotels/${this.hotel["image"]})`;
  }
}
