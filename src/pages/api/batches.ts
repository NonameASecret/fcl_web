import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { model, date, quantity, licenseLevel, comment } = req.body;


    try {
      console.log('Creating batch...');
      await prisma.batch.create({
        data: {
          model,
          date: new Date(date),
          quantity,
          licenseLevel,
          comment,
          machines: {
            create: Array.from({ length: quantity }, (_, index) => ({
              // Assuming that serial numbers should be unique and generated here
              serialNumber: `${model}-${date}-${index + 1}-${Math.random().toString(16).slice(2)}`
            })),
          },
        },
        include: {
          machines: true, // Include the machines in the response
        },
      });

      console.log('Sending response...');
      res.status(201).json({message: 'success'});
    } 
    catch (error) {
      console.error('Error creating batch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}