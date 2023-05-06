const express = require("express");
const { PharmaModel } = require("../Models/pharma.model");
const pharmaRouter = express.Router();

pharmaRouter.get("/", async (req, res) => {
  let userdata = await PharmaModel.find();
  res.send(userdata);
});

pharmaRouter.post("/add", async (req, res) => {
      try {
        const data = new PharmaModel(req.body);
        await data.save();
        res.status(200).send({ msg: "Created Pharma" });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
})

pharmaRouter.patch("/update/:ID", async (req, res) => {
    const id=req.params.ID
    try {
        await PharmaModel.findByIdAndUpdate({ _id: id });
        res.status(200).send("data IS BEEDN updated");
    } catch (error) {
        res.status(400).send(error);
    }
})

pharmaRouter.delete("/delete/:ID", async (req, res) => {
  const id = req.params.ID;
  try {
    await PharmaModel.findByIdAndDelete({ _id: id });
    res.status(200).send("data IS BEEDN deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { pharmaRouter };
