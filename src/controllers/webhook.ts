import { Request, Response } from 'express';
import Message from '../models/MessageModel';

export const webhookController = {
    handleWebhook: async (req: Request, res: Response) => {
        try {
            let payload = '';

            const contentType = req.headers['content-type'];

            if (contentType?.includes('application/json')) {
              payload = JSON.stringify(req.body);
            } else if (contentType?.includes('text/plain')) {
              payload = req.body;
            } else if (contentType?.includes('application/x-www-form-urlencoded')) {
              payload = JSON.stringify(req.body);
            } else {
              payload = req.body.toString();
            }
      
            const webhookData = new Message({ payload });
            await webhookData.save();

            res.status(200).json({ status: true, data: webhookData });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ status: false });
        }
    },
};