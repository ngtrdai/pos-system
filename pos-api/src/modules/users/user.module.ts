import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, PrismaService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
