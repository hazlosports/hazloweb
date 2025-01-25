"use server";

import { waitlistSchema } from "@/lib/zodSchemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function waitlistEmail(values: z.infer<typeof waitlistSchema>) {
  const supabase = await createClient();

  const validatedFields = waitlistSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ email }])
    .select();

  if (error) {
    console.log("Error: ", error.message);
    return { error: "Something went wrong!" };
  }

  revalidatePath("/", "layout");

  return { success: "Welcome to HAZLO!" };
}
