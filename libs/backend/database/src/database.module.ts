import { ormConfig } from '@angular-nestjs-vite/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
    }),
  ],
})
export class DatabaseModule {}
