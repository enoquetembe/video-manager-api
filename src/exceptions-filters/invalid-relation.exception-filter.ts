import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { InvalidRelationError } from 'src/errors/invalid-relation'

@Catch(InvalidRelationError)
export class InvalidRelationExceptionFilter implements ExceptionFilter {
  catch(exception: InvalidRelationError, host: ArgumentsHost) {
    const errorContextExecution = host.switchToHttp()
    const response = errorContextExecution.getResponse()

    return response.status(422).json({
      message: exception.message,
    })
  }
}
