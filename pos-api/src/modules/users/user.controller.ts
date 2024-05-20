import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { ResponseData } from 'src/libs/common/commonClass';
import { JwtGuard } from '../auth/guards/jwt.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
  private readonly _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get(':id')
  async show(@Param('id') id: number): Promise<any> {
    const user = await this._userService.findById(id);

    if (!user) {
      return ResponseData.notFound();
    }

    return ResponseData.success(user, 'User retrieved successfully');
  }
}
