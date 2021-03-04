import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import Business from './Business';
  import User from './User';
  
  @Entity('transactions')
  class Session {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    total_weighting: number

    @Column()
    type: 'income' | 'outcome';
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Business)
    @JoinColumn({ name: 'business_id' })
    business: Business;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Session;