import {
  Controller,
  Get,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BankService } from './bank.service';
import { BankPDFQueryDTO } from './dto/get-pdf.query.dto';

@Controller()
@ApiTags('银行行业')
export class BankController {
  constructor(private readonly backService: BankService) {}

  @ApiOperation({ summary: '银行行业-PDF-数据处理' })
  // @ApiBearerAuth()
  // @UseGuards(new JwtAuthGuard())
  @Get('/bank_pdf_chart_data')
  post(@Query(new ValidationPipe()) query: BankPDFQueryDTO) {
    return this.backService.getMetabase(query);
  }
}
