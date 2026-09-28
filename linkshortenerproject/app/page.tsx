import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7f2] text-[#17231e]">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between border-b border-[#dce3dc] px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#173d32] text-white">
            <Link2 aria-hidden="true" size={19} />
          </span>
          <span>Shortlink</span>
        </Link>
        <nav aria-label="Account" className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="h-10 px-3 text-sm font-medium text-[#405149] transition-colors hover:text-[#17231e]">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="flex h-10 items-center gap-2 rounded-md bg-[#173d32] px-4 text-sm font-medium text-white transition-colors hover:bg-[#245644]">
                Create account
                <ArrowUpRight aria-hidden="true" size={16} />
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </header>
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-5 py-20 sm:px-8">
        <section className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#56806d]">
            Your link workspace
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Make room for what matters.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#53645b]">
            Sign in to continue, or create an account to get started with Shortlink.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Show when="signed-out">
              <SignUpButton>
                <button className="flex h-12 items-center gap-2 rounded-md bg-[#173d32] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#245644]">
                  Get started
                  <ArrowUpRight aria-hidden="true" size={17} />
                </button>
              </SignUpButton>
              <SignInButton>
                <button className="h-12 rounded-md border border-[#cbd6cc] px-5 text-sm font-semibold text-[#273b31] transition-colors hover:bg-white">
                  Sign in
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <p className="text-sm font-medium text-[#405149]">
                You are signed in. Use your profile menu to manage your account.
              </p>
            </Show>
          </div>
        </section>
      </main>
    </div>
  );
}
