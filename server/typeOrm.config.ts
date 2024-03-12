import {DataSource, DataSourceOptions} from 'typeorm';
import {config} from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

console.log(__dirname)

export default new DataSource({
      type: 'postgres',
      host: configService.get<string>('DATABASE_HOST'),
      port: +configService.get<number>('DATABASE_PORT'),
      username: configService.get<string>('DATABASE_USER'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      database: configService.get<string>('DATABASE_NAME'),
      entities: [
        __dirname + '/src/**/*.entity{.ts,.js}',
      ],
      migrations: [
        __dirname +'/src/migrations/*{.ts,.js}',
      ],
      synchronize: false,
});