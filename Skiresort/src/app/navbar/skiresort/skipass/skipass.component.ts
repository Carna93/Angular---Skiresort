import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skipass } from 'src/app/model/skipass';
import { Reservation } from 'src/app/model/reservation';

@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.css']
})
export class SkipassComponent implements OnInit {
  @Input() skipass:Array<Skipass>;
  @Output() newReservation = new EventEmitter<Reservation>();
  reservation:Reservation = new Reservation();

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice(){
    if(this.reservation.dateFrom && this.reservation.dateTo){
      let diffDays = this.reservation.calculateDateDifference();
      if(diffDays <1 || diffDays >7){
        console.log("Out of scope!");
        this.reservation.price = null;
      }
      for(let i=0; i<this.skipass.length;i++){
        if(this.skipass[i].duration == diffDays){
          this.reservation.price = this.skipass[i].price;
          break;
        }
      }
    }
  }

  saveReservation(){
    this.newReservation.emit(this.reservation);
    this.reservation = new Reservation();
  }

}
