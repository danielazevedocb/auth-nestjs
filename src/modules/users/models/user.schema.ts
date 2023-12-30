import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  username: string;

  @Prop()
  id: string;

  @Prop()
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
