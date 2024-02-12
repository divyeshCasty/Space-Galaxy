import { Request, Response } from 'express'
import { Service } from 'typedi'
import { Repository } from 'typeorm'

import { appDataSource } from '../orm/connection'
import { User } from '../orm/entities/User'
import { HelperResponse } from '../utils/helperResponse'

@Service()
export class SpaceController {
  private readonly userRepo: Repository<User>
  private readonly helperResponse: HelperResponse

  constructor() {
    this.userRepo = appDataSource.getRepository(User)

    this.helperResponse = new HelperResponse()
  }

  async verifyLogin(req: Request, res: Response): Promise<any> {
    const body = req?.body

    const result = {
      isSuccess: true,
      message: 'User create success!',
    }

    console.log('result >>>',typeof result, result);

    return this.helperResponse.response(result, res)
  }
}
