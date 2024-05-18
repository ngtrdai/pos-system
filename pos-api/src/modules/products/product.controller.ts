import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('products')
@Controller('products')
export class ProductController {
    @Get()
    index(): string {
        return "This action returns all products";
    };

    @Get(':id')
    show(): string {
        return "This action returns a product";
    };

    @Post()
    store(): string {
        return "This action adds a new product";
    };

    @Put(':id')
    update(): string {
        return "This action updates a product";
    };

    @Delete(':id')
    destroy(): string {
        return "This action removes a product";
    };
}