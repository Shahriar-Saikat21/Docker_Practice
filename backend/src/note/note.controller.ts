import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('createNote')
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  @Get('allNotes')
  async getNotes() {
    return await this.noteService.getNotes();
  }
}
