import { Injectable } from '@nestjs/common';

import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Injectable()
export class GraphQLConfig implements GqlOptionsFactory {
  public createGqlOptions(): GqlModuleOptions {
    return {
      formatResponse: (resp) => {

        if (resp.errors) {

          resp.data = null;
        }

        return resp;
      },
      autoSchemaFile: 'schema.gql',
      path: '/prueba'
    };
  }
}
