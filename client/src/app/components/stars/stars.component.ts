import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {
  @Input("star") star: String;
  @Input("prefixes") prefixes: String;
  @Input("checkedAll") checkedAll: boolean;
  @Input("checkedHide") checkedHide: boolean;
  @Output() filterStars: EventEmitter<any> = new EventEmitter();

  nStar: number;
  clase: String;
  constructor() {}

  ngOnInit() {
    // console.log(this.prefixes);
    this.clase = `${this.prefixes}${this.star}`;
    this.nStar = Array.apply(null, Array(this.star)).map(function(_, i) {
      return i;
    });
  }
  filter(star) {
    this.filterStars.emit({
      stars: star
    });
  }
}
