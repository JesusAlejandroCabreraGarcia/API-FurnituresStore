import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    description: String,
    material: String,
    color: String,
    weight: Number,
    stock:Number,
    warranty: String,
    style: String,
    collectionFurniture: String
}, {
    versionKey: false
});

export default model('Furniture', furnitureSchema);
