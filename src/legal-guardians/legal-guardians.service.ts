import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  create(CreateLegalGuardianDto: CreateLegalGuardianDto) {
    this.legalGuardiansRepository.insert(CreateLegalGuardianDto);
  }

  async findAll() {
    const legalGuardians = await this.legalGuardiansRepository.find();
    return legalGuardians;
  }

  async findOne(id: number) {
    const legalGuardian = await this.legalGuardiansRepository.findOne(id);
    if (!legalGuardian) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return legalGuardian;
  }

  async update(id: number, UpdateLegalGuardianDto: UpdateLegalGuardianDto) {
    const legalGuardian = await this.legalGuardiansRepository.findOne(id);
    if (!legalGuardian) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    this.legalGuardiansRepository.update(id, UpdateLegalGuardianDto);
  }

  async remove(id: number) {
    const legalGuardian = await this.legalGuardiansRepository.findOne(id);
    if (!legalGuardian) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.legalGuardiansRepository.delete(id);
  }
}
