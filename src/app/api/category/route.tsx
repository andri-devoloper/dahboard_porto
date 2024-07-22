import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.catogory.findMany();
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  try {
    const { category } = await req.json();

    const newCategory = await prisma.catogory.create({
      data: {
        category,
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 400 }
      );
    }
  }
}
