import { IsEnum, IsString } from 'class-validator';
import { PostStatus } from '../post-status.enum';

export class CreatePostDto {
  @IsString()
  readonly body: string;
  @IsString()
  readonly title: string;
  @IsEnum(PostStatus)
  readonly status: PostStatus;
  @IsString()
  readonly categoryId: string;
}
