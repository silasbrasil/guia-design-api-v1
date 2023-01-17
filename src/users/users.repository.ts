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

  findById(id: string): Promise<Partial<User>> {
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

  findAll(maxPageSize: number, lastUserId?: string): Promise<Partial<User>[]> {
    // First Page
    if (!lastUserId) {
      return this.prisma.user.findMany({
        orderBy: { id: 'asc' },
        take: maxPageSize
      });
    }

    // Next Page
    return this.prisma.user.findMany({
      where: {
        id: { gt: lastUserId }
      },
      orderBy: { id: 'asc' },
      take: maxPageSize
    });
  }

  update(id: string, updateUser: Partial<User>): User {
    throw new NotImplementedException();
  }

  delete(id: string): String {
    throw new NotImplementedException();
  }
}
