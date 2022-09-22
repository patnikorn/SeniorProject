const express = require("express");

const Joi = require("joi");
const Validate = require("express-joi-validator");
const responseCode = require("../../configs/responseCode");

const infoModel = require("../../models/infoModel");
const infoDecorator = require("../../decorators/infoDecorator");

const router = express.Router();

router.get("/", async (request, response, next) => {
  const data1 = await infoModel.find({selectSubject:"DataScience"});
  const data2 = await infoModel.find({selectSubject:"SoftwareInnovation"});
  const data3 = await infoModel.find({selectSubject: {$nin: ['DataScience', 'SoftwareInnovation']}});
  console.log(data1)
  const DataScience = await data1.map((info) => infoDecorator.Decorator(info));
  const SoftwareInnovation = await data2.map((info) => infoDecorator.Decorator(info));
  const other = await data3.map((info) => infoDecorator.Decorator(info));
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    DataScience: DataScience,
    SoftwareInnovation:SoftwareInnovation,
    other:other,
  });
});

router.get("/:id", async (request, response, next) => {
  const data = await infoModel.find({ _id: request.params.id });

  const decorator = await data.map((info) => infoDecorator.Decorator(info));
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    data: decorator,
  });
});

router.post("/", async (request, response, next) => {
  const informationModel = await infoModel(request.body).save();
  const decorator = await infoDecorator.Decorator(informationModel);
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    data: decorator,
  });
});

router.post("/update", async (request, response, next) => {
  const informationModel = await infoModel.findOneAndUpdate(
    { _id: request.body.id },
    {
      $set: {
        userFirstName: request.body.userFirstName,
        userLastName: request.body.userLastName,
        userIdNumber: request.body.userIdNumber,
        email: request.body.email,
      },
    }
  );
  const decorator = await infoDecorator.Decorator(informationModel);
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    data: decorator,
  });
});

router.post("/upsubject", async (request, response, next) => {
  const informationModel = await infoModel.findOneAndUpdate(
    { _id: request.body.id },
    {
      $set: {
        selectSubject: request.body.selectSubject,
      },
    },
    { new: true }
  );
  const decorator = await infoDecorator.Decorator(informationModel);
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    data: decorator,
  });
});

router.get("/checkinfo/:id", async (request, response, next) => {
  const data = await infoModel.find({ userLineId: request.params.id });
  const decorator = await data.map((info) => infoDecorator.Decorator(info));
  response.json({
    code: responseCode.SUCCESS,
    message: "success",
    data: decorator,
  });
});

module.exports = router;
