import { Injectable } from '@angular/core';
import { ICard } from 'src/app/interface/user.interface';
import { LocalService } from '../local-user/local.service';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private localStore: LocalService ) { }
  //array method

    items: ICard[] = [];

    addToCart(product: ICard) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
    total() {
      let Total = 0;
      this.items.map((a: any)=>{
        Total += a.total
      })
    }
    deleteCart(product: any) {
     this.items.map((a:any, index: any) => {
      if (product.productId === a.productId) {
        this.items.splice(index,1)
      }
     })
    }
//localstorage method
  addCard(card: ICard,) {
   
    const setStore = this.localStore.get('Item');

    let setLocally: Object[] = []
    if (setStore.status == true) {
      setLocally = setStore.data
    }
    if (card["Name"] == '') {
      alert('Please Verify Your Inputs!!!');
      return;
    }
    setLocally.push(card)
    this.localStore.set('Item', setLocally)
    // alert('Item Added')
    // window.location.reload()
  }
  getTasks(){
    return this.localStore.get('Item')
  }
  counter(){
    let counter = 0;
    if (counter) {
      counter++
    }
    counter--
  }
  deleteTasks(productId: number | string){
    let product = sessionStorage.getItem('Task');
    let newArray:string[] = []
    if(product) {
      product = JSON.parse(product)
      if(product) {
  
        for(let j=0; j < product.length; j++) {
          // console.log(task[j])
          if((product[j] as any).taskId == productId) {
            console.log(product[j])
            newArray = [...product.slice(0, product.indexOf(product[j])) , ...product.slice(product.indexOf(product[j]) + 1, product.length)]
            console.log(newArray);                 
          }
        }
      }
    
    }
    return newArray

    }

  price(){
    let price: number = 200
    console.log(price);
  return price  
  }
  section2(){

  }
}
