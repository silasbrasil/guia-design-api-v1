import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { AddressModule } from './address/address.module';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AddressModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
