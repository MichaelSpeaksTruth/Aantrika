export default function StoryPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cotton px-6 py-10">
      <div className="w-full max-w-2xl rounded-[36px] border border-soil/10 bg-white/95 p-10 text-center shadow-paper shadow-soil/10">
        <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border-4 border-soil/15 border-t-soil/80 text-transparent animate-spin"></div>
        <h1 className="text-4xl font-semibold leading-tight text-ink">Loading our story</h1>
        <p className="mt-5 text-base leading-7 text-soil/80">
          Please wait while we bring the Aantrika story into view.
        </p>
      </div>
    </main>
  );
}
