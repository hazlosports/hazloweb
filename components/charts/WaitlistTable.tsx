"use client";

import {
  Table,
  TableCell,
  TableContent,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { getWaitlistInfo } from "@/lib/chartFunctions";

interface WaitlistProps {
  id: string;
  email: string;
  created_at: Date;
}

export function WaitlistTable() {
  const [data, setData] = useState<WaitlistProps[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getWaitlistInfo();
      if (res.success && res.data) {
        // Convert `created_at` strings to Date objects
        const parsedData = res.data.map((item) => ({
          ...item,
          created_at: new Date(item.created_at),
        }));
        setData(parsedData);
      } else {
        setError(res.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Emails in Waitlist</CardTitle>
      </CardHeader>
      <CardContent>
        {data && data.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Joined</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableContent>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("es-ES", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    }).format(item.created_at)}
                  </TableCell>
                </TableRow>
              ))}
            </TableContent>
          </Table>
        )}
        {data && data.length < 1 && (
          <h2 className="text-red-500 text-md text-center justify-center">
            The waitlist is currently empty
          </h2>
        )}
      </CardContent>
    </Card>
  );
}
