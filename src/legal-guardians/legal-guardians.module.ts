import { Module } from '@nestjs/common';
import { LegalGuardiansService } from './legal-guardians.service';
import { LegalGuardiansController } from './legal-guardians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalGuardian } from './entities/legal-guardian.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LegalGuardian])],
  controllers: [LegalGuardiansController],
  providers: [LegalGuardiansService],
})
export class LegalGuardiansModule {}
