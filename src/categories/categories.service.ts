/* eslint-disable no-useless-constructor */
import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from 'src/prisma/prisma/prisma.service'

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({
      data: createCategoryDto,
    })
  }

  findAll() {
    return this.prismaService.category.findMany()
  }

  findOne(id: string) {
    return this.prismaService.category.findUniqueOrThrow({
      where: {
        id,
      },
    })
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    })
  }

  remove(id: string) {
    return this.prismaService.category.delete({
      where: { id },
    })
  }
}
