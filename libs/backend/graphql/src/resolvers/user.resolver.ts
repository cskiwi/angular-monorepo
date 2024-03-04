import { User } from '@angular-nestjs-vite/backend-authorization';
import { AppUser } from '@angular-nestjs-vite/backend-database';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => AppUser, { nullable: true })
  async me(@User() user: AppUser): Promise<AppUser | null> {
    if (user?.id) {
      return user;
    } else {
      return null;
    }
  }
}
