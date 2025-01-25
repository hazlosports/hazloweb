import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export function HazloCoachesRequestNumber() {
  return (
    <Card className="h-full border-orange">
      <CardHeader>
        <CardTitle>Pending Coaches</CardTitle>
        <CardDescription>Total Amount of Pending Coaches</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-5xl text-white font-bold flex items-center justify-center">
          0
        </h2>
      </CardContent>
    </Card>
  );
}
