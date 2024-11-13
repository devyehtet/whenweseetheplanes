import About from "@/components/about";
import AboutText from "@/components/about-text";
import Campaign from "@/components/campaign";
import Cover from "@/components/cover";
import Exhibition from "@/components/exhibition";
import Rumble from "@/components/rumble";


export default function Home(): JSX.Element {


  return <>
    <section className="w-full custom-max-w custom-section-h snap-center">
      <Cover />
    </section>

    <section className="w-full custom-max-w custom-section-h snap-center flex">
      <About />
    </section>

    <section className="w-full md:hidden custom-max-w custom-section-h snap-center flex">
      <AboutText />
    </section>

    <section className="w-full custom-max-w custom-section-h snap-center flex">
      <Campaign />
    </section>

    <section className="w-full custom-max-w custom-section-h snap-center flex">
      <Rumble />
    </section>

    <section className="w-full custom-max-w custom-section-h snap-center flex">
      <Exhibition />
    </section>

  </>
}
