import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, seconds } from '@nestjs/throttler';
import { DataSource } from 'typeorm';

// Modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModuleV1 } from './v1/products/products.module';
import { LocationsModule } from './v1/locations/locations.module';
import { CommandersModule } from './v1/commanders/commanders.module';
import { CommandersService } from './v1/commanders/commanders.service';
import { Commander } from './v1/commanders/entities/commander.entity';
import { ShipsModule } from './v1/ships/ships.module';
import { Ship } from './v1/ships/entities/ship.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: seconds(1),
      limit: 2,
    }]),
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: +configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [
          __dirname + '/**/*.entity{.ts,.js}',
        ],
        migrations: [
          __dirname + '/migrations/*{.ts,.js}',
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Commander, Ship]),
    ProductsModuleV1,
    AuthModule,
    UsersModule,
    LocationsModule,
    CommandersModule,
    ShipsModule],
  controllers: [AppController],
  providers: [
    AppService,
    CommandersService
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
