import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {
  @Input("star") star: number;
  @Input("checkedAll") checkedAll: boolean;
  nStar: number;

  constructor() {}

  ngOnInit() {
    this.nStar = Array.apply(null, Array(this.star)).map(function(_, i) {
      return i;
    });
  }
}
