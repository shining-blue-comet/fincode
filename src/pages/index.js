import { mountUI, submit } from "@/utils/fincode";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      mountUI();
    }, 1000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Fincode
        </p>
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
            className="p-2 border border-r-2 absolute right-10 bottom-10"
          >
            <span>お支払い</span>
          </button>
        </form>
      </div>
    </main>
  );
}
