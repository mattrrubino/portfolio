import ProjectContainer from "../../components/container/ProjectContainer";
import ContainerList from "../../components/container/ContainerList";
import useAppear from "../../hooks/useAppear";
import TitleContainer from "../../components/container/TitleContainer";

export default function Projects() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="Projects"
        desc="In my free time, I enjoy building<br/> projects to learn new technical skills."
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="COVID Visualization" 
        venue="Personal Project"
        desc={[
          "I created a visualization of the New York Times <b>COVID-19 US dataset</b>.",
          "I added interactivity to the visualization using <b>JavaScript</b> and <b>D3</b>.",
          "I visualized data for individual states using <b>GeoJSON</b>."
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
          "https://icon.icepanel.io/Technology/svg/D3.js.svg",
          "https://icon.icepanel.io/Technology/svg/CSS3.svg",
          "https://icon.icepanel.io/Technology/svg/JSON.svg",
          "https://icon.icepanel.io/Technology/svg/Webpack.svg",
        ]}
        link="/projects/covid"
        media="/covid.png"
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Ho-Ho-Ho Down" 
        venue="Personal Project"
        desc={[
          "I created a winter-themed <b>2D platformer game</b>.",
          "I implemented the game using <b>C#</b> and the game engine <b>Unity</b>.",
          "I made all the game assets, including the <b>artwork</b> and <b>music</b>.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/Unity.svg",
          "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
          "https://icon.icepanel.io/Technology/svg/.NET.svg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Musescore_icon.svg/600px-Musescore_icon.svg.png?20210515114412",
        ]}
        link="/projects/christmas"
        media="/christmas.png"
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="RPS15" 
        venue="CSE312"
        desc={[
          "We created a web application of the game <b>\"Rock, Paper, Scissors\"</b> with 15 moves.",
          "I implemented the backend software using <b>Python</b>, <b>FastAPI</b>, and <b>WebSockets</b>.",
          "I deployed our project to <b>Digital Ocean</b> using <b>Docker</b>, <b>NGINX</b>, and <b>MongoDB</b>."
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
          "https://icon.icepanel.io/Technology/svg/Digital-Ocean.svg",
          "https://icon.icepanel.io/Technology/svg/Docker.svg",
          "https://icon.icepanel.io/Technology/svg/NGINX.svg",
          "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
        ]}
        link="https://github.com/mattrrubino/rps15"
        media="/rps.png"
      />
    </ContainerList>
  )
}
