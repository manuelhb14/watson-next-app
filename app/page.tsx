import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative">
          <Image
            className="dark:invert animate-pulse-glow"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="glass-morphism rounded-2xl p-8 border border-cyan-500/30 glow-cyan">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-cyan-500/20 border border-cyan-500/50 px-2 py-1 rounded-md font-semibold text-cyan-300 glow-cyan">
                app/page.tsx
              </code>
              .
            </li>
            <li className="text-purple-300">Save and see your changes instantly.</li>
          </ol>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border-2 border-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 hover:from-cyan-500/40 hover:to-blue-500/40 glow-hover-cyan text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 text-cyan-100 font-semibold"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border-2 border-purple-500 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center hover:from-purple-500/40 hover:to-pink-500/40 glow-hover-purple text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 sm:min-w-44 text-purple-100 font-semibold"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-cyan-300 hover:text-cyan-200 transition-colors glow-hover-cyan rounded-lg px-3 py-2"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="brightness-150"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-purple-300 hover:text-purple-200 transition-colors glow-hover-purple rounded-lg px-3 py-2"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="brightness-150"
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-pink-300 hover:text-pink-200 transition-colors glow-hover-purple rounded-lg px-3 py-2"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="brightness-150"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
