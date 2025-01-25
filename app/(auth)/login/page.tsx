import { LoginForm } from "@/components/auth/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[linear-gradient(to_bottom,#0EA8F5,#692EF8)]">
      <LoginForm />
    </div>
  );
}
