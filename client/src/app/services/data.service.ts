import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

import { Hotel } from "../models/hotel";

@Injectable()
export class DataService {
  domain: string = "http://localhost:3002";
  constructor(private http: HttpClient) {}
  getHotel(offset, limit) {
    return this.http
      .get<Hotel[]>(
        `${this.domain}/api/getHotels?offset=${offset}&limit=${limit}`
      )
      .map(res => res);
  }
  filter(stars, name, offset, limit) {
    return this.http
      .get<Hotel[]>(
        `${
          this.domain
        }/api/filter?stars=${stars}&name=${name}&offset=${offset}&limit=${limit}`
      )
      .map(res => res);
  }
}
