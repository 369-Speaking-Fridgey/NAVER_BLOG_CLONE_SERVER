import { Module, Post } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostEntity } from "./posts/entities/post.entity";
import { PostsController } from "./posts/posts.controller";
import { PostsModule } from "./posts/posts.module";
import { PostsService } from "./posts/posts.service";

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: "snorlax",
      password: "1234",
      database: "naverblog",
      entities: [PostEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
