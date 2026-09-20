const status = "Running";

function StatusCard({ title, value }) {
  return (
    <div>
      <h2>
        {title}: {value}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Next.js VPS POC</h1>{" "}
        <p>
          The purpose of this POC is to become familiar with the deployment
          process for a Next.js application.
        </p>
        <StatusCard title="Application" value={status} />
        <StatusCard title="Framework" value="Next.js" />
        <StatusCard title="Runtime" value="Node.js" />
      </main>
    </div>
  );
}
