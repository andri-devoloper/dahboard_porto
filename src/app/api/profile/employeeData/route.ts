import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";

const fetchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const resources = await cloudinary.v2.api.resources({
        type: 'upload',
        prefix: 'ANDEV_Leaderboard/',
        max_results: 10,  // Adjust the limit as needed
      });

      const urls = resources.resources.map(resource => resource.secure_url);
      res.status(200).json({ urls });
    } catch (error) {
      console.error("Error fetching photos:", error);
      res.status(500).json({ error: "Error fetching photos" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default fetchHandler;
``
