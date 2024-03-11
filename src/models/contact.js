import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        usename: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact',contactSchema);

export default  Contact;