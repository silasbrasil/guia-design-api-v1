import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll(maxPageSize: number, currentPage: number) {
    const users = this.usersRepository.findAll(maxPageSize);

    const response = {
      results: users,
      nextPageToken: 'sdasdasdas',
    };

    return response;
  }

  findOne(id: string) {
    const user = this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
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
