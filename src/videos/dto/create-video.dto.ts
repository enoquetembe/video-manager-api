import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateVideoDto {
  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string | null

  @ApiProperty()
  @IsNotEmpty()
  category_id: string
}

export class CreateVideoWithUploadDto extends CreateVideoDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: string
}
