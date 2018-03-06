import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-amenities",
  templateUrl: "./amenities.component.html",
  styleUrls: ["./amenities.component.css"]
})
export class AmenitiesComponent implements OnInit {
  @Input("amenity") amenity: string;
  icon: string;
  constructor() {}

  ngOnInit() {
    // console.log(this.amenity);
    this.icon = `i-${this.amenity} amenity`;
  }
}
