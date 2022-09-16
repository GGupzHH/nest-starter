import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankPDFQueryDTO } from './dto/get-pdf.query.dto';

@Controller()
export class BankController {
  constructor(private readonly backService: BankService) {}

  @Get('/bank_pdf_chart_data')
  post(@Query(new ValidationPipe()) query: BankPDFQueryDTO) {
    return this.backService.getMetabase(query);
  }
}
