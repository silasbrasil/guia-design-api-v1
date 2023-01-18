import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  firstName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @MinLength(1)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gender: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  avatar: string;
}
