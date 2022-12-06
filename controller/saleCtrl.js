const Sale = require("../model/Sale");

//To create sale
exports.postSaleInfo = async (req, res) => {

    try {

        const { nameClient, medicaPrescription, age } = req.body;

        if (!nameClient) {
            return res.status(422).json({ error: "Please add the info" })
        }

        if (!medicaPrescription) {
            return res.status(422).json({ error: "Please add your info" })
        }

        if (!age) {
            return res.status(422).json({ error: "Please add your age" })
        }



        const saleinfo = new Sale({
            nameClient,
            medicaPrescription,
            age,
        });

        const salePostResult = await Sale.create(saleinfo);

        res.status(201).json(salePostResult);

    } catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }

};

//To get all the sale list
exports.getSaleinfo = async (req, res) => {

    try {

        const saleList = await Sale.find({}).sort({ date: "DESC" });

        res.status(200).json(saleList);

    } catch (error) {
        res.status(400).json({ error: "Sale could not found..." });
    }
}

//To get single sale
exports.getSingleSaleInfo = async (req, res) => {

    try {

        var saleQuery = { _id: req.params.saleid }

        const singleSale = await Sale.findOne(saleQuery);

        res.status(200).json(singleSale);

    } catch (error) {
        res.status(404).json({ error: "Sale not found" });
    }

}

//To update sale info
exports.updateSaleInfo = async (req, res) => {

    try {

        const { nameClient, medicaPrescription, age } = req.body;

        var updateQuery = { _id: req.params.id };

        const payload = { nameClient, medicaPrescription, age };

        const saleUpdateinfo = await Sale.findByIdAndUpdate(updateQuery, {
            $set: payload,
        });

        res.status(200).json(saleUpdateinfo);

    } catch (error) {
        res.status(404).json({ error: "Sale not found to update" });

    }



}

//To delete sale
exports.deleteSale = async (req, res) => {

    try {

        var deleteQuery = { _id: req.params.id };

        const deleteSale = await Sale.findByIdAndDelete(deleteQuery);

        res.status(200).json(deleteSale);

    } catch (error) {
        res.status(404).json({ error: "Sale not found to delete" });
    }

}