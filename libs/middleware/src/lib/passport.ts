import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(jwtOptions, async (payload: any, done: any) => {
  try {
    //const user = await Bankverbindungen.findOne({ BankverbindungId: payload.id });
    let user: any
    if (payload.sub === "Users") {
      //user = await prisma.adminUser.findUnique({ where: { slug: payload.id } });
    } else {
      user = await prisma.adminUser.findFirst({ where: { slug: payload.id.toString() } });
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Unauthorized' });
    }
  } catch (error) {
    return done(error, false);
  }
}));

export { passport };