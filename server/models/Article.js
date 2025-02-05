const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title must be filled out"]
  },
  content: {
    type: String,
    require: [true, "Content must be filled out"]
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  featured_image: {
    type: String
  },
  created_at: {
    type: Date
  }
});

articleSchema.pre("save", function() {
  this.created_at = new Date()
})

const Article = model("Article", articleSchema);
module.exports = Article;