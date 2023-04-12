import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Calculation } from '../calculator/calculation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @OneToMany(() => Calculation, (calculation) => calculation.author)
  calculations: Calculation[];
}

}
