import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductService, } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})

export class ProductComponent {
  dataSource: Product[];
  product: any;
  stock: any;
  price: any;
  currencyType: any;
  jsonValue:any;
  currency: any;
  productName:Product;
  selectedProduct:Product[];
  formGroup: FormGroup;
  formData: any = {};

  constructor(private service: ProductService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      productName: ['', Validators.required],
      stock: [''],
      price: [''],
      currencyType: ['']
    })

    this.dataSource = service.getProducts();

  }

  addProduct(){
    debugger
    let newData = new Product();

    newData.ID = Math.floor(Math.random() * 85) + 16;
    newData.ProductName = this.product;
    newData.Stock = this.stock;
    newData.Price = this.price;
    newData.CurrencyType = this.currencyType;

    this.dataSource.push(newData);
  }

  jsonData(){
    this.jsonValue = JSON.stringify(this.dataSource);
  }
}

