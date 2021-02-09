import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/commons/services';
import { UserGithubResolver } from './userGithub.resolver';

@Module({
  imports: [
    ServicesModule
  ],
  providers: [UserGithubResolver]
})
export class UserGithubResolverModule { }
