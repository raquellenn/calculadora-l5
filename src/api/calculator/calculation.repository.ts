import { CalculationDTO } from './calculation.dto';
import { CalculationService } from './calculation.service';

export class CalculationRepository<Calculation> {
  constructor(private calculationService: CalculationService) { }

  async createCalculation(calculation: CalculationDTO): Promise<Calculation> {
    return await this.calculationService.createCalculation(calculation);
  }

  async getCalculations(): Promise<Calculation[]> {
    return await this.find();
  }
}
