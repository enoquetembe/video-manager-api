import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateVideoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string | null

  @IsNotEmpty()
  category_id: string
}
