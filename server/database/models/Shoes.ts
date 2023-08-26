import { DataTypes } from "sequelize";
import sequelize from "../db";

const Shoes = sequelize.define("shoes", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    shoes: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
});

export default Shoes;
