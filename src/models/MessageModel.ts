import { Schema, model, Document } from 'mongoose';

export interface IMessage extends Document {
    payload: string;
    timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
    payload: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

export default model<IMessage>('Message', MessageSchema);