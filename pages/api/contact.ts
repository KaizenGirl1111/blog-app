import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequestBody {
  name: string;
  email: string;
}

interface ApiResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'POST') {
    const { name, email }: ContactRequestBody = req.body;

    // Simulate processing
    console.log('Form submitted:', { name, email });

    res.status(200).json({ message: 'Thank you for your submission!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}