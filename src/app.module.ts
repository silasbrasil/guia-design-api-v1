import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    // ThrottlerModule.forRoot({
    //   ttl: 1,
    //   limit: 20,
    // }),
    UsersModule
  ],
})
export class AppModule {}
