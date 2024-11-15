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
      type: 'postgres' /* recordar que debemos de tener una imagen activa dentro en nuestra computdarora para poder tener acceso a una base de datos el mayer  es bien raido es algo que se puede aprovechar  va a poner cualquier generador asi como asi hay sesgo es una empresa es la combinacion estrucutra y cosotos oferta y demanda esos acaban de levantar una  */,
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
