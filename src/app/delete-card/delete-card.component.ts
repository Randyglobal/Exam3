import { Component } from '@angular/core';
import { ServiceService } from '../service/add-service/service.service';
import { ICard } from '../interface/user.interface';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.scss']
})
export class DeleteCardComponent {
  constructor(private storeCard: ServiceService){}

  title = 'Are You Sure You Want To delete this Product?'
 productId = new Date().getTime();

 price = 200

  cards: ICard[] = [
   {
    Name: '',
    quantity: 0,
    price: this.price,
    productId: this.productId
  } 
  ]
  deleteCard(productId: number){
    let newTask =  this.storeCard.deleteTasks(productId)
    this.cards = [...newTask as any]
    }
}
