import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tracks } from 'src/app/model/tracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() tracks:Tracks;
  @Output() changeSort = new EventEmitter();
  sort:string;
  constructor() { }

  ngOnInit(): void {
  }

  updateCriteria(){
    this.changeSort.emit({"sort":this.sort});
  }

}
