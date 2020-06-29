import { Skiresort } from './skiresort';
export class SkiresortList{
    skiresortList:Skiresort[];
    constructor(obj?:any){
        this.skiresortList = obj && obj.map(data=>{
            return new Skiresort(data);
        }) || [];
    }
}