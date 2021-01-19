import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../companies/entities/company.entity';

@Entity('user')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Company, company => company.user)
  companies: Company[];
}
