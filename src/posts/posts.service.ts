import { Injectable } from "@nestjs/common";
import { Url } from "url";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {
  async createPost(title: string, image: string, contents: string) {
    await this.savePost(title, image, contents);

    return "This action adds a new post";
  }

  private savePost(title: string, image: string, contents: string) {
    return; //TODO: DB 연동 후 구현
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
