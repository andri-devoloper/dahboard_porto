import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma"; // Adjust the import based on your actual setup

// export async function GET(req: Request) {
//   try {
//     const url = new URL(req.url);
//     const key = url.searchParams.get("key");

//     // Check if the key is provided and valid
//     if (!key || key !== "ANDEV25002XCVKS") {
//       return NextResponse.json(
//         { status: "error", message: "Invalid or missing key" },
//         { status: 401 }
//       );
//     }

//     const leaderboards = await prisma.leaderboard.findMany();

//     return NextResponse.json(leaderboards);
//   } catch (error) {
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { status: "error", message: error.message },
//         { status: 500 }
//       );
//     }
//   }
// }

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const leaderboardId = url.searchParams.get("id");

    if (leaderboardId) {
      const leaderboard = await prisma.leaderboard.findUnique({
        where: { id: leaderboardId },
        include: { Catogory: true },
      });

      if (!leaderboard) {
        return NextResponse.json(
          { status: "error", message: "Leaderboard not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(leaderboard);
    } else {
      const leaderboards = await prisma.leaderboard.findMany({
        include: { Catogory: true },
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
