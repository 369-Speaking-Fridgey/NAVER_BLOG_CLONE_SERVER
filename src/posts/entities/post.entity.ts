import {
  Column,
  Entity,
  Long,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Post")
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  contents: string;
}
