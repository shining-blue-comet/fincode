import { useFincodeHooks } from "@/utils/fincode";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { submit, mountUI } = useFincodeHooks();

  useEffect(() => {
    mountUI();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link
          href={"/"}
          className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Go Back
        </Link>
      </div>

      <div className="relative flex place-items-center before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40">
        <form
          id="fincode-form"
          className="m-14 p-5 bg-white w-[430px] h-[650px]"
          onSubmit={submit}
        >
          <div id="fincode"></div>
          <button
            id="submit"
            className="p-2 border w-20 rounded-xl absolute right-10 bottom-10"
          >
            <span>Pay</span>
          </button>
        </form>
      </div>
    </main>
  );
}
