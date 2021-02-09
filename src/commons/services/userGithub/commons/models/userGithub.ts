import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'Representa una cuenta de github' })
export class UserGithub {
        public static create(x: IUserGithub): UserGithub {

                if (x) {
            
                  const usuario: IUserGithub = new UserGithub();
                  usuario.login =  x.login;
                usuario.id = x.id;
                usuario.node_id = x.node_id;
                usuario.avatar_url = x.avatar_url;
                usuario.gravatar_id = x.gravatar_id;
                usuario.url = x.url;
                usuario.html_url = x.html_url;
                usuario.followers_url = x.followers_url;
                usuario.following_url = x.following_url;
                usuario.gists_url = x.gists_url;
                usuario.starred_url = x.starred_url;
                usuario.subscriptions_url = x.subscriptions_url;
                usuario.organizations_url = x.organizations_url;
                usuario.repos_url = x.repos_url;
                usuario.events_url = x.events_url;
                usuario.received_events_url = x.received_events_url;
                usuario.type = x.type;
                usuario.site_admin = x.site_admin;
                usuario.name = x.name;
                usuario.company = x.company;
                usuario.blog = x.blog;
                usuario.location = x.location;
                usuario.email = x.email;
                usuario.hireable = x.hireable;
                usuario.bio = x.bio;
                usuario.twitter_username = x.twitter_username;
                usuario.public_repos = x.public_repos;
                usuario.public_gists = x.public_gists;
                usuario.followers = x.followers;
                usuario.following = x.following;
                usuario.created_at = x.created_at;
                usuario.updated_at = x.updated_at
                  return usuario;
                }
              }
        @Field({ nullable: true, description: 'Login' })
        public login: string;

        @Field({ nullable: true, description: 'Código del producto' })
        public id: number;

        @Field({ nullable: true, description: 'Subtipo del producto' })
        public node_id: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public avatar_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public gravatar_id: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public html_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public followers_url: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public following_url: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public gists_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public starred_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public subscriptions_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public organizations_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public repos_url: string;
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public events_url: string;
        
        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public received_events_url: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public type: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public site_admin: boolean;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public name: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public company: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public blog: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public location: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public email: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public hireable: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public bio: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public twitter_username: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public public_repos: number;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public public_gists: number;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public followers: number;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public following: number;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public created_at: string;

        @Field({ nullable: true, description: 'Subcódigo del producto' })
        public updated_at: string;
}



export interface IUserGithub {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
        name: string;
        company: string;
        blog: string;
        location: string;
        email: string;
        hireable: string;
        bio: string;
        twitter_username: string;
        public_repos: number;
        public_gists: number;
        followers: number;
        following: number;
        created_at: string;
        updated_at: string
}

export interface IUserGithubs {
        usuarios: IUserGithub[];
}
      