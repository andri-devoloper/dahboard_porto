import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Extract the leaderboard ID from the request URL
    const url = new URL(req.url);
    const leaderboardId = url.searchParams.get("id");

    if (leaderboardId) {
      // Retrieve a specific leaderboard and its associated category
      const leaderboard = await prisma.leaderboard.findUnique({
        where: { id: leaderboardId },
        include: { Catogory: true }, // Include the related category
      });

      if (!leaderboard) {
        return NextResponse.json(
          { status: "error", message: "Leaderboard not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(leaderboard);
    } else {
      // Retrieve all leaderboards and their associated categories
      const leaderboards = await prisma.leaderboard.findMany({
        include: { Catogory: true }, // Include the related categories for all leaderboards
      });

      return NextResponse.json(leaderboards);
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { status: "error", message: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

export async function POST(req: Request) {
  try {
    const { judul, kode, deskripsi, url_img, catogoryId } = await req.json();

    const newLeaderboard = await prisma.leaderboard.create({
      data: {
        judul,
        kode,
        deskripsi,
        url_img,
        catogoryId,
      },
    });

    return NextResponse.json(newLeaderboard, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 400 }
      );
    }
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.leaderboard.delete({
      where: { id },
    });

    return NextResponse.json(
      { status: "success", message: "Leaderboard entry deleted" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 400 }
      );
    }
  }
}
