import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('products/categories')
@Controller('products/categories')

export class CategoryProductController {
    @Get()
    index(): string {
        return "This action returns all categories";
    };
};