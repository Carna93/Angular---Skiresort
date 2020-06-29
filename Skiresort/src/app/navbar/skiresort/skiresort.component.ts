import { Component, OnInit } from '@angular/core';
import { SkiresortService } from 'src/app/service/skiresort.service';
import { Skiresort } from 'src/app/model/skiresort';
import { ActivatedRoute } from '@angular/router';
import { Tracks } from 'src/app/model/tracks';
import { WeatherList } from 'src/app/model/weather-server';
import { Skipass } from 'src/app/model/skipass';

@Component({
  selector: 'app-skiresort',
  templateUrl: './skiresort.component.html',
  styleUrls: ['./skiresort.component.css']
})
export class SkiresortComponent implements OnInit {
  Skiresort:Skiresort;
  Tracks:Tracks[];
  id:number;
  Weather:WeatherList;
  Skipass:Skipass[];

  constructor(private service:SkiresortService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      this.service.getResort(this.id).subscribe(data=>{
        this.Skiresort = data;
      });
      this.service.getTracks(this.id).subscribe(data=>{
        this.Tracks = data;
      });
      this.service.getWeather(this.id).subscribe(data=>{
        this.Weather = data;
      });
      this.service.getSkipass(this.id).subscribe(data=>{
        this.Skipass = data;
      });
    });
  }

  updateCriteria(criteria:string){
    this.service.getTracks(this.id,criteria).subscribe(data=>{
      this.Tracks = data;
    });
  }

  saveNewReservation(reservation){
    reservation.mountain_id = this.Skiresort._id;
    this.service.saveReservation(reservation).subscribe(data=>{
      window.alert("Reservation successfull!");
    }, err=>{
      window.alert("Error: " + err);
    });
  }

}
