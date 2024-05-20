import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/libs/prisma/prisma.service";
import { CreateUserDTO } from "./dto/user.dto";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
    private _prismaService: PrismaService

    constructor(prismaService: PrismaService) {
        this._prismaService = prismaService
    }

    async create(dto: CreateUserDTO) {
        const user = await this._prismaService.user.findUnique({
            where: {
                email: dto.email
            }
        })

        if (user) throw new ConflictException('Email duplicated');

        const newUser = await this._prismaService.user.create({
            data: {
                ...dto,
                password: await hash(dto.password, 10)
            }
        })

        const { password, ...res } = newUser;

        return res;
    }
}