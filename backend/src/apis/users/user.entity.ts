import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
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

}
