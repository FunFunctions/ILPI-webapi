import { PartialType } from '@nestjs/mapped-types';
import { CreateLegalGuardianDto } from './create-legal-guardian.dto';

export class UpdateLegalGuardianDto extends PartialType(
  CreateLegalGuardianDto,
) {
  id?: number;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
  birthDate?: Date;
}
