import { Model, DataTypes } from "sequelize";
import sequelize from "../db_connections";

class UserPreferences extends Model {
  public id!: string;
  public user_id!: string;
  public home_city!: string;
  public activity_preferences!: object;
  public travel_history!: object;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

UserPreferences.init(
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
    home_city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    activity_preferences: {
      type: DataTypes.JSONB,
      defaultValue: {},
    },
    travel_history: {
      type: DataTypes.JSONB,
      defaultValue: {},
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
    tableName: "user_preferences",
    timestamps: true,
    underscored: true,
  }
);

export default UserPreferences;
