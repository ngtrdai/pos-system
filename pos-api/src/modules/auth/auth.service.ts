import { Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthService {
    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }
}