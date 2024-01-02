import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.schema';

@Injectable()
export class GetOnUserUseCase {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async execute(_id: string) {
    const user = await this.userModel.findOne({ _id }).exec();

    if (!user) {
      throw new NotFoundException(`User not foud`);
    }
    return user;
  }
}
