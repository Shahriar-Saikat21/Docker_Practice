import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>
  ) {}

  async createNote(createNoteDto: CreateNoteDto) {
    const note = this.noteRepository.create(createNoteDto);
    const result = await this.noteRepository.save(note);
    return result ? { status: 200 } : { status: 500 };
  }

  async getNotes() {
    return this.noteRepository.find();
  }
}
