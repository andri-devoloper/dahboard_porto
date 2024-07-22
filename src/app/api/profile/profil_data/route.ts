import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");

    if (userId) {
      const profiles = await prisma.profile.findUnique({
        where: { id: userId },
      });

      if (!profiles) {
        return NextResponse.json(
          { status: "error", message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(profiles);
    } else {
      // Retrieve all users if no ID is provided
      const profilesa = await prisma.profile.findMany();
      return NextResponse.json(profilesa);
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

export async function PUT(req: Request) {
  try {
    const { userId, email, name, rules, position, phone, company } =
      await req.json();

    // Cek apakah userId tersedia dalam payload
    if (!userId) {
      throw new Error("User ID is required for updating user data.");
    }

    // Perbarui data User
    const updatedUser = await prisma.user.update({
      where: {
        id: userId, // Sesuaikan dengan field id yang ada di model User
      },
      data: {
        email,
        name,
        rules,
        updatedAt: new Date(),
      },
    });

    // Perbarui data Profile (jika ada)
    const existingProfile = await prisma.profile.findFirst({
      where: {
        userId: userId, // Pastikan nama field dan nilai userId sesuai dengan yang diharapkan
      },
    });

    if (existingProfile) {
      await prisma.profile.update({
        where: {
          id: existingProfile.id,
        },
        data: {
          position,
          phone,
          company,
          updatedAt: new Date(),
        },
      });
    } else {
      // Buat profil baru jika tidak ada
      await prisma.profile.create({
        data: {
          userId,
          position,
          phone,
          company,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    return NextResponse.json({ status: "success", data: updatedUser });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
