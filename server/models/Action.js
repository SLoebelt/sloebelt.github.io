import mongoose from "mongoose"

const actionSchema = mongoose.Schema(
    {
        customId: {
            type: Number,
            required: true
        },

        content: {
            type: String,
            required: true,
        },

        solution: {
            type: {
                description: String,

                slides: {
                    type: [{
                    description: String,
                    mediaURL: String,
                    mimetype: String,
                    }],
                },
                
            },
            required: true,
        },

        difficulty: {
            type: Number,
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

const Action = mongoose.model('actions', actionSchema);
export default Action;