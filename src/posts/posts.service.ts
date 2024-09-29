import { Injectable } from '@nestjs/common';
import { GetPostDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';
@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  getPosts(getPostDto: GetPostDto) {
    return this.postRepository.find();
  }

  getPost(id: string) {
    return `post by id ${id}`;
  }

  createPost(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  updatePost(id: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  deletePost(id: string) {
    return `This action removes a #${id} post`;
  }
}
