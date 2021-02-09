import { HttpModule, HttpService, Module } from '@nestjs/common';
import { UserGithubServiceModule } from './userGithub/userGithub.module';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
@Module({
    imports: [UserGithubServiceModule,],
    exports: [UserGithubServiceModule]
})
export class ServicesModule {
}
