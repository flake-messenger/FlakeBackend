import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    AuthModule,
    PrismaModule,
    UsersModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
