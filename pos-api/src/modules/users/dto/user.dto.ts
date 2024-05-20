import { IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    phone: string

    @IsEmail()
    email: string;

    @IsString()
    password: string
}