import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: Request) {
  try {
    // Extract the user ID from the request URL
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");

    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { Profile: true }, // Include the related profiles
      });

      if (!user) {
        return NextResponse.json(
          { status: "error", message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(user);
    } else {
      // Retrieve all users if no ID is provided
      const users = await prisma.user.findMany({
        include: { Profile: true }, // Include the related profiles for all users
      });
      return NextResponse.json(users);
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }
  }
}
