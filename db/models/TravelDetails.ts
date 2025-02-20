import { Model, DataTypes } from "sequelize";
import sequelize from "../db_connections";

class TravelDetails extends Model {
  public id!: string;
  public user_id!: string;
  public location!: string;
  public start_date!: Date;
  public end_date!: Date;
  public num_people!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

TravelDetails.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "auth.users",
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    num_people: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
    tableName: "travel_details",
    timestamps: true,
    underscored: true,
  }
);

export default TravelDetails;
