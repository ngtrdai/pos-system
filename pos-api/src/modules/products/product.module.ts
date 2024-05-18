import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { CategoryProductController } from "./categories/category.product.controller";

@Module({
    controllers: [ProductController, CategoryProductController]
})

export class ProductModule { };