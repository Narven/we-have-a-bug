import { Module } from '@nestjs/common';
import { CompanyModule } from './apis/companies/company.module';
import { AppController } from './app.controller';
import { UserModule } from './apis/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: ['src/apis/**/*.entity.ts'],
      synchronize: true,
    }),
    UserModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
