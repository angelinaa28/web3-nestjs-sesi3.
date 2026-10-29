import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      { id: 1, name: 'Keyboard', price: 250000 },
      { id: 2, name: 'Mouse', price: 150000 },
      { id: 3, name: 'Monitor', price: 1500000 },
    ];
  }
}
