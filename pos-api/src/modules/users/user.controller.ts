import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  @Get(':id')
  async show(@Param('id') id: number): Promise<string> {
    return `This action returns a user #${id}`;
  }
}
