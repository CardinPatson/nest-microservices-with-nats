import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  MessagePattern,
  EventPattern,
  ClientProxy,
} from '@nestjs/microservices';
import { USER_SERVICE } from './user.constants';
@Injectable()
export class UserService {
  constructor(@Inject(USER_SERVICE) private readonly client: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    //send a message to the microservice
    return this.client.send({ cmd: 'post-user' }, createUserDto);
  }

  findAll() {
    return this.client.send({ cmd: 'get-users' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'get-one-user' }, id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.client.send({ cmd: 'update-user' }, { id, updateUserDto });
  }

  remove(id: number) {
    return this.client.send({cmd : 'remove-user'}, id);
  }
}
