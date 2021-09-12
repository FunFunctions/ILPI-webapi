import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegalGuardiansService } from './legal-guardians.service';
import { CreateLegalGuardianDto } from './dto/create-legal-guardian.dto';
import { UpdateLegalGuardianDto } from './dto/update-legal-guardian.dto';

@Controller('legal-guardians')
export class LegalGuardiansController {
  constructor(private readonly legalGuardiansService: LegalGuardiansService) {}

  @Post()
  create(@Body() createLegalGuardianDto: CreateLegalGuardianDto) {
    return this.legalGuardiansService.create(createLegalGuardianDto);
  }

  @Get()
  findAll() {
    return this.legalGuardiansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legalGuardiansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegalGuardianDto: UpdateLegalGuardianDto) {
    return this.legalGuardiansService.update(+id, updateLegalGuardianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legalGuardiansService.remove(+id);
  }
}
