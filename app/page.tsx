import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ArrowUpRight, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between border-b border-border px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#28543d] text-white">
            <Link2 aria-hidden="true" size={19} />
          </span>
          <span>Shortlink</span>
        </Link>
        <nav aria-label="Account" className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <Button variant="ghost" className="h-10 px-3 text-muted-foreground">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="h-10 px-4">
                Create account
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </header>
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-5 py-20 sm:px-8">
        <section className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#91c4a2]">
            Your link workspace
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Make room for what matters.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Sign in to continue, or create an account to get started with Shortlink.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Show when="signed-out">
              <SignUpButton>
                <Button className="h-12 px-5 font-semibold">
                  Get started
                  <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button variant="outline" className="h-12 px-5 font-semibold">
                  Sign in
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <p className="text-sm font-medium text-muted-foreground">
                You are signed in. Use your profile menu to manage your account.
              </p>
            </Show>
          </div>
        </section>
      </main>
    </div>
  );
}
