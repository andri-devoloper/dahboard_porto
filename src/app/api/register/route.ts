import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(req: Request) {
  try {
    // Extract the user ID from the request URL
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");

    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
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
      const users = await prisma.user.findMany();
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

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const hash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        rules: "User",
        password: hash,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }
  }
}
