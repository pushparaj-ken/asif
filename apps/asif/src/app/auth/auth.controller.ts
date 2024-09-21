import bcrypt from "bcryptjs";
import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import { CreateAuthDto } from '../auth/dto/auth.dto';
import _ from 'lodash';
import { getJWTToken } from "@asif/services";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class AuthController {

  async LoginDetails(req: any, res: any, next: any) {
    const data = req.body;
    try {
      let Adminuser = await prisma.adminUser.findUnique({ where: { email: data.email }, include: { role: true } });
      if (!Adminuser) {
        return next(new Error("User not found"));
      } else {
        const isMatch: boolean = bcrypt.compareSync(data.password, Adminuser.password);
        if (isMatch === false) {
          return next(new Error("Password does not match"));
        } else {
          const token = getJWTToken((Adminuser.slug).toString(), "Admin")
          let Adminuserdetails = _.omit(Adminuser, ['password']);
          let Data = {
            ...Adminuserdetails,
            token
          }
          return await responseService.apiSuccessResponse(res, Data);
        }
      }
    } catch (error) {
      next(error);
    }
  }

  async RegisterDetails(req: any, res: any, next: any) {
    const data = req.body;
    const passwordencrypt = await bcrypt.hash(data.password, 10);
    const NewUser = {
      ...data,
      password: passwordencrypt
    };
    try {
      const Admin = await prisma.adminUser.create({ data: NewUser });
      return await responseService.apiSuccessResponse(res, Admin);
    } catch (error) {
      next(error);
    }
  }

}


const authController = new AuthController();
export default authController;
