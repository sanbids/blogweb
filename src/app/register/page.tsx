"use client";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// scheme react hook form

const formScheme = z
  .object({
    name: z.string().min(4).max(13),
    email: z.string().email(),
    password: z.string().min(5).max(13),
    confirmPassword: z.string().min(5).max(13),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

// inputdata

const InputData: {
  name: "name" | "email" | "password" | "confirmPassword";
  label: string;
  place: string;
  type: string;
}[] = [
  {
    name: "name",
    label: "Name",
    place: "Enter your name....",
    type: "text",
  },

  {
    name: "email",
    label: "Email",
    place: "Enter your email....",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    place: "Password....",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    place: "...",
    type: "password",
  },
];

export default function Registration() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formScheme>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
      <div>
        <a href="/">
          <h3 className="text-4xl  transition-colors font-bold">Register</h3>
        </a>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden border shadow-md sm:max-w-lg sm:rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {InputData.map((items) => (
              <FormField
                control={form.control}
                name={items.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{items.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={items.type}
                        placeholder={items.place}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              variant="outline"
              className="w-full bg-purple-500 transition-colors text-md hover:bg-purple-700 duration-200"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-grey-600">
          Already have an account?{" "}
          <span>
            <a className="text-purple-600 hover:underline" href="#">
              Log in
            </a>
          </span>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>
        <div className="my-6 space-y-2">
          <Button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            variant="outline"
          >
            <FcGoogle className="h-5 w-5" />
            <p>Login with Google</p>
          </Button>
          <Button
            aria-label="Login with Facebook"
            type="button"
            className="flex items-center  justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            variant="outline"
          >
            <FaFacebook className="h-5 w-5 text-blue-500" />
            <p>Login with Facebook</p>
          </Button>

          <Button
            aria-label="Login with Twitter/X"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            variant="outline"
          >
            <FaXTwitter className="h-5 w-5" />
            <p>Login with Twitter/X</p>
          </Button>

          <Button
            aria-label="Login with Instagram"
            type="button"
            className="flex  items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            variant="outline"
          >
            <FaInstagram className="h-5 w-5 text-pink-500" />
            <p>Login with Instagram</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
