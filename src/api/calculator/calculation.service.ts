import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calculation } from './calculation.entity';
import { CalculationDTO } from './calculation.dto';

@Injectable()
export class CalculationService {
  constructor(
    @InjectRepository(Calculation)
    private calculationRepository: Repository<Calculation>,
  ) {}

  async createCalculation(
    @Body() createCalculationDto: CalculationDTO,
  ): Promise<Calculation> {
    const { num1, num2, operation, author } = createCalculationDto;
    const result = this.calculation(num1, num2, operation);
    const calculation = new Calculation();
    calculation.num1 = num1;
    calculation.num2 = num2;
    calculation.operation = operation;
    calculation.result = result;
    calculation.author = author;
    const date = new Date();
    calculation.timestamp = date.toISOString();
    return await this.calculationRepository.createCalculation(
      calculation.num1,
      calculation.num2,
      calculation.operation,
      calculation.author,
    );
  }

  async listCalculations(): Promise<Calculation[]> {
    return await this.calculationRepository.find();
  }

  private calculation(num1: number, num2: number, operation: string): number {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('Divisão por zero não é permitida.');
        }
        return num1 / num2;
      default:
        throw new Error('Operação inválida.');
    }
  }
}
