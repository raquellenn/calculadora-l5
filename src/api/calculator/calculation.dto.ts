import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { User } from '../user/user.entity';

export class CalculationDTO {
  @IsNotEmpty()
  @IsNumber()
  num1: number;

  @IsNotEmpty()
  @IsNumber()
  num2: number;

  @IsNotEmpty()
  @IsString()
  operation: string;

  @IsNotEmpty()
  @IsString()
  author: User;

  @Column()
  timestamp: string;
}
