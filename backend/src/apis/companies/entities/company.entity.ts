import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/user.entity';

@Entity('company')
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
