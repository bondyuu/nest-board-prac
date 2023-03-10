import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './boards.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createBoard.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('all')
    async findAll(): Promise<Board[]> {
        return this.boardsService.findAllBoards();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Board> {
        return this.boardsService.findBoardById(id);
    }

    @Post()
    async saveBoard(@Body() requestDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.saveBoard(requestDto);
    }

    // @Get()
    // getAllBoards() {
    //     return this.boardsService.getAllBoards();
    // }

    // @Post()
    // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    // @Get(':id')
    // getBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id);
    // }

    // @Delete(':id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }
}
