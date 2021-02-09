import { Module } from '@nestjs/common';
import { userGithubService } from './userGithub.service';

@Module({
  imports: [],
  providers: [userGithubService],
  exports: [userGithubService]
})
export class UserGithubServiceModule { }
