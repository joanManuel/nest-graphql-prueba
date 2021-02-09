import { userGithubService } from './../../commons/services/userGithub/userGithub.service';
import { Query, Resolver } from "@nestjs/graphql";
import { UserGithub } from "src/commons/services/userGithub/commons";

@Resolver((of) => UserGithub)
export class UserGithubResolver {
    constructor(private readonly userGithubService: userGithubService) { }

    @Query(/* istanbul ignore next */(returns) => [UserGithub], { description: 'Retorna todos los usuarios' })
    public allUser(){
        return this.userGithubService.getUser()
    }
}