import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity

@Entity()
export class Calculation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  num1: number;

  @Column()
  num2: number;

  @Column()
  operation: string;

  @Column()
  result: number;

  @Column()
  calculation: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: string;

  @ManyToOne(() => User, (author) => author.calculations)
  author: User;
}