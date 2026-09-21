"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里是前端简单校验，后端注册逻辑后续再接入
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign up data:", formData);
    alert("Account registration submitted!");
  };

  return (
    <main className="max-w-md mx-auto px-4 py-16">
      <h1 className={cn(integralCF.className, "text-3xl md:text-4xl font-bold text-center mb-8")}>
        Create Account
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="py-5"
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="py-5"
          />
        </div>
        <div>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="py-5"
          />
        </div>
        <Button type="submit" className="w-full rounded-full py-5 bg-black hover:bg-black/80">
          Sign Up
        </Button>
      </form>
      <p className="text-center mt-6 text-black/60">
        Already have an account?{" "}
        <Link href="/login" className="underline font-medium text-black">
          Log in
        </Link>
      </p>
    </main>
  );
}
