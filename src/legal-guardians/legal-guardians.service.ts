import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLegalGuardianDto } from './dto/create-legal-guardian.dto';
import { UpdateLegalGuardianDto } from './dto/update-legal-guardian.dto';
import { LegalGuardian } from './entities/legal-guardian.entity';

@Injectable()
export class LegalGuardiansService {
  constructor(
    @InjectRepository(LegalGuardian)
    private legalGuardiansRepository: Repository<LegalGuardian>,
  ) {}

  create(createLegalGuardianDto: CreateLegalGuardianDto) {
    this.legalGuardiansRepository.insert(createLegalGuardianDto);
  }

  async findAll() {
    const legalGuardians = await this.legalGuardiansRepository.find();
    return legalGuardians;
  }

  async findOne(id: number) {
    const legalGuardians = await this.legalGuardiansRepository.findOne(id);
    return legalGuardians;
  }

  update(id: number, updateLegalGuardianDto: UpdateLegalGuardianDto) {
    this.legalGuardiansRepository.update(id, updateLegalGuardianDto);
  }

  async remove(id: number) {
    await this.legalGuardiansRepository.delete(id);
  }
}
