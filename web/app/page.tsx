export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          AI / ML Engineer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Akshay Goswami
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I build production agentic AI systems — multi-agent platforms, RAG
          pipelines, and document intelligence for legal-tech SaaS. LangGraph,
          FastAPI, React, Azure.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Full portfolio in progress — projects, case studies, and an AI
          assistant that answers questions about my work.
        </p>
        <div className="mt-2 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-black px-6 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
            href="https://github.com/akshay-2410"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-black/[.08] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
            href="https://www.linkedin.com/in/akshay-goswami-aa193622b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-black/[.08] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
            href="mailto:goswami.akshay2410@gmail.com"
          >
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
