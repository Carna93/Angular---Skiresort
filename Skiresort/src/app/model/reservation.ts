export class Reservation{
    _id:number;
    mountain_id:number;
    duration:number;
    price:number;
    firstName:string;
    lastName:string;
    dateFrom:ReserveDate;
    dateTo:ReserveDate;
    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.mountain_id = obj && obj.mountain_id || null;
        this.duration = obj && obj.duration || null;
        this.price = obj && obj.price || null;
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.dateFrom = obj && new ReserveDate(obj.dateFrom) || null;
        this.dateTo = obj && new ReserveDate(obj.dateTo) || null;
    }

    calculateDateDifference(){
        let oneDay = 24*60*60*1000;
        let fromDay = new Date(this.dateFrom.year, this.dateFrom.month, this.dateFrom.day);
        let toDay = new Date(this.dateTo.year, this.dateTo.month, this.dateTo.day);
        let diffDay = Math.round((toDay.getTime() - fromDay.getTime())/(oneDay));
        return diffDay;
    }
}

class ReserveDate {
    day:number;
    month:number;
    year:number;
    constructor(obj?:any){
        this.day = obj && obj.day || null;
        this.month = obj && obj.month || null;
        this.year = obj && obj.year || null;
    }
}