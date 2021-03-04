import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cep: string;

    @Column()
    cpf: string;

    @Column({default:0})
    total_weighing: number;

    @Column({default:0})
    points: number;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id)
            this.id = uuid()
    }
 
}

export { User }