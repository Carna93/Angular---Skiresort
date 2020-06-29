import { Component, OnInit } from '@angular/core';
import { SkiresortList } from '../model/skiresort-server';
import { SkiresortService } from '../service/skiresort.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Skiresort:SkiresortList;

  constructor(private service:SkiresortService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>{
      this.Skiresort = data;
    });
  }

}
