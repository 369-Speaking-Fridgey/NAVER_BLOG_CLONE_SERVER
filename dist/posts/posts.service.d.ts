import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsService {
    createPost(title: string, image: string, contents: string): Promise<string>;
    private savePost;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
