import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll(): string {
    return 'Find all user test fonctionnal';
  }
  findOne(id: number) {
    return 'Find one user test fonctionnal';
  }

  create(data: any) {
    return 'Create test fonctionnal';
  }
  update(data: any) {
    return 'Update user test fonctionnal';
  }
  remove(id: number) {
    return 'Remove user test fonctionnal';
  }
}
