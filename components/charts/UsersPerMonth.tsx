"use client";

import { getUsersPerMonth } from "@/lib/chartFunctions";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface UserData {
  month: string;
  cumulativeCount: number;
}

export function UsersPerMonth() {
  const [cumulativeData, setCumulativeData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUsersPerMonth();
      setCumulativeData(userData);
    };

    fetchUserData();
  }, []);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Users Per Month</CardTitle>
        <CardDescription>Cumulative Users Growth</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart data={cumulativeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cumulativeCount"
              stroke="#0EA8F5"
              activeDot={{ r: 8 }}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
