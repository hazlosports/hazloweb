"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUserData(userId: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", userId)
      .single();

    if (error) return { success: false, msg: "Error getting User Data" };
    return { success: true, data: data };
  } catch (error: any) {
    console.log("Warning Error: ", error);
    return { success: false, msg: error.message };
  }
}
