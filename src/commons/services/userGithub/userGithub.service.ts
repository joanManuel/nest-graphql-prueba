import { IUserGithub, UserGithub } from './commons/models/userGithub';
import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class userGithubService {
    constructor(private readonly httpService: HttpService){}
    
    public getUser(): Observable<UserGithub[]> {
        return this.httpService.get<IUserGithub[]>(`https://api.github.com/users`)
        .pipe(
            map((resp: AxiosResponse<IUserGithub[]>) => resp.data.map((user) => UserGithub.create(user)) )
        );
    }
}