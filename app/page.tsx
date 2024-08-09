import Image from "next/image";
import HomePage from "@/components/Home";
import { About } from "@/components/About";
import { Details } from "@/components/Details";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

const Container = ({ children }) => {
  return <div className="container mx-auto py-24">{children}</div>;
};

export default function Home() {
  return (
    <main className="">
      <Container>
        <Navbar />
        <HomePage />
        <About />
        <div className="mt-16">
          <Details />
        </div>
      </Container>
      <Projects />
    </main>
  );
}
