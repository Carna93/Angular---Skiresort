import { Skipass } from './skipass';
export class SkipassList{
    skipassList:Skipass[];
    constructor(obj?:any){
        this.skipassList = obj && obj.map(data=>{
            return new Skipass(data);
        }) || [];
    }
}