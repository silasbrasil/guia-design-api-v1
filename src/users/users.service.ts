import { Injectable, NotFoundException } from '@nestjs/common';
import { Base64Encoder } from 'src/utils';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findOne(id: string) {
    const user = this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
  }

  async findAll(maxPageSize: number, lastUserId?: string) {
    const results = await this.usersRepository.findAll(maxPageSize, lastUserId);

    const nextPageToken = results.length === maxPageSize
      ? new Base64Encoder(results[results.length - 1].id).value
      : null;

    const response = {
      results,
      nextPageToken,
    };

    return response;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.usersRepository.update(id, updateUserDto);

    if (!updatedUser) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return updatedUser;
  }

  remove(id: string) {
    const userId = this.usersRepository.delete(id);

    if (!userId) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return userId;
  }
}
