import { Injectable } from '@nestjs/common';
import { CreateLegalGuardianDto } from './dto/create-legal-guardian.dto';
import { UpdateLegalGuardianDto } from './dto/update-legal-guardian.dto';

@Injectable()
export class LegalGuardiansService {
  create(createLegalGuardianDto: CreateLegalGuardianDto) {
    return 'This action adds a new legalGuardian';
  }

  findAll() {
    return `This action returns all legalGuardians`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legalGuardian`;
  }

  update(id: number, updateLegalGuardianDto: UpdateLegalGuardianDto) {
    return `This action updates a #${id} legalGuardian`;
  }

  remove(id: number) {
    return `This action removes a #${id} legalGuardian`;
  }
}
