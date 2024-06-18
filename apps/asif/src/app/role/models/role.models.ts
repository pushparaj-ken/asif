import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Admin } from '../../adminusers/models/adminusers.models'; // Correct import path

export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Admin, admin => admin.role, {
    cascade: true
  })
  @JoinColumn()
  admin: any;
}

