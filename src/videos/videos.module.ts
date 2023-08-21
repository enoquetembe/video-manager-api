import { Module } from '@nestjs/common'
import { VideosService } from './videos.service'
import { VideosController } from './videos.controller'
import { MulterModule } from '@nestjs/platform-express'
import * as multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {
    const uniqueFileName = uuidv4() + file.originalname
    cb(null, uniqueFileName)
  },
})

@Module({
  imports: [
    MulterModule.register({
      storage,
    }),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
