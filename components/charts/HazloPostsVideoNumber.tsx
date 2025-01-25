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
import { getPostsVideoNumber } from "@/lib/chartFunctions";

export function HazloPostsVideoNumber() {
  const [data, setData] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPostsVideoNumber();
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
        <CardTitle>Total Video Posts</CardTitle>
        <CardDescription>Total Video Posts Published</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-5xl text-white font-bold flex items-center justify-center">
          {data !== undefined ? data : <Loading />}
        </h2>
      </CardContent>
      <CardFooter>{error && <FormError message={error} />}</CardFooter>
    </Card>
  );
}
