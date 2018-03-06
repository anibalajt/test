import { Component } from "@angular/core";

import { Hotel } from "./models/hotel";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hotels: Hotel[] = [];
  hotelXpage: number = 8;
  offset: number = 0;
  limit: number = 8;
  total: number;
  btnshow: boolean = true;
  title = "app";
  stars: string = "";
  name: string = "";
  searchFilter: boolean = false;
  noData: boolean = false;
  constructor(public dataServices: DataService) {}

  ngOnInit() {
    this.getHotels();
  }
  handleSearchfor() {
    if (this.searchFilter) {
      this.handleHotelsFilter({
        stars: this.stars,
        name: this.name,
        filter: this.searchFilter
      });
    } else {
      this.getHotels();
    }
  }
  handleHotelsFilter(filter) {
    this.searchFilter = filter.filter;
    this.stars = filter.stars;
    this.name = filter.name;

    this.dataServices
      .filter(filter.stars, filter.name, this.offset, this.limit)
      .subscribe(hotels => {
        if (hotels.length == 0 && this.offset == 0) {
          this.noData = true;
        }else{
          this.noData = false;
        }
        this.hotels = [...this.hotels, ...hotels];

        this.btnshow = hotels.length < this.hotelXpage ? false : true;
        this.offset = this.limit;
        this.limit = this.limit + this.hotelXpage;
      });
  }
  getHotels() {
    this.dataServices.getHotel(this.offset, this.limit).subscribe(hotels => {
      this.hotels = [...this.hotels, ...hotels];

      this.btnshow = hotels.length < this.hotelXpage ? false : true;
      this.offset = this.limit;
      this.limit = this.limit + this.hotelXpage;
    });
  }
}
