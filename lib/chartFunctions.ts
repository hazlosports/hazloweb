"use server";

import { createClient } from "@/utils/supabase/server";

export async function getHazloUsersNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id", { count: "exact" });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getVerifiedUsersNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "verified");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getHazloCoachesNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "coach");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getHazloCoaches() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id, name, username, email")
    .eq("role", "coach");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data };
}

export async function getHazloServicesNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "service");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getHazloMaleUsersNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "male");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getHazloFemaleUsersHazlo() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "female");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getHazloOtherGenderUsersNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "other");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getUsersPerMonth() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .select("created_at")
    .gte("created_at", `${new Date().getFullYear()}-01-01T00:00:00Z`)
    .lte("created_at", `${new Date().getFullYear()}-12-31T23:59:59Z`)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  // Group users by month
  const monthlyUserCount = Array(12).fill(0);
  data.forEach((user) => {
    const month = new Date(user.created_at).getMonth();
    monthlyUserCount[month] += 1;
  });

  // Calculate cumulative sum of users
  let cumulativeCount = 0;
  const cumulativeData = monthlyUserCount.map((count, index) => {
    cumulativeCount += count;
    return {
      month: new Date(0, index).toLocaleString("default", { month: "short" }),
      cumulativeCount,
    };
  });

  return cumulativeData;
}

export async function getWaitlistUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("waitlist")
    .select("id", { count: "exact" });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getWaitlistInfo() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data };
}

export async function getPostsNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id", { count: "exact" });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getPostsImageNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("file", { count: "exact" })
    .ilike("file", "%.png");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getPostsVideoNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("file", { count: "exact" })
    .ilike("file", "%.mp4");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}
