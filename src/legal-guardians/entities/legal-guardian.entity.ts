import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LegalGuardian {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'timestamptz' })
  birthDate: Date;

  @Column({ default: true })
  isActive: boolean;
}
