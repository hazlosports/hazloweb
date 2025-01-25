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
import { getWaitlistUsers } from "@/lib/chartFunctions";

export function WaitlistUsers() {
  const [data, setData] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getWaitlistUsers();
      if (res.success) {
        setData(res.data);
      } else {
        setError(res.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Total Waitlist</CardTitle>
        <CardDescription>Total Amount of Users in Waitlist</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-5xl text-white font-bold flex items-center justify-center h-32">
          {data !== undefined ? data : <Loading />}
        </h2>
      </CardContent>
      <CardFooter>{error && <FormError message={error} />}</CardFooter>
    </Card>
  );
}
