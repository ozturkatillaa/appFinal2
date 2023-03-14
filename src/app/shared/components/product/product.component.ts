import { Component, Pipe, PipeTransform } from '@angular/core';
import { Product, ProductService, } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent {
  dataSource: Product[];


  selectedRows: number[] = [];

  selectionChangedBySelectbox: boolean;
  currency: any;
  events: Array<String>= [];
  productName:Product;


  constructor(private service: ProductService) {
    this.dataSource = service.getProducts();

  }

  // logEvent(productName : string) {
  //   if(this.productName.ProductName == productName)
  //   {
  //     this.events.unshift(productName)
  //   }
  //   else
  //   {
  //      false;
  //   }
  // }

  logEvent(eventName:any) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }


  selectionChangedHandler() {
    if (!this.selectionChangedBySelectbox) {
      this.currency = null;
    }

    this.selectionChangedBySelectbox = false;
  }
}

@Pipe({ name: 'stringifyProducts' })
export class stringifyProductsPipe implements PipeTransform {
  transform(products: Product[]) {
    return products.map((product) => `${product.ProductName} ${product.Price}`).join(', ');
  }

}
