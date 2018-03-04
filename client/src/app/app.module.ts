import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { StarsComponent } from "./components/stars/stars.component";
import { HotelComponent } from "./components/hotel/hotel.component";
import { HotelListComponent } from "./components/hotel-list/hotel-list.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarsComponent,
    HotelComponent,
    HotelListComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
