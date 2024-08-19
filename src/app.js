import express from 'express';
import routerFurnitures from './routes/furnitures.routes.js';
const app = express();
//settings
app.set("port",3000 || process.env.PORT);
//middlewares
app.use(express.json());
app.use("/api/furniture", routerFurnitures)
export default app;