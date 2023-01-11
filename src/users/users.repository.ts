import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(newUser: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: newUser });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        gender: true,
        avatar: true
      },
      where: { id }
    });
  }

  findAll(maxPageSize: number): User[] {
    throw new NotImplementedException();
  }

  update(id: string, updateUser: Partial<User>): User {
    throw new NotImplementedException();
  }

  delete(id: string): String {
    throw new NotImplementedException();
  }
}
