import { Component } from '@angular/core';
import { AddCardComponent } from '../card/add-card/add-card.component';
import { MatDialog } from '@angular/material/dialog'
import { IAdd, ICard } from '../interface/user.interface';
import { ServiceService } from '../service/add-service/service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog, private addCard: ServiceService){}

  productId = new Date().getTime();
  counter = 1;
  // newCounter = this.counter++
   price = 200;
   Name = 'TvSet';
  name1 = 'BoxB';
  name2 = 'CpuA';
  name3 =  'BlackBoardD'

   card: ICard = {
    Name: this.Name,
    quantity: 0,
    price: this.price,
    productId: this.productId
  } 
  cards: IAdd = {
    Name: this.name1,
    quantity: 0,
    price: this.price,
    productId: this.productId
  } 
  cardD: IAdd = {
    Name: this.name2,
    quantity: 0,
    price: this.price,
    productId: this.productId
  } 
  cardAdd: IAdd = {
    Name: this.name3,
    quantity: 0,
    price: this.price,
    productId: this.productId
  } 
  openTaskForm(){
    const dialogRef = this.dialog.open(AddCardComponent);
    dialogRef.afterClosed().subscribe({
     next: (val) => {
       if (val){
 
       }
     }
    })
   }
   addData(){
    // let counter = 0;
    this.addCard.addCard(this.card)
    this.card.quantity
    // counter++
    // console.log(counter);
    
   }
   addDatas(){
    let counter = 0;
    this.addCard.addCard(this.cards)
    counter++
    console.log(counter);
   }
   Datas(){
    let counter = 0;
    this.addCard.addCard(this.cardD)
    counter++
    console.log(counter);
   }
   Data(){
    let counter = 0;
    this.addCard.addCard(this.cardAdd)
    counter++
    console.log(counter);
   }
   increase(){
    this.counter++
  }
  decrease(){
    this.counter--
  }
}
