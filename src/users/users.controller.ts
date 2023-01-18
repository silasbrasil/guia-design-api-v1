import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import { FindAllQuery } from './queries';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller({
  version: '1',
  path: 'users',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':userId')
  @ApiResponse({
    status: 200,
    description: 'The found record'
  })
  findOne(@Param('userId') userId: string): Promise<Partial<User>> {
    return this.usersService.findOne(userId);
  }

  @Get()
  findAll(@Query() findAllQuery: FindAllQuery) {
    return this.usersService.findAll(
      findAllQuery.maxPageSize,
      findAllQuery.pageToken,
    );
  }

  @Patch(':userId')
  @HttpCode(200)
  update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':userId')
  @HttpCode(204)
  remove(@Param('userId') userId: string) {
    return this.usersService.remove(userId);
  }
}
