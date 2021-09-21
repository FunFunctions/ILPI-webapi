import { Module } from '@nestjs/common';
import { LegalGuardiansService } from './legal-guardians.service';
import { LegalGuardiansController } from './legal-guardians.controller';

@Module({
  controllers: [LegalGuardiansController],
  providers: [LegalGuardiansService],
})
export class LegalGuardiansModule {}
