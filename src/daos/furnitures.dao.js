import Furniture from "../models/furniture.js";
const furnitureDAO = {};

furnitureDAO.getAll = async () => {
    return await Furniture.find();
}

furnitureDAO.insertFurniture = async (furniture) => {
    return await Furniture.create(furniture);
}

furnitureDAO.getOne = async (sku) => {
    return await Furniture.findOne({ sku: sku });
}

furnitureDAO.deleteOne = async (sku) => {
    return await Furniture.findOneAndDelete({ sku: sku });
}

furnitureDAO.updateOne = async (sku, furniture) => {
    return await Furniture.findOneAndUpdate({ sku: sku }, furniture);
}

export default furnitureDAO;
