"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { FormError } from "@/components/form/FormError";
import { useEffect, useState } from "react";
import Loading from "@/components/charts/Loader";
import { getVerifiedUsersNumber } from "@/lib/chartFunctions";

export function HazloVerifiedUsersNumber() {
  const [data, setData] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getVerifiedUsersNumber();
      if (res.success) {
        setData(res.data);
      } else {
        setError(res.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="bg-[linear-gradient(to_right,rgba(14,168,245,0.6),rgba(105,46,248,0.6))] h-full">
      <CardHeader>
        <CardTitle>Hazlo Plus Members</CardTitle>
        <CardDescription>Total Amount of Verified Users</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-5xl text-white font-bold flex items-center justify-center ">
          {data !== undefined ? data : <Loading />}
        </h2>
      </CardContent>
      <CardFooter>{error && <FormError message={error} />}</CardFooter>
    </Card>
  );
}
