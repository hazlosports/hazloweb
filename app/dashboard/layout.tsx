import { LogoutButton } from "@/components/shared/LogoutButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Logo } from "@/components/shared/Logo";
import { DashboardNavLinks } from "@/components/dashboard/DashboardNavLinks";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center py-2 px-8 border-b border-border bg-[#222222]">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex-1 ml-10">
          <nav className="flex flex-row items-start px-2 lg:px-4">
            <DashboardNavLinks />
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <LogoutButton />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
}
