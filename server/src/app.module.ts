import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, seconds } from '@nestjs/throttler';

// Modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModuleV1 } from './v1/products/products.module';
import { LocationsModule } from './v1/locations/locations.module';
import { CommandersModule } from './v1/commanders/commanders.module';
import { CommandersService } from './v1/commanders/commanders.service';
import { Commander } from './v1/commanders/entities/commander.entity';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: seconds(1),
      limit: 2,
    }]),
    ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Commander]),
    ProductsModuleV1,
    AuthModule,
    UsersModule,
    LocationsModule,
    CommandersModule],
  controllers: [AppController],
  providers: [
    AppService,
    CommandersService
  ],
})
export class AppModule {}
