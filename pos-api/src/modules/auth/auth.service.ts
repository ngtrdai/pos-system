import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { LoginDTO } from "./dto/auth.dto";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    private _userService: UserService;
    private _jwtService: JwtService;

    constructor(userService: UserService, jwtService: JwtService) {
        this._userService = userService;
        this._jwtService = jwtService;
    }

    async login(dto: LoginDTO) {
        const user = await this.validateUser(dto);
        const payload = {
            email: user.email,
            sub: {
                first_name: user.first_name,
                last_name: user.last_name
            }
        };

        return {
            user,
            tokens: {
                access_token: await this._jwtService.signAsync(payload, {
                    expiresIn: '1h',
                    secret: process.env.JWT_SECRET
                }),
                refresh_token: await this._jwtService.signAsync(payload, {
                    expiresIn: '7d',
                    secret: process.env.JWT_REFRESH_SECRET
                })
            }
        }
    }

    async validateUser(dto: LoginDTO) {
        const user = await this._userService.findByEmail(dto.email);

        if (user && (await compare(dto.password, user.password))) {
            const { password, ...res } = user;

            return res;
        }

        throw new UnauthorizedException('Invalid credentials');
    }
}