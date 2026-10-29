
import { Injectable, NotFoundException } from '@nestjs/common';
import type { Product } from './product.interface.js';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Smartphone', price: 3500000 },
    { id: 2, name: 'Headset Bluetooth', price: 250000 },
    { id: 3, name: 'Smartwatch', price: 750000 },
  ];

  // Menampilkan semua produk
  findAll(): Product[] {
    return this.products;
  }

  // Menampilkan satu produk berdasarkan ID
  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // Menambahkan produk baru
  create(data: Omit<Product, 'id'>): Product {
    const nextId = this.products.length
      ? Math.max(...this.products.map((item) => item.id)) + 1
      : 1;

    const newProduct: Product = {
      id: nextId,
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  // Mengubah data produk
  update(id: number, data: Omit<Product, 'id'>): Product {
    const product = this.findOne(id);

    product.name = data.name;
    product.price = data.price;

    return product;
  }

  // Menghapus produk
  remove(id: number): Product {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    const [removedProduct] = this.products.splice(index, 1);
    return removedProduct;
  }
}
