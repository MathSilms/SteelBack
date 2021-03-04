import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('legal_entities')
class LegalEntities {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    razao_social: string;

    @Column()
    cnpj: string;

    @Column()
    cep: string;

    @Column()
    is_cooperative:boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id)
            this.id = uuid()
    }
 
}

export { LegalEntities }