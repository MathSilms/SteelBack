import business from '@api/modules/business';
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
  
    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Business, business => business.id)
    @JoinColumn({ name: 'business_id' })
    business: Business;

    @Column()
    user_id: string;

    @Column()
    business_id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Session;