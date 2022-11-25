import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpCode,
  BadRequestException,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller("/posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    const { title, image, contents } = createPostDto;
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Res() res) {
    const posts = this.postsService.findAll();
    return res.status(200).send(posts);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (+id < 1) {
      throw new BadRequestException("id는 0보다 큰 값이어야 합니다.");
    }
    return this.postsService.findOne(+id);
  }

  @HttpCode(202)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postsService.remove(+id);
  }
}
