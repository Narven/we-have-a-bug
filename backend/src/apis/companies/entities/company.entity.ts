import { BaseEntity, Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/user.entity';

export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    length: 80,
  })
  name: string;

  @Column({
    length: 255,
  })
  shortDescription: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => User, user => user.companies)
  user: User;
}
