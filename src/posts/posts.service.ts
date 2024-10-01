import { Injectable, NotFoundException } from '@nestjs/common';
import { GetPostDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: PostRepository,
    private categoriesService: CategoriesService,
  ) {}

  getPosts(getPostDto: GetPostDto): Promise<Post[]> {
    return this.postRepository.getPosts(getPostDto);
  }

  async getPost(id: string): Promise<Post[]> {
    const post = await this.postRepository.find({
      where: { id },
      relations: ['category'],
    });

    if (!post.length) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create(createPostDto);
    const category = await this.categoriesService.getCategory(
      createPostDto.categoryId,
    );
    newPost.category = category[0];
    return this.postRepository.save(newPost);
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const oldPost = await this.getPost(id);

    if (!oldPost.length) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    const editedPost = { ...oldPost[0], ...updatePostDto };
    return this.postRepository.save(editedPost);
  }

  async deletePost(id: string): Promise<void> {
    const result = await this.postRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }
}
