import TemplateContent from '../Models/TemplateContent.js';

export const getTemplate =async(req,res) =>{
    try {
        const template = await TemplateContent.find();
        res.staus(200).json(template);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const createTemplate = async (req,res)=>{
    const temp= req.body;
    const newTemplate = new TemplateContent(temp);
    try {
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}