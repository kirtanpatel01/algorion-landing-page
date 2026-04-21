"use client";

import Button from "@/components/button";
import Image from "next/image";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col px-4 sm:px-6 md:px-10 py-8 md:py-6 h-full">
          {/* Logo */}
          <div className="mb-8 md:mb-10 flex justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/algorion-logo.png"
                alt="logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* CENTER CONTENT */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="max-w-md w-full">
              <h2 className="text-3xl text-primary mb-2 text-center">Sign In</h2>
              <p className="text-foreground-muted mb-8 text-center">
                Enter your credentials to continue
              </p>

              {/* Email */}
              <div className="mb-4">
                <label className="text-sm text-primary mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-[#163257]"
                />
              </div>

              {/* Password */}
              <div className="mb-2 relative">
                <label className="text-sm text-primary mb-1 block">
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-[#163257]"
                />

                {showPassword ? (
                  <IconEye
                    size={18}
                    onClick={() => setShowPassword(false)}
                    className="absolute right-3 mt-[-25] text-foreground-muted cursor-pointer"
                  />
                ) : (
                  <IconEyeOff
                    size={18}
                    onClick={() => setShowPassword(true)}
                    className="absolute right-3 mt-[-25] text-foreground-muted cursor-pointer"
                  />
                )}
              </div>

              <div className="text-right text-xs text-foreground-muted mb-6 cursor-pointer hover:underline">
                Reset Your Password
              </div>

              <Button
                variant="primary"
                onClick={() => router.push("/auth/signup")}
                className="w-full py-2.5 mb-6 cursor-pointer"
              >
                Sign in
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-xs text-foreground-muted">
                  Or Register With
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 border border-border rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
                  <Image
                    src="/google icon.png"
                    alt="google"
                    width={18}
                    height={18}
                  />
                  Google
                </button>

                <button className="flex-1 border border-border rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={18}
                    height={18}
                  />
                  Facebook
                </button>
              </div>

              <p className="text-xs text-center text-foreground-muted">
                Don’t have an account?{" "}
                <span
                  className="text-primary cursor-pointer hover:underline "
                  onClick={() => router.push("/auth/signup")}
                >
                  Create Free Account
                </span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 mt-10 flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
            <span>© 2025 Algorion Research & Analysis Private Limited.</span>
            <span>All rights reserved</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-auto md:h-130 rounded-2xl bg-gradient-to-br mb-0 md:mb-30 p-4 sm:p-8 flex flex-col justify-between">
            {/* Top */}
            {/* <div className="flex justify-center">
              <div className="bg-white px-6 py-2 rounded-md text-primary text-lg font-medium">
                Welcome Back
              </div>
            </div> */}

            {/* Image */}
            <div className="flex justify-center ">
              <Image
                src="/Right Panel.png"
                alt="illustration"
                width={500}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Bottom Text */}
            {/* <p className="text-center text-blue-100 text-sm px-6">
              Access your AI-powered investment dashboard with real-time insights and analytics
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
