import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Array<Product>

  constructor(){
    this.products=[{
        ID: 1,
        ProductName: 'BAG',
        Stock: 5,
        Price: 7,
        CurrencyType: 'USD',

      }, {
        ID: 2,
        ProductName: 'ERASER',
        Stock: 2,
        Price: 6,
        CurrencyType: 'EUR',

      },
      {
          ID: 3,
          ProductName: 'PENCIL',
          Stock: 9,
          Price: 51,
          CurrencyType: 'USD',

        }, {
          ID: 4,
          ProductName: 'WALLET',
          Stock: 32,
          Price: 9,
          CurrencyType: 'USD',

        }, {
          ID: 5,
          ProductName: 'FORK',
          Stock: 7,
          Price: 79,
          CurrencyType: 'EUR',

        }, {
          ID: 6,
          ProductName: 'TELEPHONE',
          Stock: 52,
          Price: 712,
          CurrencyType: 'EUR',

        }, {
          ID: 7,
          ProductName: 'SPOON',
          Stock: 5,
          Price: 7,
          CurrencyType: 'TL',

        }, {
          ID: 8,
          ProductName: 'GLASS',
          Stock: 2,
          Price: 6,
          CurrencyType: 'USD',

        }, {
          ID: 9,
          ProductName: 'TABLE',
          Stock: 4,
          Price: 99,
          CurrencyType: 'EUR',

        }, {
          ID: 10,
          ProductName: 'CABLE',
          Stock: 8,
          Price: 3,
          CurrencyType: 'USD',

        }, {
          ID: 11,
          ProductName: 'NECKLES',
          Stock: 9,
          Price: 72,
          CurrencyType: 'USD',

        }, {
          ID: 12,
          ProductName: 'BOTTLE',
          Stock: 9,
          Price: 22,
          CurrencyType: 'EUR',

        }, {
          ID: 13,
          ProductName: 'AIR CONDITIONER',
          Stock: 2,
          Price: 179,
          CurrencyType: 'EUR',

        }, {
          ID: 14,
          ProductName: 'SCREEN',
          Stock: 5,
          Price: 75,
          CurrencyType: 'USD',

        }
    ]
  }

  getProducts():Product[]{
    return this.products;
  }

}

export class Product{
  ID: number;

  ProductName: string;

  Stock: number;

  Price: number;

  CurrencyType: string;


}
