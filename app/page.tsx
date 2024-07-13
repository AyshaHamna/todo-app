import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="p-5 bg-slate-500 min-h-screen">
      {/* <Background /> */}
      <Header />
      <Hero />
    </main>
  );
}
