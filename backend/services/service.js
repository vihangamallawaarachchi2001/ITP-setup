const GetOne = async (id, MODEL) => {
    try {
        const item = await MODEL.findOne({ _id: id });
        if (!item) {
            return null;
        }
        return item;
    } catch (error) {
        console.error("Error fetching item:", error);
        return null; 
    }
};

const GetAll = async (pageNumber = 1, filters = {}, MODEL) => {
    const pageSize = 20;
    try {
        const skip = ( pageNumber - 1 ) * pageSize;
        const items = await MODEL.find(filters)
                            .skip(skip)
                            .limit(pageSize)
        const totalItems = await MODEL.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / pageSize)

        return {
            items,
            totalItems,
            totalPages,
            currentPage: pageNumber,
            pageSize
        }
    } catch (error) {
        console.error("Error fetcing items : ", error);
        throw error
    }
}

const Create = async (data, MODEL) => {
    try {
        const createdItem = await MODEL.create({
            ...data
        })
        return {
            success: true,
            message: "Item created successfully.",
            data: createdItem,
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: error.message || "An error occurred while creating the item.",
        };
    }
}

const Update = async (id, data, MODEL) => {
    try {
        const updatedItem = await MODEL.findByIdAndUpdate(
            id,
            data,
            {new: true}
        )
        if (!updatedItem) {
            return {
                success: false,
                message: "Item not found.",
            };
        }
        return {
            success: true,
            message: "Item updated successfully.",
            data: updatedItem,
        }; 
    } catch (error) {
        console.error("Error while updating item:", error.message);
        return {
            success: false,
            message: error.message || "An error occurred while updating the item.",
        };
    }
}

const deleteItem = async (id, MODEL) => {
    try {
        const deletedItem = await MODEL.findByIdAndDelete(id);
        if (!deletedItem) {
            return {
                success: false,
                message: "Item not found.",
            };
        }
        return {
            success: true,
            message: "Item deleted successfully.",
            data: deletedItem,
        };
    } catch (error) {
        console.error("Error deleting item:", error.message);
        return {
            success: false,
            message: error.message || "An error occurred while deleting the item.",
        };
    }
};

module.exports = {
    GetOne,
    GetAll,
    Create,
    Update,
    deleteItem
}