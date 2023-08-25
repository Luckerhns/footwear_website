import { DataTypes } from "sequelize";
import sequelize from "../db";

const Shoes = sequelize.define("shoes", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    price: { type: DataTypes.FLOAT, allowNull: false },
});

export default Shoes;
