import { PartialType } from '@nestjs/mapped-types';
import { CreateLegalGuardianDto } from './create-legal-guardian.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateLegalGuardianDto extends PartialType(
  CreateLegalGuardianDto,
) {
  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
