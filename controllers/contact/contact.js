import ContactUsSchema from "../../models/contactUsSchema.js";

export default async (req, res) => {
    try {
      const data = new ContactUsSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        mobileNumber: req.body.mobileNumber,
        subject: req.body.subject,
        category: req.body.category,
        message: req.body.message,
      });
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };