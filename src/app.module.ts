import { ResolversModule } from './resolvers/resolvers.module';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLConfig } from './config';
@Module({
  imports: [
    ResolversModule,
    HttpModule.register( {timeout: 18000 } ),
    GraphQLModule.forRootAsync({
      useClass: GraphQLConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
