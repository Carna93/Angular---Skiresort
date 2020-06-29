import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { SkiresortComponent } from './navbar/skiresort/skiresort.component';
import { TracksComponent } from './navbar/skiresort/tracks/tracks.component';
import { WeatherComponent } from './navbar/skiresort/weather/weather.component';
import { SkipassComponent } from './navbar/skiresort/skipass/skipass.component';
import { HttpClientModule } from '@angular/common/http';
import { SkiresortListComponent } from './navbar/skiresort/skiresort-list/skiresort-list.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkiresortComponent,
    TracksComponent,
    WeatherComponent,
    SkipassComponent,
    SkiresortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
