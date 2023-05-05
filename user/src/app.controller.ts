import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get-users' })
  findAll(): string {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: 'get-one-user' })
  findOne(id: number) {
    console.log(id);
    return this.appService.findOne(id);
  }

  @MessagePattern({ cmd: 'post-user' })
  create(user: any) {
    console.log(user);
    return this.appService.create(user);
  }

  @MessagePattern({ cmd: 'update-user' })
  update(user: any) {
    console.log(user);
    return this.appService.update(user);
  }

  @MessagePattern({ cmd: 'remove-user' })
  remove(id: number) {
    return this.appService.remove(id);
  }
}
