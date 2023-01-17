import mongoose from "mongoose"

const specialSchema = mongoose.Schema(
    {
        customId: {
            type: Number,
            required: true
        },

        content: {
            type: String,
            required: true,
        },
        
        answers: {
            type: [{
            content: String,
            explanation: String
            }],
            required: true,
        },
    }

);

const Special = mongoose.model('specials', specialSchema);
export default Special;