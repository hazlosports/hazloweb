import Link from "next/link";
import { Button } from "@/components/ui/Buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface FromWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function FormWrapper({
  children,
  buttonHref,
  buttonLabel,
  description,
  title,
}: FromWrapperProps) {
  return (
    <Card className="w-[400px] h-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button variant="link" className="w-full" size="sm" asChild>
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
