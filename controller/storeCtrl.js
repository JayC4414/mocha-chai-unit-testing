const Store = require("../model/Store");

//To create store
exports.postStoreInfo = async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {
            return res.status(422).json({ error: "Please add your name" })
        }


        const storeinfo = new Store({
            name,
        });

        const storePostResult = await Store.create(storeinfo);

        res.status(201).json(storePostResult);

    } catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }

};

//To get all the store list
exports.getStoreinfo = async (req, res) => {

    try {

        const storeList = await Store.find({}).sort({ date: "DESC" });

        res.status(200).json(storeList);

    } catch (error) {
        res.status(400).json({ error: "store could not found..." });
    }
}

//To get single store
exports.getSingleStoreInfo = async (req, res) => {

    try {

        var storeQuery = { _id: req.params.storeid }

        const singleStore = await Store.findOne(storeQuery);

        res.status(200).json(singleStore);

    } catch (error) {
        res.status(404).json({ error: "Store not found" });
    }

}

//To update store info
exports.updateStoreInfo = async (req, res) => {

    try {

        const { name } = req.body;

        var updateQuery = { _id: req.params.id };

        const payload = { name };

        const storeUpdateinfo = await User.findByIdAndUpdate(updateQuery, {
            $set: payload,
        });

        res.status(200).json(storeUpdateinfo);

    } catch (error) {
        res.status(404).json({ error: "Store not found to update" });

    }



}

//To delete store
exports.deleteStore = async (req, res) => {

    try {

        var deleteQuery = { _id: req.params.id };

        const deleteStore = await Store.findByIdAndDelete(deleteQuery);

        res.status(200).json(deleteStore);

    } catch (error) {
        res.status(404).json({ error: "Store not found to delete" });
    }

}