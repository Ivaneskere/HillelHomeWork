import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: String,
    priority: { type: String, enum: ["low", "mid", "high"], default: "low" },
    status: { type: String, enum: ["open", "done"], default: "open" }
}, { timestamps: true });

export default mongoose.model("Todo", todoSchema);
