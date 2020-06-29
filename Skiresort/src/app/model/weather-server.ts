import { Weather } from './weather';
export class WeatherList{
    weatherList:Weather[];
    constructor(obj?:any){
        this.weatherList = obj && obj.map(data=>{
            return new Weather(data);
        }) || [];
    }
}