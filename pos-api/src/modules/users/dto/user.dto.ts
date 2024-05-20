import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiPropertyOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
