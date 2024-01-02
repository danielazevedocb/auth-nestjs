import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.schema';

@Injectable()
export class ListUserUseCase {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async execute() {
    return this.userModel.find();
  }
}
