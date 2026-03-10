"use server";

import { connectToDatabase } from "@/database/mongoose";
import Watchlist from "@/database/models/watchlist.model";

export const getWatchlistSymbolsByEmail = async (
  email: string,
): Promise<string[]> => {
  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("Database connection failed");

    const user = await db.collection("user").findOne({ email });
    if (!user) return [];

    const userId = user.id || user._id?.toString();
    if (!userId) return [];

    const items = await Watchlist.find(
      { userId },
      { symbol: 1, _id: 0 },
    ).lean();

    return items.map((item) => item.symbol);
  } catch (error) {
    console.error("Failed to get watchlist symbols by email:", error);
    return [];
  }
};
