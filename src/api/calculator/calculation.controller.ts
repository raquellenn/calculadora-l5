import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { CalculationDTO } from './calculation.dto';

@Controller('calculation')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Post()
  async create(@Body() calculationDto: CalculationDTO) {
    return this.calculationService.createCalculation(calculationDto);
  }

  @Get()
  async listCalculations() {
    return this.calculationService.listCalculations();
  }
}
