import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getMetabase(query: any) {
    const cleanAfterData = query;
    return cleanAfterData;
  }
}
