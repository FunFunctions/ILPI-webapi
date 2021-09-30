import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { LegalGuardiansService } from './legal-guardians.service';
import { CreateLegalGuardianDto } from './dto/create-legal-guardian.dto';
import { UpdateLegalGuardianDto } from './dto/update-legal-guardian.dto';

@Controller('legal-guardians')
export class LegalGuardiansController {
  constructor(private readonly legalGuardiansService: LegalGuardiansService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createLegalGuardianDto: CreateLegalGuardianDto) {
    return this.legalGuardiansService.create(createLegalGuardianDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.legalGuardiansService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.legalGuardiansService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateLegalGuardianDto: UpdateLegalGuardianDto,
  ) {
    return this.legalGuardiansService.update(+id, updateLegalGuardianDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.legalGuardiansService.remove(+id);
  }
}
