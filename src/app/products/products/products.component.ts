import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Observable<any> | undefined;
  constructor(private productDataservice: ProductDataService) {}

  ngOnInit() {
    this.products = this.productDataservice.getAllProducts();
  }
}
