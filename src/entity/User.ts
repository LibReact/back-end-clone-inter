import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


// ENTIDADE USER - ONDE ARMAZENARÁ TODOS OS USUARIOS

// Decorator TS
@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    accountNumber: number;

    @Column()
    accountDigit: number;

    @Column()
    wallet: number;

    @Column()
    email: string;

    @Column()
    password: string;

}