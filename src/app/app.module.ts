import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    ButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
