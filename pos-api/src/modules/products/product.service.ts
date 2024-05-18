import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
    all(): Array<string> {
        return ["Product 1", "Product 2", "Product 3"];
    }
}