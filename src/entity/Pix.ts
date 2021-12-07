import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';


// ENTIDADE PIX - ONDE ARMAZENARÁ TODAS AS TRANSAÇÕES DE PIX

// Decorator TS
@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createAt: Date
    
    @UpdateDateColumn()
    updateAt: Date
}