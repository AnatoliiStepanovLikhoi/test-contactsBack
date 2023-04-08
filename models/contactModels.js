const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    number: {
      type: Number,
      required: true,
    },

    // image: {
    //   type: String,
    //   validate: (value) => {
    //     value.startsWith("http");
    //   },
    // },

    // plot: {
    //   type: String,
    //   required: true,
    // },

    // isRead: {
    //   type: Boolean,
    //   default: false,
    // },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};
