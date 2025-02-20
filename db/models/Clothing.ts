import { Model, DataTypes } from "sequelize";
import sequelize from "../db_connections";

class Clothing extends Model {
  public id!: string;
  public clothing_type!: string;
  public temperature_min!: number;
  public temperature_max!: number;
  public activity_type!: string;
  public ranking!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Clothing.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    clothing_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    temperature_min: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: true,
    },
    temperature_max: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: true,
    },
    activity_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "clothing",
    timestamps: true,
    underscored: true,
  }
);

export default Clothing;
