import TemplateContent from "../Models/TemplateContent.js";
import boilerTemp from "../BoilerplateTemplate/BoilerTemplate1.js";
import htmlPDF from "html-pdf";
import getTheory from "../serverData/index.js";
export const getTemplate = async (req, res) => {
  res.sendFile(`${process.cwd()}/result.pdf`);
};
export const createTemplate = async (req, res) => {
  let option = { format: "A4" };
  req.body.Theory == ""
    ? (req.body.Theory = getTheory(req.body["Keyword"]))
    : console.log("Theory is present");
  htmlPDF.create(boilerTemp(req.body), option).toFile("result.pdf", (err) => {
    if (err) console.log(Promise.reject());

    console.log(Promise.resolve());
  });
  const temp = req.body;
  console.log(req.body.Name);
  const newTemplate = new TemplateContent(temp);
  try {
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
