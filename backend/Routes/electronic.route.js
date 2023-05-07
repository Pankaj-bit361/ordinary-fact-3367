const express = require("express");
const { ElectronicModel } = require("../Models/electronic.model");
const electronicRouter = express.Router();

electronicRouter.get("/", async (req, res) => {
  let userdata = await ElectronicModel.find();
  res.send(userdata);
});

electronicRouter.post("/add", async (req, res) => {
  try {
    const data = new ElectronicModel(req.body);
    console.log(req.body)
    await data.save();
    res.status(200).send({ msg: "Created Pharma" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

electronicRouter.patch("/update/:ID", async (req, res) => {
  const id = req.params.ID;
  try {
    await ElectronicModel.findByIdAndUpdate({ _id: id });
    res.status(200).send("data IS BEEDN updated");
  } catch (error) {
    res.status(400).send(error);
  }
});

electronicRouter.delete("/delete/:ID", async (req, res) => {
  const id = req.params.ID;
  try {
    await ElectronicModel.findByIdAndDelete({ _id: id });
    res.status(200).send("data IS BEEDN deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { electronicRouter };
