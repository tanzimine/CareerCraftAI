"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createUser() {
  const { userId, user } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (existingUser) {
      return existingUser;
    }

    // Create new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName ? `${user.firstName} ${user.lastName || ""}`.trim() : null,
        imageUrl: user.imageUrl,
      },
    });

    revalidatePath("/");
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
} 