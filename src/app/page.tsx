import { FlagValues } from "flags/react";
import { weatherWidgetFlag } from "./flags";

export default async function Home() {
  const weatherWidgetFlagValue = await weatherWidgetFlag();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FlagValues
        values={{
          [weatherWidgetFlag.key]: weatherWidgetFlagValue,
        }}
      />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-[180px] h-[40px] grid place-items-center">
          <p
            className={
              weatherWidgetFlagValue ? "dark:invert opacity-50" : "dark:invert"
            }
          >
            Weather Widget Flag is {weatherWidgetFlagValue ? "ON" : "OFF"}
          </p>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="mb-2">Save and see your changes instantly.</li>
          <li className="mb-2">
            Refresh the page to see random flag variations.
          </li>
          <li className="mb-2">Connect to Vercel to try Flags Explorer.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={`rounded-full border border-solid transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
              weatherWidgetFlagValue
                ? "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
                : "border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
            }`}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          {weatherWidgetFlagValue ? (
            <a
              className={`rounded-full border border-solid transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 ${
                weatherWidgetFlagValue
                  ? "border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
                  : "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
              }`}
              href="https://flags-sdk.dev?utm_source=vercel-examples&utm_medium=appdir-template-tw&utm_campaign=vercel-examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flags SDK docs
            </a>
          ) : (
            <a
              className={`rounded-full border border-solid transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 ${
                weatherWidgetFlagValue
                  ? "border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
                  : "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
              }`}
              href="https://nextjs.org/docs?utm_source=vercel-examples&utm_medium=appdir-template-tw&utm_campaign=vercel-examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          )}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
