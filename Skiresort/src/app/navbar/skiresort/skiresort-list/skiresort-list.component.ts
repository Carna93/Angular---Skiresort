import { Component, OnInit, Input } from '@angular/core';
import { Skiresort } from 'src/app/model/skiresort';

@Component({
  selector: 'app-skiresort-list',
  templateUrl: './skiresort-list.component.html',
  styleUrls: ['./skiresort-list.component.css']
})
export class SkiresortListComponent implements OnInit {
  @Input() skiresort: Skiresort;
  
  constructor() { }

  ngOnInit(): void {
  }

}
