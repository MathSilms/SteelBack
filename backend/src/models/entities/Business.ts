import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('business')
  class Business {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    login: string;
  
    @Column()
    email: string;
  
    @Column()
    razao_social: string;
  
    @Column()
    cnpj: string;

    @Column()
    cep: string;

    @Column()
    is_cooperative: boolean;
  
    @Column()
    password_hash: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Business;