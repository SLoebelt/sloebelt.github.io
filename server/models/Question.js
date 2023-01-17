import mongoose from "mongoose"

const questionSchema = mongoose.Schema(
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
            correct: Boolean,
            explanation: String
            }],
            required: true,
        },

        hint: {
            type: [{
                content: String,
                used: Boolean,
                mediaURL: String,
                mimetype: String,
            }], 
             
        },

        
    }

);

const Question = mongoose.model('questions', questionSchema);
export default Question;