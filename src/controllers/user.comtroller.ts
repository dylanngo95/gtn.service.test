import {Get, Route, Query, Controller } from "tsoa";
import { User } from "../models/user.model";

@Route("Users")
export class UsersController extends Controller {

  @Get("{id}")
    public async getUser(id: number, @Query() name: string): Promise<User> {

      const user: User = {
        email: "tinhngo@gmail.com" + "-" + name,
        id,
        createdAt: new Date()
      };
      return Promise.resolve(user);
    }

}
