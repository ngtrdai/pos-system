import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "../users/dto/user.dto";
import { UserService } from "../users/user.service";

@Controller('auth')
export class AuthController {
    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }

    @Post('register')
    async register(@Body() dto: CreateUserDTO) {
        return await this._userService.create(dto);
    }
}