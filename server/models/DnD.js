import mongoose from "mongoose"

const dndSchema = mongoose.Schema(
    {
        customId: {
            type: Number,
            required: true
        },

        content: {
            type: String,
            required: true,
        },

        searchedItems: {
            type: [{
                content: String,
                }],
                required: true,
        },

        options: {
            type: [{
            content: String,
            order: Number,
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

const DnD = mongoose.model('dnds', dndSchema);
export default DnD;