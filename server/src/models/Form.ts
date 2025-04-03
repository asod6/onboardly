import mongoose, { Document, Schema } from "mongoose"; export interface IForm extends Document { title: string; fields: Array<{ name: string; type: string; required: boolean; options?: string[] }>; userId: mongoose.Types.ObjectId; createdAt: Date; updatedAt: Date; } const formSchema = new Schema({ title: { type: String, required: true, trim: true }, fields: [{ name: { type: String, required: true }, type: { type: String, required: true, enum: ["text", "number", "date", "select", "checkbox"] }, required: { type: Boolean, default: false }, options: [String] }], userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, createdAt: { type: Date, default: Date.now }, updatedAt: { type: Date, default: Date.now } }); formSchema.pre("save", function(next) { this.updatedAt = new Date(); next(); }); export const Form = mongoose.model<IForm>("Form", formSchema);
