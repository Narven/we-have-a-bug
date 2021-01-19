import { Module } from '@nestjs/common';
import { CompanyModule } from './apis/companies/company.module';
import { AppController } from './app.controller';
import { UserModule } from './apis/users/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CompanyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
