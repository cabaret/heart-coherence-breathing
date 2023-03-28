import { useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import gsap from "gsap";

export default function Home() {
  const [inhale, setInhale] = useState("2.7");
  const [holdAfterInhale, setHoldAfterInhale] = useState("1.3");
  const [exhale, setExhale] = useState("5.4");
  const [holdAfterExhale, setHoldAfterExhale] = useState("1.5");

  const app = useRef(null);
  const el = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".el", {
        height: "95%",
        backgroundColor: "#dcfce7",
        duration: inhale,
      });
      tl.to(".el", {
        height: "100%",
        backgroundColor: "#bbf7d0",
        duration: holdAfterInhale,
      });
      tl.to(".el", {
        height: "5%",
        backgroundColor: "#dcfce7",
        duration: exhale,
      });
      tl.to(".el", {
        height: 0,
        backgroundColor: "#bbf7d0",
        duration: holdAfterExhale,
      });
      tl.repeat(-1);
    }, app);

    return () => ctx.revert();
  }, [app, exhale, holdAfterExhale, holdAfterInhale, inhale]);

  return (
    <>
      <Head>
        <title>hartcoherentie ademen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧘🏻‍♀️</text></svg>"
        />
      </Head>
      <main
        className="bg-emerald-50 h-screen w-screen overflow-hidden"
        ref={app}
      >
        <div
          className="el w-screen bg-emerald-100 absolute bottom-0"
          ref={el}
        />
        <footer className="bg-emerald-200 absolute bottom-0 p-4 left-1/2 transform -translate-x-1/2 rounded-lg shadow-sm mb-3">
          <form className="flex justify-center gap-4">
            <label htmlFor="inhale">
              <span>inhale:</span>
              <input
                type="text"
                name="inhale"
                id="inhale"
                className="ml-2 w-12 border-emerald-300 border-2 focus:border-emerald-500 outline-none px-1"
                onChange={(e) => setInhale(e.target.value)}
                value={inhale}
              />
            </label>
            <label htmlFor="hold-i">
              <span>hold after inhale:</span>
              <input
                type="text"
                name="hold-i"
                id="hold-i"
                className="ml-2 w-12 border-emerald-300 border-2 focus:border-emerald-500 outline-none px-1"
                onChange={(e) => setHoldAfterInhale(e.target.value)}
                value={holdAfterInhale}
              />
            </label>
            <label htmlFor="exhale">
              <span>exhale:</span>
              <input
                type="text"
                name="exhale"
                id="exhale"
                className="ml-2 w-12 border-emerald-300 border-2 focus:border-emerald-500 outline-none px-1"
                onChange={(e) => setExhale(e.target.value)}
                value={exhale}
              />
            </label>
            <label htmlFor="hold-e">
              <span>hold after exhale:</span>
              <input
                type="text"
                name="hold-e"
                id="hold-e"
                className="ml-2 w-12 border-emerald-300 border-2 focus:border-emerald-500 outline-none px-1"
                onChange={(e) => setHoldAfterExhale(e.target.value)}
                value={holdAfterExhale}
              />
            </label>
          </form>
        </footer>
      </main>
    </>
  );
}
