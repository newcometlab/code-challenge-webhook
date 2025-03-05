import { Request, Response } from 'express';
import Message from '../models/MessageModel';

export const webhookController = {
    handleWebhook: async (req: Request, res: Response) => {
        try {
            const payload = JSON.stringify(req.body);
      
            const webhookData = new Message({ payload: payload ? JSON.stringify(payload) : '' });
            await webhookData.save();

            res.status(200).json({ status: true, data: webhookData });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ status: false });
        }
    },
};