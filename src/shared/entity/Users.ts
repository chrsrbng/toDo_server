import { Column, Entity, PrimaryGeneratedColumn }  from 'typeorm'

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ipAddress: string;
}