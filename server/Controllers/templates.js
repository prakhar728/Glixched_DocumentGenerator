import TemplateContent from "../Models/TemplateContent.js";
// import htmlPdf from 'html-pdf-node';
import boilerTemp from "../BoilerplateTemplate/BoilerTemplate1.js";
import htmlPDF from 'html-pdf';
export const getTemplate = async (req, res) => {
    res.sendFile((`${__dirname}/result.pdf`));
//   try {
//     const template = await TemplateContent.find();
//     res.staus(200).json(template);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
};

export const createTemplate = async (req, res) => {
    // let option = { format: "A4", path: "../BoilerplateTemplate/myTemp.pdf" };
  // req.body.Name,req.body.RollNumber,req.body.CollegeName,req.body.Branch,req.body.Batch,req.body.ExperimentNo,req.body.Aim,req.body.Theory,req.body.Procedure,req.body.Apparatus,req.body.Observation,req.body.Conclusion
  //      htmlPdf.generatePdf(boilerTemp(req.body),
  //      option)
  //          .then(pdfBuffer=>
  //  console.log(pdfBuffer))
  //  .catch(error=>console.log(error));
  console.log(typeof(req.body));
   let option ={format:'A4'};
  htmlPDF.create(boilerTemp(req.body),option).toFile('result.pdf',(err)=>{
    if(err)  
    console.log(Promise.reject());

    console.log(Promise.resolve());
  })
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
