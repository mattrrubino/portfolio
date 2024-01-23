import ProjectContainer from "../components/container/ProjectContainer";
import ContainerList from "../components/container/ContainerList";
import useAppear from "../hooks/useAppear";
import TitleContainer from "../components/container/TitleContainer";

export default function Hackathons() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="Hackathons"
        desc="Hackathons are my favorite place to<br/>explore something unfamiliar, such<br/>as computer hardware."
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Red Alert" 
        venue="UB Hacking 2020"
        desc={[
          "We built a <b>low-cost smart smoke detector system</b> for automatic detection and notification of fire.",
          "I wrote the Arduino software in <b>C++</b> and used <b>Python</b> to send text notifications with Twilio API.",
          "We placed <b>first overall</b> out of 90 competing teams.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
          "https://icon.icepanel.io/Technology/svg/Arduino.svg",
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://www.svgrepo.com/show/354472/twilio-icon.svg",
        ]}
        link="https://devpost.com/software/red-alert"
        media="https://www.youtube.com/embed/z4QZwApVT2w"
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Code Green" 
        venue="UB Hacking Fall 2022"
        desc={[
          "We created <b>PET printer filament</b> from a water bottle.",
          "I programmed an ESP32-CAM using <b>C++</b> to create a livestream of the printing process.",
          "We won <b>hack with a purpose</b> and <b>best hardware hack</b>.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
          "https://icon.icepanel.io/Technology/svg/Go.svg",
          "https://icon.icepanel.io/Technology/svg/HTML5.svg",
          "https://icon.icepanel.io/Technology/svg/CSS3.svg",
          "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
        ]}
        link="https://devpost.com/software/code-green-smv8bi"
        media="https://www.youtube.com/embed/EBYXnl_esCo"
      />
      <ProjectContainer
        innerRef={useAppear()}
        proj="Big Transistor Security" 
        venue="UB Hacking Spring 2022"
        desc={[
          "We built a modular <b>dorm security system</b> for automatic detection and notification of intrusion.",
          "I wrote the Arduino software in <b>C++</b> and implemented the mobile application using <b>Flutter</b>.",
          "We won <b>best hardware hack</b>.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
          "https://icon.icepanel.io/Technology/svg/Arduino.svg",
          "https://icon.icepanel.io/Technology/svg/Dart.svg",
          "https://icon.icepanel.io/Technology/svg/Flutter.svg",
          "https://icon.icepanel.io/Technology/svg/Firebase.svg",
        ]}
        link="https://devpost.com/software/big-transistor-security"
        media="https://www.youtube.com/embed/ArLAnyjUF98"
      />
    </ContainerList>
  )
}
