import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/transaction.entity';
/* import { CategoryService } from './category/category.service';
 */ import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';
/* import { EncryptService } from './shared/encrypt.service';
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres' /* the nokie o the cokie */,
      host: 'autorack.proxy.rlwy.net:51073',
      port: 5432,
      username: 'postgres',
      password: 'bVJEBWjNQvROjrOBmcNbjBEpghWvsPmk',
      database: 'railway',
      entities: [User, Transaction, Category],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
