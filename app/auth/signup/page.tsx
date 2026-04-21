'use client';

import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen grid w-full lg:h-screen lg:grid-cols-2 lg:overflow-hidden">
      <section className="flex flex-col px-4 py-4 sm:px-6 sm:py-6 lg:h-full lg:py-4">
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
          <header className="mb-6 text-center lg:mb-5">
            <h1 className="text-3xl">
              Create an Account
            </h1>
            <p className="mt-2 text-sm text-foreground-muted">
              Start your 7-day free trial today
            </p>
          </header>

          <form className="space-y-4 lg:space-y-3" action="#" method="post">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-[#2b2b2b]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-[#2b2b2b]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm text-[#2b2b2b]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm text-[#2b2b2b]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 pr-10 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#a7a7a7]"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-[#575757]">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[#bcbcbc] text-[#1f4f8f] focus:ring-[#2f67b5]"
              />
              <span>
                I agree to the {" "}
                <Link href="#" className="text-[#2f67b5] hover:underline">
                  Terms of Service
                </Link>{" "}
                and {" "}
                <Link href="#" className="text-[#2f67b5] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <Button type="submit" variant="primary" className="w-full">
              Create Account
            </Button>

            <div className="flex items-center gap-3 pt-1 lg:pt-0">
              <div className="h-px flex-1 bg-[#e2e2e2]" />
              <p className="text-sm text-foreground-muted">Or Register With</p>
              <div className="h-px flex-1 bg-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d7d7d7] text-sm text-[#303030] transition hover:bg-[#f8f8f8]"
              >
                <span className="font-semibold text-[#ea4335]">G</span>
                Google
              </button>
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d7d7d7] text-sm text-[#303030] transition hover:bg-[#f8f8f8]"
              >
                <span className="font-semibold text-[#1877f2]">f</span>
                Facebook
              </button>
            </div>

            <p className="pt-1 text-center text-sm text-foreground-muted lg:pt-0">
              Already have an account? {" "}
              <Link href="/auth/login" className="text-[#2f67b5] hover:underline">
                Sign In to Dashboard
              </Link>
            </p>
          </form>
        </div>

        <footer className="mt-8 flex flex-col gap-2 text-xs text-[#8b8b8b] sm:flex-row sm:items-center sm:justify-between lg:mt-4">
          <p>© 2025 Algorion Research &amp; Analysis Private Limited.</p>
          <p>All rights reserved</p>
        </footer>
      </section>

      <section className="hidden p-4 lg:block lg:h-full">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[url(/right-panel-img.png)] bg-cover bg-center bg-no-repeat px-10 py-8 text-center">
          <div className="mx-auto flex w-full max-w-xl flex-col items-center space-y-6">
            <h2 className="flex flex-col space-y-4 text-3xl">
              <span className="bg-white text-primary px-4 py-2">Start Your Investment</span>
              <span className="text-white">Journey Today</span>
            </h2>

            <Image src="/revenue-bro.png" alt="revenue-bro" height={300} width={300} />

            <p className="text-base text-white/90 xl:text-lg">
              Join thousands of smart investors using AI to make faster, smarter,
              and more confident decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}