import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "../users/user.service";
import { PrismaService } from "src/libs/prisma/prisma.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService, UserService, PrismaService]
})

export class AuthModule { }