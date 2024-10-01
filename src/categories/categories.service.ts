import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  createCategory(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.title = createCategoryDto.title;
    return this.categoryRepository.save(category);
  }

  async getCategory(id: string): Promise<Category[]> {
    const category = await this.categoryRepository.find({
      where: { id },
      relations: ['posts'],
    });

    if (!category.length) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }
}
