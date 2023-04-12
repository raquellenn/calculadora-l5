import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../user/entitity';

@Entity()
export class Historic {
  @Column()
  @ManyToOne(() => User, (user) => user.historics)
  user: User;

  @Column()
  AtTime: Date;

  @Column()
  Operations: string;
}
