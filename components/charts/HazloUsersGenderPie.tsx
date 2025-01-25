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
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import {
  getHazloFemaleUsersHazlo,
  getHazloMaleUsersNumber,
  getHazloOtherGenderUsersNumber,
} from "@/lib/chartFunctions";

export function HazloUsersGenderPie() {
  const [maleCount, setMaleCount] = useState<number | undefined>(0);
  const [femaleCount, setFemaleCount] = useState<number | undefined>(0);
  const [other, setOther] = useState<number | undefined>(0);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    // Fetch the male and female user count from Supabase
    const fetchData = async () => {
      const res = await getHazloMaleUsersNumber();
      if (res.success) {
        setMaleCount(res.data);
      } else {
        setError(res.msg);
      }

      const res2 = await getHazloFemaleUsersHazlo();
      if (res2.success) {
        setFemaleCount(res2.data);
      } else {
        setError(res2.msg);
      }

      const res3 = await getHazloOtherGenderUsersNumber();
      if (res3.success) {
        setOther(res3.data);
      } else {
        setError(res3.msg);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: "Male", value: maleCount },
    { name: "Female", value: femaleCount },
    { name: "Other", value: other },
  ];

  const COLORS = ["#0EA8F5", "#692EF8", "#fff"];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Users Gender</CardTitle>
        <CardDescription>Gender of all users in Hazlo</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
      <CardFooter>{error && <FormError message={error} />}</CardFooter>
    </Card>
  );
}
