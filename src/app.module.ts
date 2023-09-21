import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import database from './config/database.config';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        load: [database]
      })],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_CONNECTION_STRING')
      })
    }),
    ShopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
