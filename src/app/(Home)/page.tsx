import Menu from "@/components/Menu";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import Footer from "./Components/Footer";
import Name from "./Components/Name";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center p-6">
        <Menu />
        <Hero />
        <Grid />
        <Name />
        <Footer />
        <div className="sticky bottom-0 w-full flex justify-center mb-4 py-14">
          <Button className="uppercase bg-gradient-to-t from-[#848faa] to-[#dce6ff] text-black rounded-xl px-10 py-6">
            Say hello
          </Button>
        </div>
      </div>
    </div>
  );
}
