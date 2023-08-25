import dotenv from "dotenv";
dotenv.config();
import Express, { json } from "express";
import { router } from "./routes/index";
import sequelize from "./database/db";
import errorMiddleware from "./api/middlewares/error-middleware";
import cors from "cors";
import cookies from "cookie-parser";

const app = Express();
const PORT = 5000;

app.use(json());
app.use(cookies());
app.use(
    cors({
        Credential: true,
        origin: process.env.CLIENT_URL,
    })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync();
        await sequelize.sync({alter: true, force: true});
        app.listen(PORT, () => {
            console.log(`Server listening on PORT => ${PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
        process.exit(1);
    }
};

start();