import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SkiresortList } from '../model/skiresort-server';
import { Skiresort } from '../model/skiresort';
import { Tracks } from '../model/tracks';
import { WeatherList } from '../model/weather-server';
import { Skipass } from '../model/skipass';
import { Reservation } from '../model/reservation';


const url = "http://localhost:3000/api/skiresorts";
@Injectable({
  providedIn: 'root'
})
export class SkiresortService {

  constructor(private http:HttpClient) { }

  getAll():Observable<SkiresortList>{
    return this.http.get(url).pipe(map(data=>{
      return new SkiresortList(data);
    }));
  }

  getResort(id:number):Observable<Skiresort>{
    return this.http.get(url+"/"+id).pipe(map(data=>{
      return new Skiresort(data);
    }));
  }

  getTracks(id:number, params?:any):Observable<Tracks[]>{
    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams().set("sort",params.sort && params.sort.toString() || '')
      }
    }
    return this.http.get<Tracks[]>(url+"/"+id+"/tracks", queryParams).pipe(map(data=>{
      let track = new Array<Tracks>();
      data.forEach(element => track.push(new Tracks(element)));
      return track;
    }));
  }

  getWeather(id:number):Observable<WeatherList>{
    return this.http.get(url+"/"+id+"/weather").pipe(map(data=>{
      return new WeatherList(data);
    }));
  }

  getSkipass(id:number):Observable<Skipass[]>{
    return this.http.get<Array<Skipass>>(url+"/"+id+"/skipass").pipe(map(data=>{
      let skipass = new Array<Skipass>();
      data.forEach(element => skipass.push(new Skipass(element)));
      return skipass;
    }));
  }

  saveReservation(reservation:Reservation){
    return this.http.post(url+"/"+reservation._id+"/skipass",reservation);
  }
}
