import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "../users/dto/user.dto";
import { UserService } from "../users/user.service";
import { ApiTags } from "@nestjs/swagger";
import { LoginDTO } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    private _userService: UserService;
    private _authService: AuthService;

    constructor(userService: UserService, authService: AuthService) {
        this._userService = userService;
        this._authService = authService;
    }

    @Post('register')
    async register(@Body() dto: CreateUserDTO) {
        return await this._userService.create(dto);
    }

    @Post('login')
    async login(@Body() dto: LoginDTO) {
        return await this._authService.login(dto);
    }
}