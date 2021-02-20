import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, password, email, number } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      password,
      email,
      number,
    });

    user.password = '';

    return response.json(user);
  }
}

export default UsersController;
