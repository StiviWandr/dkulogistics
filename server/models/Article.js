import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    annotation: {type: String, required: true},
    articleFile: {type: String, required: true},
    journalId: {
        type: Schema.Types.ObjectId,
        ref: "Journal"
    }
})

const Article = mongoose.model("Article", ArticleSchema);

export default Article;