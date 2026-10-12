import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Link2,
  MousePointer2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

const linkRows = [
  {
    label: "Spring launch notes",
    destination: "northstar.studio/journal/spring-launch-notes",
    short: "shortlink.io/spring",
    tone: "bg-[#c9f27b] text-[#172018]",
    initials: "S",
  },
  {
    label: "Field guide: good ideas",
    destination: "northstar.studio/resources/field-guide",
    short: "shortlink.io/fieldguide",
    tone: "bg-[#ffb59e] text-[#331c16]",
    initials: "F",
  },
  {
    label: "The studio newsletter",
    destination: "northstar.studio/letters/issue-08",
    short: "shortlink.io/letter08",
    tone: "bg-[#9ed8ef] text-[#122832]",
    initials: "N",
  },
];

export default async function Home() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) redirect("/dashboard");

  return (
    <div className="min-h-screen overflow-hidden bg-[#111713] text-[#f1f4ed]">
      <header className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between border-b border-white/10 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-[#c9f27b] text-[#172018]">
            <Link2 aria-hidden="true" size={17} />
          </span>
          <span className="text-[15px]">shortlink</span>
        </Link>
        <nav aria-label="Account" className="flex items-center gap-2 sm:gap-3">
          <Show when="signed-out">
            <SignInButton
              forceRedirectUrl="/dashboard"
              signUpForceRedirectUrl="/dashboard"
            >
              <Button variant="ghost" className="h-9 px-3 text-[#bec6bb] hover:text-white">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton
              forceRedirectUrl="/dashboard"
              signInForceRedirectUrl="/dashboard"
            >
              <Button className="h-9 rounded-md bg-[#c9f27b] px-3 text-[#172018] hover:bg-[#d9ff91] sm:px-4">
                <span className="hidden sm:inline">Create account</span>
                <span className="sm:hidden">Join</span>
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
            </SignUpButton>
          </Show>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-16">
          <div className="relative z-10 max-w-[570px]">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#c9f27b]">
              <span className="size-1.5 rounded-full bg-[#c9f27b]" />
              Your links, in good company
            </p>
            <h1 className="max-w-[540px] text-5xl font-semibold leading-[0.98] sm:text-7xl">
              Less link.
              <br />
              <span className="font-medium text-[#a8b2a6]">More meaning.</span>
            </h1>
            <p className="mt-6 max-w-[430px] text-base leading-7 text-[#a8b2a6] sm:text-lg sm:leading-8">
              Turn long URLs into clear, memorable links, then keep them all close at hand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Show when="signed-out">
                <SignUpButton
                  forceRedirectUrl="/dashboard"
                  signInForceRedirectUrl="/dashboard"
                >
                  <Button className="h-11 rounded-md bg-[#c9f27b] px-5 font-semibold text-[#172018] hover:bg-[#d9ff91]">
                    Make your first link
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                </SignUpButton>
                <SignInButton
                  forceRedirectUrl="/dashboard"
                  signUpForceRedirectUrl="/dashboard"
                >
                  <Button variant="outline" className="h-11 rounded-md border-white/15 bg-white/[0.03] px-5 text-[#eef2e9] hover:bg-white/[0.08]">
                    I have an account
                  </Button>
                </SignInButton>
              </Show>
            </div>
            <p className="mt-5 text-xs text-[#7f897e]">A calmer place for the links you share.</p>
          </div>

          <div aria-label="Illustration of an organized link workspace" className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#19211b] shadow-[0_32px_100px_-48px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-7 items-center justify-center rounded-md bg-[#c9f27b] text-[#172018]">
                    <Link2 aria-hidden="true" size={14} />
                  </span>
                  <span className="text-xs font-semibold text-[#e7ede3]">Your links</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-[#8e9b8d] sm:text-xs">
                  <span className="size-1.5 rounded-full bg-[#c9f27b]" />
                  All links
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-4 sm:px-5">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase text-[#859184]">Your little corner of the internet</p>
                  <p className="mt-1 text-sm font-medium text-[#eef2e9]">A home for every good link.</p>
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#c9f27b] text-[#172018]">
                  <Link2 aria-hidden="true" size={15} />
                </span>
              </div>
              <div className="px-3 py-2 sm:px-4">
                {linkRows.map((row) => (
                  <div key={row.short} className="grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/[0.06] py-3 last:border-0 sm:grid-cols-[36px_minmax(0,1fr)_auto] sm:gap-3.5">
                    <span className={`flex size-8 items-center justify-center rounded-md text-xs font-bold sm:size-9 ${row.tone}`}>
                      {row.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-[#e7ede3] sm:text-sm">{row.label}</p>
                      <p className="mt-1 truncate text-[10px] text-[#778477] sm:text-[11px]">{row.destination}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#c9f27b] sm:gap-2">
                      <span className="hidden text-[10px] sm:inline sm:text-xs">{row.short}</span>
                      <span className="text-[10px] sm:hidden">{row.short.split("/")[1]}</span>
                      <Copy aria-hidden="true" size={12} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-white/[0.025] px-4 py-3 sm:px-5">
                <span className="flex items-center gap-2 text-[10px] text-[#879285] sm:text-xs">
                  <MousePointer2 aria-hidden="true" size={13} />
                  Made to be shared
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#c9f27b] sm:text-xs">
                  <Check aria-hidden="true" size={12} />
                  Looking good
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-md border border-white/10 bg-[#222b24] px-3 py-2 shadow-xl sm:flex">
              <span className="flex size-6 items-center justify-center rounded bg-[#ffb59e] text-[#331c16]">
                <Check aria-hidden="true" size={13} />
              </span>
              <span className="text-[11px] text-[#e7ede3]">Short, clear, ready to share.</span>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-white/10 bg-[#171e19]">
          <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-9 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase text-[#c9f27b]">Good links, no fuss</p>
                <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                  The little details make a link feel right.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#98a397]">
                From the first paste to the final share, Shortlink keeps things simple and considered.
              </p>
            </div>
            <div className="grid gap-0 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
              <article className="py-6 sm:px-6 sm:py-7 sm:first:pl-0">
                <span className="mb-5 flex size-9 items-center justify-center rounded-md bg-[#c9f27b]/10 text-[#c9f27b]">
                  <Link2 aria-hidden="true" size={17} />
                </span>
                <h3 className="text-base font-semibold">Short, by design</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#98a397]">
                  Replace long, unwieldy URLs with links that are easier to read, remember, and share.
                </p>
              </article>
              <article className="border-t border-white/10 py-6 sm:border-0 sm:px-6 sm:py-7">
                <span className="mb-5 flex size-9 items-center justify-center rounded-md bg-[#ffb59e]/10 text-[#ffb59e]">
                  <Copy aria-hidden="true" size={16} />
                </span>
                <h3 className="text-base font-semibold">Everything in reach</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#98a397]">
                  Keep the links you make together, so the right one is easy to find when you need it.
                </p>
              </article>
              <article className="border-t border-white/10 py-6 sm:border-0 sm:px-6 sm:py-7 sm:last:pr-0">
                <span className="mb-5 flex size-9 items-center justify-center rounded-md bg-[#9ed8ef]/10 text-[#9ed8ef]">
                  <MousePointer2 aria-hidden="true" size={16} />
                </span>
                <h3 className="text-base font-semibold">Made for sharing</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#98a397]">
                  Give every destination a cleaner introduction, whether it goes in a message or a post.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-14">
          <div>
            <h2 className="text-2xl font-semibold">Ready when you are.</h2>
            <p className="mt-2 text-sm text-[#98a397]">Bring your next link over to Shortlink.</p>
          </div>
          <Show when="signed-out">
            <SignUpButton>
              <Button className="h-10 w-fit rounded-md bg-[#c9f27b] px-4 font-semibold text-[#172018] hover:bg-[#d9ff91]">
                Get started
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
            </SignUpButton>
          </Show>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 text-xs text-[#7f897e] sm:px-8">
          <Link href="/" className="font-semibold text-[#c5cec1]">shortlink</Link>
          <span>Keep it short. Make it count.</span>
        </div>
      </footer>
    </div>
  );
}
