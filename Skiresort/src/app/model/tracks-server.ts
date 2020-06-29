import { Tracks } from './tracks';
export class TracksList{
    trackList:Tracks[];
    constructor(obj?:any){
        this.trackList = obj && obj.map(data=>{
            return new Tracks(data);
        }) || [];
    }
}