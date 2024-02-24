import prisma from '@/utils/connect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const mostViewedPost = await prisma.post.findFirst({
        orderBy: {
          views: 'desc',
        },
      });
      res.status(200).json(mostViewedPost);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  } else {
    // Handles any requests that aren't GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
