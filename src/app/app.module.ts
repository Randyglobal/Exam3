import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './navigate/nav/nav.component';
import { NavBarComponent } from './navigate/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AddCardComponent } from './card/add-card/add-card.component';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ViewcardComponent } from './card/viewcard/viewcard.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { Section2Component } from './section2/section2.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    MainComponent,
    NavComponent,
    NavBarComponent,
    FooterComponent,
    AddCardComponent,
    ProductsComponent,
    ViewcardComponent,
    DeleteCardComponent,
    Section2Component,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'details/:productId', component: ProductDetailsComponent },
      { path: 'view', component: ViewcardComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
