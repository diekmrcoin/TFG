import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserMongoModule } from './db/user-mongo/user-mongo.module';
import { ProvidersModule } from './db/providers/providers.module';
import { UserModule } from './api/user/user.module';
import { LoginModule } from './api/login/login.module';
import { RoleMongoModule } from './db/role-mongo/role-mongo.module';
import { ProductModule } from './api/product/product.module';
import { ProductMongoModule } from './db/product-mongo/product-mongo.module';
import { HeadquarterMongoModule } from './db/headquarter-mongo/headquarter-mongo.module';
import { WarehouseMongoModule } from './db/warehouse-mongo/warehouse-mongo.module';
import { WarehouseModule } from './api/warehouse/warehouse.module';
import { HeadquarterModule } from './api/headquarter/headquarter.module';
import { NotificationMongoModule } from './db/notification-mongo/notification-mongo.module';
import { OrderMongoModule } from './db/order-mongo/order-mongo.module';
import { FamilyModule } from './api/family/family.module';
import { FamilyMongoModule } from './db/family-mongo/family-mongo.module';
import { AliveModule } from './api/alive/alive.module';
import { OpenfoodMongoModule } from './db/openfood-mongo/openfood-mongo.module';
import { InvoiceModule } from './api/invoice/invoice.module';
import { WebsocketsModule } from './websockets/websockets.module';
import configuration from './config/configuration';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';
import { ParishMongoModule } from './db/parish-mongo/parish-mongo.module';
import { ParishModule } from './api/parish/parish.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: 'silly',
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    }),
    ProvidersModule,
    UserMongoModule,
    RoleMongoModule,
    ProductMongoModule,
    HeadquarterMongoModule,
    WarehouseMongoModule,
    LoginModule,
    UserModule,
    ProductModule,
    HeadquarterModule,
    WarehouseModule,
    NotificationMongoModule,
    OrderMongoModule,
    FamilyModule,
    FamilyMongoModule,
    AliveModule,
    OpenfoodMongoModule,
    InvoiceModule,
    WebsocketsModule,
    ParishMongoModule,
    ParishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
