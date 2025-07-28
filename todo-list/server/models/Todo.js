const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Todo text is required"],
      trim: true,
      maxlength: [500, "Todo text cannot exceed 500 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Update the updatedAt field before saving
todoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Virtual for formatted date
todoSchema.virtual("formattedCreatedAt").get(function () {
  return this.createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
});

// Index for better query performance
todoSchema.index({ completed: 1, createdAt: -1 });

module.exports = mongoose.model("Todo", todoSchema);
