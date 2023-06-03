import { Component } from '@angular/core';
import { ICard } from 'src/app/interface/user.interface';
import { ServiceService } from 'src/app/service/add-service/service.service';
import { MatDialog } from '@angular/material/dialog'
import { DeleteCardComponent } from 'src/app/delete-card/delete-card.component';


@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.scss']
})
export class ViewcardComponent {

  constructor(private storeCard: ServiceService, private dialog: MatDialog) { }
  productId = new Date().getTime();

  price = 200
  //To get items from array

  card: ICard = {
    Name: '',
    quantity: 1,
    price: this.price,
    productId: this.productId
  }
  item = this.storeCard.getItems()

  delete(item: any) {
    this.storeCard.deleteCart(item)
  }
  total() {
    let totalAmt = this.card.price * 2 / 100 ;
    let newAmt = totalAmt + this.card.price
    console.log(newAmt);
    alert("This is total" + newAmt)
    if (this.card.quantity === 2) {
      let Amout = newAmt * 2;
      alert(Amout)
    }
    if (this.card.quantity === 3) {
      let Amout = newAmt * 3;
      alert(Amout)
    }
    // let Total = 0;
    // this.item.map((a: any) => {
      // Total = this.card.quantity * 2%
    }
    //end

    // couter = 0;

    //   price = 200
    //   cards: ICard[] = [
    //     {
    //       Name: '',
    //       quantity: 0,
    //       price: this.price,
    //       productId: 0
    //     }
    //   ]

    //   ngOnInit(): void {
    //     let allTask =this.storeCard.getTasks();
    //     this.cards = [...this.cards, ...allTask.data]
    //   }
    //   deleteCard(productId: number){
    //     let newTask =  this.storeCard.deleteTasks(productId)
    //     this.cards = [...newTask as any]
    //     }
    //     increase(){
    //       this.couter++
    //     }
    //     decrease(){
    //       this.couter--
    //     }

    //     openTaskForm(){
    //       const dialogRef = this.dialog.open(DeleteCardComponent);
    //       dialogRef.afterClosed().subscribe({
    //        next: (val) => {
    //          if (val){

    //          }
    //        }
    //       })
    //      }
    // }
  }

