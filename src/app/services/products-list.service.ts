import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductsListService {

  data: Product[] = [
    { code: 'P1000', nom: ' from service café', prixUnitaire: 1500 },
    { code: 'P2000', nom: 'from service Thé' , prixUnitaire: 1500 },
    { code: 'P3000', nom: 'from service Coca Cola' , prixUnitaire: 2500 },

  ];

  constructor() { }

  getAllProducts(): Product[] {
      return this.data ;
  }

}
