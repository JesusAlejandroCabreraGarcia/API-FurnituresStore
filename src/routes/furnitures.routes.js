import { Router } from "express";
import { getAll, insertFurniture, getOne, deleteOne, updateOne } from "../controllers/furnitures.controllers.js";

const routerFurniture = Router();

routerFurniture.get("/getAll", getAll);
routerFurniture.post("/insertFurniture", insertFurniture);
routerFurniture.get("/getOne/:sku", getOne);
routerFurniture.delete("/deleteOne/:sku", deleteOne);
routerFurniture.put("/updateOne/:sku", updateOne);

export default routerFurniture;
