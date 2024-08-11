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
        desc="I enjoy building projects to learn<br/>new technical skills."
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Mellowing Mind"
        venue="School of Nursing"
        desc={[
          "We created a <b>mindfulness practice app</b> to help treat mental health issues in the city of Buffalo.",
          "I implemented the app software using <b>Dart</b>, <b>Flutter</b>, and <b>Firebase</b>.",
          "The app is being used in an ongoing study to determine the <b>efficacy</b> of this form of treatment.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Dart.svg", alt: "Dart Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Flutter.svg", alt: "Flutter Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Firebase.svg", alt: "Firebase Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/JavaScript.svg", alt: "JavaScript Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GraphQL.svg", alt: "GraphQL Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Git.svg", alt: "Git Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GitHub.svg", alt: "GitHub Icon" },
        ]}
        link="https://apps.apple.com/no/app/mellowing-mind-community/id1565271649"
        media={{ src: "https://www.youtube.com/embed/fHGecJ8MMI0", alt: "Demo video of Mellowing Mind" }}
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="STREAM"
        venue="Department of ISE"
        desc={[
          "We built a <b>digital twin</b> of a 3D printer. This twin mirrors the physical state of a real printer and allows the printer to be controlled remotely.",
          "I implemented the backend software in <b>Python</b>, deployed machine learning models using <b>ONNX</b>, and hosted the web application using <b>AWS</b> and <b>NGINX</b>.",
          "Our project won <b>first place</b> in the Agrusa CSE Student Innovation Competition 2022.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/AWS.svg", alt: "AWS Icon" },
          { src: "https://www.vectorlogo.zone/logos/onnxai/onnxai-icon.svg", alt: "ONNX Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/NGINX.svg", alt: "NGINX Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/React.svg", alt: "React Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Sass.svg", alt: "Sass Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Three.js.svg", alt: "Three.js Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Git.svg", alt: "Git Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GitHub.svg", alt: "GitHub Icon" },
        ]}
        link="https://stream-digitaltwin.com"
        media={{ src: "https://www.youtube.com/embed/6j6RJ27Ho7A", alt: "Demo video of STREAM" }}
      />
      {/* TODO: Vocal Lens */}
      <ProjectContainer
        innerRef={useAppear()}
        proj="Magic Painting Board"
        venue="Department of CSE"
        desc={[
          "We created a web application that <b>transforms sketches</b> into images using <b>deep learning</b>.",
          "I trained the pix2pix deep learning model using <b>PyTorch</b> and created the user interface with <b>React</b>.",
          "We added support for the Leap Motion Controller to <b>improve drawing throughput</b>.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Flask.svg", alt: "Flask Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/PyTorch.svg", alt: "PyTorch Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/React.svg", alt: "React Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/HTML5.svg", alt: "HTML Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/CSS3.svg", alt: "CSS Icon" },
        ]}
        media={{ src: "https://www.youtube.com/embed/8U6y9d0Ua3w", alt: "Demo video of Magic Painting Board" }}
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Manufacturing Metaverse"
        venue="Department of ISE"
        desc={[
          "I built an instructional AR application for <b>3D printer troubleshooting</b>.",
          "I wrote the software in <b>C#</b>, using the game engine <b>Unity</b> with the <b>Oculus SDK</b>.",
          "I added support for <b>realtime interaction</b> with a physical 3D printer using WebSockets.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Unity.svg", alt: "Unity Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg", alt: "C# Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/.NET.svg", alt: ".NET Icon" },
          { src: "https://www.svgrepo.com/show/306497/oculus.svg", alt: "Oculus Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Blender.svg", alt: "Blender Icon" },
        ]}
        media={{ src: "https://www.youtube.com/embed/_icf84A7Ce4", alt: "Demo video of Manufacturing Metaverse" }}
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Pokemix"
        venue="Personal Project"
        desc={[
          "I created a <b>deep learning model</b> for interpolating 2D sprites.",
          "I built and trained the model using <b>Python</b> and <b>TensorFlow</b>.",
          "I created a web interface for the model using <b>React</b>, <b>Tailwind</b>, and <b>TensorFlow.js</b>.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg", alt: "TensorFlow Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/JavaScript.svg", alt: "JavaScript Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/React.svg", alt: "React Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg", alt: "Tailwind CSS Icon" },
        ]}
        link="/projects/pokemix"
        desktop={true}
        media={{ src: "/pokemix.gif", alt: "GIF from Pokémix" }}
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
          { src: "https://icon.icepanel.io/Technology/svg/JavaScript.svg", alt: "JavaScript Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/D3.js.svg", alt: "D3.js Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/CSS3.svg", alt: "CSS Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/JSON.svg", alt: "JSON Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Webpack.svg", alt: "Webpack Icon" },
        ]}
        link="/projects/covid"
        desktop={true}
        media={{ src: "/covid.png", alt: "Screenshot from COVID Visualization" }}
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
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/FastAPI.svg", alt: "FastAPI Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Digital-Ocean.svg", alt: "Digital Ocean Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Docker.svg", alt: "Docker Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/NGINX.svg", alt: "NGINX Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/MongoDB.svg", alt: "MongoDB Icon" },
        ]}
        link="https://github.com/mattrrubino/rps15"
        media={{ src: "/rps.png", alt: "Screenshot from RPS15" }}
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
          { src: "https://icon.icepanel.io/Technology/svg/Unity.svg", alt: "Unity Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg", alt: "C# Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/.NET.svg", alt: ".NET Icon" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png", alt: "Photoshop Icon" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Musescore_icon.svg/600px-Musescore_icon.svg.png?20210515114412", alt: "Musescore Icon" },
        ]}
        link="/projects/christmas"
        desktop={true}
        media={{ src: "/christmas.png", alt: "Screenshot from Ho-Ho-Ho Down" }}
      />
    </ContainerList>
  )
}
