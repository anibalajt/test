import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  checkedAll: boolean;
  @Output() handleHotelsFilter: EventEmitter<any> = new EventEmitter();
  inputHotel: string = "";
  stars: string = "";
  constructor() {}

  ngOnInit() {}
  allChecked() {
    this.checkedAll = !this.checkedAll;
  }
  getValue(value) {
    this.inputHotel = value;
  }
  filterStars(filter) {
    let index = this.stars.indexOf(filter.stars);
    if (index > -1) {
      if (index == 0) {
        this.stars = this.stars.replace(`${filter.stars},`, "");
      } else {
        this.stars = this.stars.replace(`,${filter.stars}`, "");
      }
      if (index == 0 && this.stars.length == 1) {
        this.stars = this.stars.replace(`${filter.stars}`, "");
      }
    } else {
      this.stars += this.stars == "" ? filter.stars : `,${filter.stars}`;
    }
  }

  getHotels() {
    this.handleHotelsFilter.emit({
      stars: this.stars,
      name: this.inputHotel,
      filter: true
    });
  }
}
