import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule), // forwardRef() is required to avoid circular dependency (see https://docs.nestjs.com/fundamentals/circular-dependency
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME || '24h' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
