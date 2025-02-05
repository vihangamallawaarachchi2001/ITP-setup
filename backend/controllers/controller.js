
const { GetAll, GetOne, Create, Update, deleteItem } = require("../services/service");

const getOneHandler = async (req, res) => {
    const { id } = req.params;  
    try {
        const item = await GetOne(id, SampleModel);  
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }
        res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching item",
        });
    }
};

const getAllHandler = async (req, res) => {
    const { pageNumber, filters } = req.query; 
    try {
        const response = await GetAll(pageNumber, filters); 
        res.status(200).json({
            success: true,
            data: response.items,
            pagination: {
                totalItems: response.totalItems,
                totalPages: response.totalPages,
                currentPage: response.currentPage,
                pageSize: response.pageSize,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching items",
        });
    }
};

const createHandler = async (req, res) => {
    try {
        const response = await Create(req.body, SampleModel);
        if (response.success) {
            res.status(201).json({
                success: true,
                message: "Item created successfully",
                data: response.data,
            });
        } else {
            res.status(400).json({
                success: false,
                message: response.message || "Error creating item",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error creating item",
        });
    }
};

const updateHandler = async (req, res) => {
    const { id, data } = req.body; 
    try {
        const response = await Update(id, data, SampleModel);
        if (response.success) {
            res.status(200).json({
                success: true,
                message: "Item updated successfully",
                data: response.data,
            });
        } else {
            res.status(404).json({
                success: false,
                message: response.message || "Item not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error updating item",
        });
    }
};

const deleteHandler = async (req, res) => {
    const { id } = req.body;  
    try {
        const response = await deleteItem(id, SampleModel); 
        if (response.success) {
            res.status(200).json({
                success: true,
                message: "Item deleted successfully",
                data: response.data,
            });
        } else {
            res.status(404).json({
                success: false,
                message: response.message || "Item not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error deleting item",
        });
    }
};

module.exports = {
    getOneHandler,
    getAllHandler,
    createHandler,
    updateHandler,
    deleteHandler,
};
