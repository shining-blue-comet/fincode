import { useFincodeHooks } from "@/utils/fincode";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const { payment } = useFincodeHooks();
  const router = useRouter();

  const onClickHandler = () => {
    if (amount) {
      payment(amount).then((_) => {
        router.push("/fincode");
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Pay with Card
        </p>
      </div>

      <div className="relative flex place-items-center before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40">
        <div className="m-14 p-5 bg-white w-[430px] h-[200px]  rounded-lg">
          <label>Input payment Amount</label>
          <input
            className="w-full h-10 border my-4 p-2 focus-visible:border-gray-500"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="p-2 border rounded-md"
            onClick={() => onClickHandler()}
          >
            <span>Integrate with Fincode</span>
          </button>
        </div>
      </div>
    </main>
  );
}
