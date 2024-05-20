import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ResponseData } from 'src/libs/common/commonClass';

@ApiTags('products')
@Controller('products')
export class ProductController {
  private readonly _productService: ProductService;

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  @Get()
  index(): ResponseData {
    const products = this._productService.all();

    if (products.length === 0) {
      return ResponseData.notFound();
    }

    return ResponseData.success(products, 'Products retrieved successfully');
  }

  @Get(':id')
  show(): string {
    return 'This action returns a product';
  }

  @Post()
  store(): string {
    return 'This action adds a new product';
  }

  @Put(':id')
  update(): string {
    return 'This action updates a product';
  }

  @Delete(':id')
  destroy(): string {
    return 'This action removes a product';
  }
}
