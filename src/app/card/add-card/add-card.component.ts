import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interface/user.interface';
import { ServiceService } from 'src/app/service/add-service/service.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit{
constructor(private addCard: ServiceService){}

 title = 'Please Fill Form'

 productId = new Date().getTime();
price = 200
 card: ICard = {
  Name: '',
  quantity: 0,
  price: this.price,
  productId: this.productId
} 

ngOnInit(): void {
  let allCards = this.addCard.price();
  // this.card.price = [...allCards.valueOf()]
}

 addData(){
  this.addCard.addCard(this.card)
 }
}
