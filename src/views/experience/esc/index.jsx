import ProjectContainer from "../../../components/container/ProjectContainer";
import ContainerList from "../../../components/container/ContainerList";
import TitleContainer from "../../../components/container/TitleContainer";
import useAppear from "../../../hooks/useAppear";

export default function ESC() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="ESC Group"
        desc="Working on projects in this group led<br/>to my interest in the healthcare and<br/>manufacturing industries."
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
          "https://icon.icepanel.io/Technology/svg/Dart.svg",
          "https://icon.icepanel.io/Technology/svg/Flutter.svg",
          "https://icon.icepanel.io/Technology/svg/Firebase.svg",
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
          "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
          "https://icon.icepanel.io/Technology/svg/Git.svg",
          "https://icon.icepanel.io/Technology/svg/GitHub.svg",
        ]}
        link="https://apps.apple.com/no/app/mellowing-mind-community/id1565271649"
        media="https://www.youtube.com/embed/fHGecJ8MMI0"
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
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/AWS.svg",
          "https://www.vectorlogo.zone/logos/onnxai/onnxai-icon.svg",
          "https://icon.icepanel.io/Technology/svg/NGINX.svg",
          "https://icon.icepanel.io/Technology/svg/React.svg",
          "https://icon.icepanel.io/Technology/svg/Sass.svg",
          "https://icon.icepanel.io/Technology/svg/Three.js.svg",
          "https://icon.icepanel.io/Technology/svg/Git.svg",
          "https://icon.icepanel.io/Technology/svg/GitHub.svg",
        ]}
        link="https://stream-digitaltwin.com"
        media="https://www.youtube.com/embed/6j6RJ27Ho7A"
      />
      {/* SLI Screener */}
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
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/Flask.svg",
          "https://icon.icepanel.io/Technology/svg/PyTorch.svg",
          "https://icon.icepanel.io/Technology/svg/React.svg",
          "https://icon.icepanel.io/Technology/svg/HTML5.svg",
          "https://icon.icepanel.io/Technology/svg/CSS3.svg",
        ]}
        media="https://www.youtube.com/embed/8U6y9d0Ua3w"
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
          "https://icon.icepanel.io/Technology/svg/Unity.svg",
          "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
          "https://icon.icepanel.io/Technology/svg/.NET.svg",
          "https://www.svgrepo.com/show/306497/oculus.svg",
          "https://icon.icepanel.io/Technology/svg/Blender.svg",
        ]}
        media="https://www.youtube.com/embed/_icf84A7Ce4"
      />
    </ContainerList>
  )
}
