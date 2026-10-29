
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import type { Product } from './product.interface.js';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
  ) {}

  // GET /products
  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  // GET /products/:id
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Product {
    return this.productsService.findOne(id);
  }

  // POST /products
  @Post()
  create(
    @Body() body: Omit<Product, 'id'>,
  ): Product {
    return this.productsService.create(body);
  }

  // PUT /products/:id
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Omit<Product, 'id'>,
  ): Product {
    return this.productsService.update(id, body);
  }

  // DELETE /products/:id
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ): Product {
    return this.productsService.remove(id);
  }
}
