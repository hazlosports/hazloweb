"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Table,
  TableCell,
  TableContent,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/Table";
import { getHazloCoaches } from "@/lib/chartFunctions";

interface Coaches {
  id: string;
  name: string;
  username: string;
  email: string;
}

export function HazloCoachesList() {
  const [data, setData] = useState<Coaches[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHazloCoaches();
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
        <CardTitle>HAZLO Coaches</CardTitle>
      </CardHeader>
      <CardContent>
        {data && data.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Username</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableContent>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              ))}
            </TableContent>
          </Table>
        )}
        {data && data.length < 1 && (
          <h2 className="text-red-500 text-md text-center justify-center">
            The list is currently empty
          </h2>
        )}
      </CardContent>
    </Card>
  );
}
