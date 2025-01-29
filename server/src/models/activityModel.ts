import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "activities", timestamps: true })
class Activity extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  peopleLimit!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image!: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  dates!: string[];

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  times!: string[];

}

export default Activity;