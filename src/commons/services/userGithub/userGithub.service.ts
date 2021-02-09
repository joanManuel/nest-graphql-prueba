import { IUserGithubs, IUserGithub, UserGithub } from './commons/models/userGithub';
import { HttpService, Injectable } from '@nestjs/common';
// import { IUserGithub } from './commons';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
@Injectable()
export class userGithubService {
    constructor(private readonly httpService: HttpService){}
    
    public getUser() {
        return this.httpService.get<IUserGithubs>(`https://api.github.com/users/joanManuel`)
        .pipe(
            map((resp: AxiosResponse<IUserGithubs>) => resp.data.usuarios.map((account) => UserGithub.create(account)))
        );
    }
}