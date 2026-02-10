import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const normalized = args.email.toLowerCase().trim();

    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", normalized))
      .first();

    if (existing) {
      return { alreadyJoined: true };
    }

    await ctx.db.insert("waitlist", {
      email: normalized,
      joinedAt: Date.now(),
    });

    return { alreadyJoined: false };
  },
});

export const getCount = query({
  handler: async (ctx) => {
    const entries = await ctx.db.query("waitlist").collect();
    return entries.length;
  },
});
