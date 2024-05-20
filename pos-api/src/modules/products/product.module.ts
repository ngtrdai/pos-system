import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CategoryProductController } from './categories/category.product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController, CategoryProductController],
  providers: [ProductService],
})
export class ProductModule {}
