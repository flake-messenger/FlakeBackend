import { Resolver, Query, Args } from '@nestjs/graphql'

@Resolver('auth')
export class AuthResolver {
  @Query()
  getToken(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return
  }
}
