import { HttpModule, HttpService, Module } from '@nestjs/common';
import { userGithubService } from './userGithub.service';

@Module({
  imports: [ HttpModule ],
  providers: [ userGithubService ],
  exports: [ userGithubService ]
})
export class UserGithubServiceModule { }
