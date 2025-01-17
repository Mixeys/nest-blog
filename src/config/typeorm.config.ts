import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'sqlite',
    database: configService.get('DATABASE'),
    autoLoadEntities: true,
    synchronize: true, // never true in production
    logging: true,
  }),
  inject: [ConfigService],
};
