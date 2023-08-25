import { DataTypes } from "sequelize";
import sequelize from "../db";

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.JSON}
})

export default Size