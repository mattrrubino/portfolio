import ContainerList from "../components/container/ContainerList";
import ExperienceContainer from "../components/container/ExperienceContainer";
import TitleContainer from "../components/container/TitleContainer";
import useAppear from "../hooks/useAppear";

export default function Experience() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="Experience"
        desc="I have worked across several disciplines in<br/>both academic and corporate contexts.<br/>This has made me adaptable."
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="ESC Group" 
        loc="Buffalo, NY"
        role="Research Assistant"
        dates="June 2021 - Present"
        desc={[
          "The ESC Group is focused on the <b>application of computing</b> to the healthcare and manufacturing industries.",
          "I developed software for several <b>interdisciplinary projects</b>, including a smart health app with UB's School of Nursing and a smart manufacturing project with UB's Department of Industrial and Systems Engineering.",
          "I learned how to <b>collaborate</b> effectively with people who have different knowledge and experience.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg", alt: "Scikit-learn Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/AWS.svg", alt: "AWS Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/React.svg", alt: "React Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Flutter.svg", alt: "Flutter Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Firebase.svg", alt: "Firebase Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Unity.svg", alt: "Unity Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Git.svg", alt: "Git Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GitHub.svg", alt: "GitHub Icon" },
          { src: "https://images.ctfassets.net/nrgyaltdicpt/h9dpHuVys19B1sOAWvbP6/5f8d4c6d051f63e4ba450befd56f9189/ologo_square_colour_light_bg.svg", alt: "Overleaf Icon" },
        ]}
        link="https://cse.buffalo.edu/~wenyaoxu/esc.html"
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="Odoo" 
        loc="Buffalo, NY"
        role="Full Stack Engineer Intern"
        dates="June - Aug. 2023"
        desc={[
          "Odoo is reimagining <b>ERP software</b> with their suite of fully-integrated open source business apps.",
          "I developed <b>Apple Pay</b> and <b>Google Pay</b> integrations for Odoo's ecommerce platform using Python, JavaScript, and their respective APIs.",
          "I learned about the complex world of <b>payment processing</b> and experienced software engineering in the <b>corporate environment</b>.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/JavaScript.svg", alt: "JavaScript Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/XML.svg", alt: "XML Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg", alt: "PostgreSQL Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Linux.svg", alt: "Linux Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Git.svg", alt: "Git Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GitHub.svg", alt: "GitHub Icon" },
        ]}
        link="https://www.odoo.com/page/about-us"
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="Physical Hydrogeology Lab" 
        loc="Buffalo, NY"
        role="Research Assistant"
        dates="Dec. 2022 - Jan. 2023"
        desc={[
          "The Physical Hydrogeology Lab is focused on the study of <b>groundwater flow</b> and the impact it has on surrounding ecosystems.",
          "I built a <b>survey distribution system</b> serving over 300 stations nationally using Python, Django, Twilio, and the Qualtrics API.",
          "I learned about the value of <b>crowdsourcing</b> as a means of conducting scientific research.",
        ]}
        tech={[
          { src: "https://icon.icepanel.io/Technology/svg/Python.svg", alt: "Python Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Django.svg", alt: "Django Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/SQLite.svg", alt: "SQLite Icon" },
          { src: "https://www.svgrepo.com/show/354472/twilio-icon.svg", alt: "Twilio Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Linux.svg", alt: "Linux Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/Git.svg", alt: "Git Icon" },
          { src: "https://icon.icepanel.io/Technology/svg/GitHub.svg", alt: "GitHub Icon" },
        ]}
        link="http://www.crowdhydrology.com"
      />
    </ContainerList>
  )
}
