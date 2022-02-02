import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDataService } from './product-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from '../material-module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    MaterialExampleModule,
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers:[ProductDataService]
})
export class ProductsModule { }
