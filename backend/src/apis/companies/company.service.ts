import { Injectable } from '@nestjs/common';
import { getConnection, getConnectionManager } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    company.name = createCompanyDto.name;
    company.shortDescription = createCompanyDto.shortDescription;
    return company.save();
  }

  findAll(): Promise<Company[]> {
    return getConnection().getRepository<Company>(Company).find();
  }

  findOne(id: string): Promise<Company> {
    return getConnection().getRepository<Company>(Company).findOne(id);
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    await getConnection()
      .getRepository<Company>(Company)
      .update(id, updateCompanyDto);
    return getConnection()
      .getRepository<Company>(Company)
      .findOne(id);
  }

  remove(id: string) {
    return getConnection()
      .getRepository<Company>(Company)
      .delete(id);
  }
}
