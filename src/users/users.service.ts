import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
  @Inject(PrismaService)
  prisma: PrismaService

  findOne(username: string) {
    return this.prisma.user.findFirst({
      where: {
        username,
      },
    })
  }
}
