import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid w-full lg:grid-cols-2">
      <section className="flex flex-col px-4 p-4 sm:py-8 sm:px-10">
        <Link href="/" className="mb-8 inline-flex w-fit items-center gap-2">
          <Image
            src="/algorion-logo.png"
            alt="Algorion"
            width={170}
            height={50}
            priority
          />
        </Link>

        <div className="mx-auto w-full max-w-md flex-1">
          <header className="mb-8 text-center">
            <h1 className="text-3xl">
              Create an Account
            </h1>
            <p className="mt-2 text-sm text-foreground-muted">
              Start your 7-day free trial today
            </p>
          </header>

          <form className="space-y-4" action="#" method="post">
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
                  type="password"
                  placeholder="********"
                  className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 pr-10 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#a7a7a7]">
                  ◌
                </span>
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
                  type="password"
                  placeholder="********"
                  className="h-11 w-full rounded-md border border-[#d7d7d7] px-3 pr-10 text-sm text-[#111] outline-none ring-0 transition focus:border-[#2f67b5]"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#a7a7a7]">
                  ◌
                </span>
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

            <div className="flex items-center gap-3 pt-1">
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

            <p className="pt-1 text-center text-sm text-foreground-muted">
              Already have an account? {" "}
              <Link href="/auth/login" className="text-[#2f67b5] hover:underline">
                Sign In to Dashboard
              </Link>
            </p>
          </form>
        </div>

        <footer className="mt-10 flex flex-col gap-2 text-xs text-[#8b8b8b] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Algorion Research &amp; Analysis Private Limited.</p>
          <p>All rights reserved</p>
        </footer>
      </section>

      <section className="hidden p-4 lg:block">
        <div className="flex h-full min-h-[calc(100vh-8rem)] w-full items-center justify-center bg-[url(/right-panel-img.png)] bg-cover bg-center bg-no-repeat px-10 py-12 text-center rounded-2xl">
          <div className="mx-auto w-full max-w-xl space-y-8 flex flex-col items-center">
            <h2 className="text-3xl space-y-4 flex flex-col">
              <span className="bg-white text-primary px-4 py-2">Start Your Investment</span>
              <span className="text-white">Journey Today</span>
            </h2>

            <Image src="/revenue-bro.png" alt="revenue-bro" height={300} width={300} />

            <p className="text-lg text-white/90">
              Join thousands of smart investors using AI to make faster, smarter,
              and more confident decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}