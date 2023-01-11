import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { AddressController } from './address.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AddressController],
})
export class AddressModule {}
