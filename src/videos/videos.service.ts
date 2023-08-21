import { Injectable } from '@nestjs/common'
import { CreateVideoDto } from './dto/create-video.dto'
import { UpdateVideoDto } from './dto/update-video.dto'
import { PrismaService } from 'src/prisma/prisma/prisma.service'
import { InvalidRelationError } from 'src/errors/invalid-relation'

@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService) {}

  async create(createVideoDto: CreateVideoDto & { file: Express.Multer.File }) {
    const categoryExists =
      (await this.prismaService.category.count({
        where: {
          id: createVideoDto.category_id,
        },
      })) !== 0

    if (!categoryExists) {
      throw new InvalidRelationError('Category not found')
    }

    return this.prismaService.video.create({
      data: {
        title: createVideoDto.title,
        description: createVideoDto.description,
        category_id: createVideoDto.category_id,
        file_path: createVideoDto.file.path,
      },
    })
  }

  findAll() {
    return this.prismaService.video.findMany()
  }

  findOne(id: string) {
    return this.prismaService.video.findUniqueOrThrow({
      where: { id },
    })
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    return this.prismaService.video.update({
      where: { id },
      data: updateVideoDto,
    })
  }

  remove(id: string) {
    return this.prismaService.video.delete({
      where: { id },
    })
  }
}
