import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from "../../models/hotel";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.css"]
})
export class HotelListComponent implements OnInit {
  @Input("hotels") hotels: Hotel[];
  @Input("btnshow") btnshow: boolean;
  @Output() handleSearchfor: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  searchfor() {
    this.handleSearchfor.emit();
  }
}
