import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Role } from '../../role/models/role.models'; // Correct import path

export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  roleId: number; // Remove type declaration as it's unnecessary

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Role, role => role.admin) // Update relationship definition
  @JoinColumn()
  role: any;
}

