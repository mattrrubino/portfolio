import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import CenterContainer from "../components/container/CenterContainer";
import ContainerList from "../components/container/ContainerList";
import ArrowDown from "../components/ArrowDown";
import useAppear from "../hooks/useAppear";

export default function Home() {
  return (
    <ContainerList>
      <CenterContainer innerRef={useAppear()}>
        <div className="flex flex-col space-y-16 justify-center items-center lg:flex-row lg:space-x-16 lg:space-y-0">
          <div className="flex flex-col">
              <div className="w-fit">
                <h2 className="text-6xl text-right">Hello, I&apos;m</h2>
                <h1 className="text-9xl font-bold text-accent mt-[-1.5rem]">Matthew</h1>
              </div>
              <p className="text-4xl leading-none">
                I apply <b>software engineering</b><br/>and <b>machine learning</b> to solve<br/>problems across disciplines.
              </p>
          </div>
          <img className="grayscale" src="/profile.jpg" />
        </div>
        <ArrowDown />
      </CenterContainer>

      <CenterContainer innerRef={useAppear()}>
        <div className="flex flex-col items-center space-y-8 text-2xl md:text-3xl">
          <h2 className="text-6xl">About Me</h2>
          <div className="w-11/12 flex flex-col space-y-4 leading-none lg:w-4/5 2xl:w-2/3">
            <span>I graduated from <b>University at Buffalo</b> in 2023, with a <b>BS in computer science</b>.</span>
            <span>I am experienced in a diverse array of software development technologies. Much of this experience was gained through my contributions to <b>interdisciplinary projects</b>.</span>
            <span>I value <b>efficiency</b>, <b>pragmatism</b>, and <b>integrity</b>. This guides my work and life.</span>
          </div>
        </div>
      </CenterContainer>

      <CenterContainer innerRef={useAppear()}>
        <div className="flex flex-col space-y-8 text-3xl">
          <h2 className="text-6xl text-center">Contact</h2>
          <div className="flex flex-col">
            <span><Email className="mr-2" />Email: <a className="underline" href="mailto:mrrubin04@gmail.com">mrrubin04@gmail.com</a></span>
            <span><LinkedIn className="mr-2" />LinkedIn: <a className="underline" href="https://www.linkedin.com/in/mrrubino" target="_blank" rel="noreferrer">linkedin.com/in/mrrubino</a></span>
            <span><GitHub className="mr-2" />GitHub: <a className="underline" href="https://github.com/mattrrubino" target="_blank" rel="noreferrer">github.com/mattrrubino</a></span>
          </div>
        </div>
      </CenterContainer>
    </ContainerList>
  );
}
