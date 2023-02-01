import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import swaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"

//swagger conncetion 
const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Employee Manager",
            version: "1.0.0",
            description: "User Management Api"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
    },
    apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(option);


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));

const server = app.listen(5000, () => console.log('Server up and running...'));


process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});