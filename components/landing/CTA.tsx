"use client";

import { waitlistEmail } from "@/app/actions";
import { waitlistSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { FormError } from "../form/FormError";
import { SubmitButton } from "../ui/Buttons";
import { FormSuccess } from "../form/FormSuccess";
import { Input } from "../ui/Input";
import Image from "next/image";
import wistle from "@/public/landing/wistle.png";

export function CTA() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof waitlistSchema>) => {
    setError("");
    setSuccess("");
    setIsPending(true);

    waitlistEmail(values)
      .then((data) => {
        if (data?.error) {
          form.reset();
          setError(data.error);
        }
        if (data?.success) {
          form.reset();
          setSuccess(data.success);
        }
      })
      .catch(() => setError("Something went wrong!"))
      .finally(() => setIsPending(false));
  };
  return (
    <div className="text-white py-[72px] sm:py-24 text-center px-8 lg:px-20">
      <div className="container max-w-xl mx-auto">
        <div className="flex items-center space-x-4">
          {" "}
          <Image
            src={wistle}
            alt=""
            height={100}
            width={100}
            className="max-w-none"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter">
            Be the First
          </h2>
        </div>
        <p className="text-md lg:text-xl text-white/70 mt-5">
          It’s your world of sports, all in one app. Welcome to Hazlo. <br />{" "}
          Don’t miss out! Join the Hazlo wait list.
          <br /> Be part of the best sports community since day 1
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-row gap-4 items-center mt-16 max-w-3xl w-full mx-auto"
          >
            <div className="flex-grow">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="example@example.com"
                        type="email"
                        disabled={isPending}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SubmitButton
              isPending={isPending}
              text={"Join"}
              size="lg"
              className="w-fit"
            />
          </form>
        </Form>
        <div className="mt-3">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>
      </div>
    </div>
  );
}
