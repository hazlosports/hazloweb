"use client";

import { signOut } from "@/app/(auth)/actions";
import { LogOut } from "lucide-react";
import { Button } from "../ui/Buttons";

export function LogoutButton() {
  const onClick = () => {
    signOut();
  };

  return (
    <Button onClick={onClick}>
      <LogOut className="size-4 mr-2" />
      Log Out
    </Button>
  );
}
