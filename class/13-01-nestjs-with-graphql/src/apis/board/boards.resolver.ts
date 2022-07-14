import { BoardService } from './boards.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String)
  getHello(): string {
    return this.boardService.getHello();
  }
}
