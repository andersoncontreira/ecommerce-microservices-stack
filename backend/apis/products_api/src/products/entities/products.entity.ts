import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: true})
    name: string;

    @Column({ nullable: true})
    description: string;

    @Column({ nullable: true})
    price: number;
}
