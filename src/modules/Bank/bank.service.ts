import { Injectable } from '@nestjs/common';
import { BankPDFQueryDTO } from './dto/get-pdf.query.dto';

@Injectable()
export class BankService {
  async getMetabase(query: BankPDFQueryDTO) {
    const cleanAfterData = {};
    return cleanAfterData;
  }
}
