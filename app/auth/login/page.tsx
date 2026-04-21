"use client";

import Button from "@/components/button";
import Image from "next/image";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen grid w-full lg:grid-cols-2 bg-background">
      <section className="flex flex-col px-4 py-4 sm:px-10 sm:py-8">
        <div className="mb-6 flex items-center justify-between gap-4 lg:mb-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <IconArrowLeft size={16} />
            Back
          </button>

          <Link href="/" className="inline-flex w-fit items-center gap-2">
            <Image
              src="/algorion-logo.png"
              alt="Algorion"
              width={170}
              height={50}
              priority
            />
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          <header className="mb-8 text-center">
            <h1 className="text-3xl text-primary">Sign In</h1>
            <p className="mt-2 text-sm text-foreground-muted">
              Enter your credentials to continue
            </p>
          </header>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-[#2b2b2b]">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#2b2b2b]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 pr-10 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#a7a7a7]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right text-xs text-foreground-muted hover:underline cursor-pointer">
              Reset Your Password
            </div>

            <Button
              variant="primary"
              onClick={() => router.push("/auth/signup")}
              className="w-full"
            >
              Sign in
            </Button>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-px flex-1 bg-[#e2e2e2]" />
              <p className="text-sm text-foreground-muted">Or Register With</p>
              <div className="h-px flex-1 bg-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d7d7d7] text-sm text-[#303030] transition hover:bg-[#f8f8f8]">
                <Image
                  src="/google icon.png"
                  alt="google"
                  width={18}
                  height={18}
                />
                Google
              </button>

              <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d7d7d7] text-sm text-[#303030] transition hover:bg-[#f8f8f8]">
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={18}
                  height={18}
                />
                Facebook
              </button>
            </div>

            <p className="pt-1 text-center text-sm text-foreground-muted">
              Don’t have an account?{" "}
              <span
                className="text-[#2f67b5] hover:underline cursor-pointer"
                onClick={() => router.push("/auth/signup")}
              >
                Create Free Account
              </span>
            </p>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-2 text-xs text-[#8b8b8b] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Algorion Research & Analysis Private Limited.</p>
          <p>All rights reserved</p>
        </footer>
      </section>

      <section className="hidden p-4 lg:block">
        <div className="flex h-full min-h-[calc(100vh-8rem)] w-full items-center justify-center rounded-2xl bg-[url(/right-panel-img.png)] bg-cover bg-center bg-no-repeat px-10 py-12 text-center">
          <div className="mx-auto flex w-full max-w-xl flex-col items-center space-y-8">
            <h2 className="flex flex-col space-y-4 text-3xl">
              <span className="bg-white px-4 py-2 text-primary">Welcome Back</span>
              <span className="text-white">Access your dashboard</span>
            </h2>

            <Image src="/Right Panel.png" alt="illustration" width={500} height={300} className="object-contain" />

            <p className="text-lg text-white/90">
              Access your AI-powered investment dashboard with real-time insights and analytics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
