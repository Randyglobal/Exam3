import { Component } from '@angular/core';
import { LocalService } from '../service/local-user/local.service';
import { ServiceService } from '../service/add-service/service.service';
import { ActivatedRoute } from '@angular/router';
import { ICard } from '../interface/user.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  constructor(private Details: ServiceService, private route: ActivatedRoute){}
  productId = new Date().getTime();
  Name = 'TvSet';
  name1 = 'BoxB'
  product: ICard = 
    {
      Name: this.Name,
      quantity: 1,
      price: 200,
      productId: this.productId
    }
    products: ICard = 
    {
      Name: this.name1,
      quantity: 1,
      price: 200,
      productId: this.productId
    }

  addToCard(product: ICard){
  this.Details.addToCart(product)
  alert('Product added to card')
  console.log(this.Details);
  
  }
}
