"use client";

import { useSearchParams } from "next/navigation";
import { FormWrapper } from "@/components/form/FormWrapper";
import { useState } from "react";
import { loginSchema } from "@/lib/zodSchemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailLogin } from "@/app/(auth)/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { SubmitButton } from "@/components/ui/Buttons";
import { FormError } from "@/components/form/FormError";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAcoountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");

  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setIsPending(true);

    emailLogin(values)
      .then((data) => {
        if (data?.error) {
          form.reset();
          setError(data.error);
        }
      })
      .catch(() => setError("Something went wrong!"))
      .finally(() => setIsPending(false));
  };
  return (
    <FormWrapper
      title="Login"
      description="Welcome Back!"
      buttonHref="/"
      buttonLabel="Only Authorized Users. Go back"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="example@example.com"
                        type="email"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="*******"
                        type="password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>
          <FormError message={error || urlError} />
          <SubmitButton
            isPending={isPending}
            text={"Login"}
            className="w-full"
          />
        </form>
      </Form>
    </FormWrapper>
  );
}
