import furnitureDAO from "../daos/furnitures.dao.js";

export const getAll = async (req, res) => {
    await furnitureDAO.getAll()
    .then((furniture) => {
        res.json(furniture);
    })
    .catch((err) => {
        res.json({message: err});
    });
}

export const insertFurniture = async (req, res) => {
    await furnitureDAO.insertFurniture(req.body)
    .then((furniture) => {
        res.json(furniture);
    })
    .catch((err) => {
        res.json({message: err});
    });
}

export const getOne = async (req, res) => {
    await furnitureDAO.getOne(req.params.sku)
    .then((furniture) => {
        if(furniture != null)
            res.json(furniture);
        else
            res.json({message: "Furniture not found"});
    })
    .catch((err) => {
        res.json({message: err});
    });
}

export const updateOne = async (req, res) => {
    await furnitureDAO.updateOne(req.params.sku, req.body)
    .then((furniture) => {
        if(furniture != null)
            res.json({message: "Furniture updated"});
        else
            res.json({message: "Furniture not found"});
    })
    .catch((err) => {
        res.json({message: err});
    });
}


export const deleteOne = async (req, res) => {
    await furnitureDAO.deleteOne(req.params.sku)
    .then((furniture) => {
        if(furniture != null)
            res.json(furniture);
        else
            res.json({message: "Furniture not found"});
    })
    .catch((err) => {
        res.json({message: err});
    });
}
