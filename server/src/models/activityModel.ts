import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "activities", timestamps: true })
class Activity extends Model {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

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

}

export default Activity;