import TemplateContent from '../Models/TemplateContent.js';
import htmlPdf from 'html-pdf-node';
import boilerTemp from '../BoilerplateTemplate/BoilerTemplate1.js';
export const getTemplate =async(req,res) =>{
    try {
        const template = await TemplateContent.find();
        res.staus(200).json(template);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
const option ={ format:"A4",path:"../BoilerplateTemplate"};
export const createTemplate = async (req,res)=>{
     htmlPdf.generatePdf(boilerTemp(req.body.Name,req.body.RollNumber,req.body.CollegeName,req.body.Branch,req.body.Batch,req.body.ExperimentNo,req.body.Aim,req.body.Theory,req.body.Procedure,req.body.Apparatus,req.body.Observation,req.body.Conclusion),
     option)
         .then(pdfBuffer=>
 console.log(pdfBuffer))
 .catch(error=>console.log(error));
      
    const temp= req.body;
    console.log(req.body.Name);
    const newTemplate = new TemplateContent(temp);
    try {
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
