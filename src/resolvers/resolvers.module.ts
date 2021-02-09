import { Module } from '@nestjs/common';
import { UserGithubResolverModule } from './userGithub/userGithub.module';
@Module({
    imports: [UserGithubResolverModule],
    exports: [UserGithubResolverModule]
})
export class ResolversModule { }