import ContainerList from "../../components/container/ContainerList";
import ExperienceContainer from "../../components/Container/ExperienceContainer";
import TitleContainer from "../../components/container/TitleContainer";
import useAppear from "../../hooks/useAppear";

export default function Experience() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="Experience"
        desc="I have worked across several disciplines in<br/>both academic and corporate environments.<br/>This has made me adaptable."
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="ESC Group" 
        loc="Buffalo, NY"
        role="Research Assistant"
        dates="June 2021 - Present"
        desc={[
          "The <a class='underline' href='https://cse.buffalo.edu/~wenyaoxu/esc.html' target='_blank'>ESC Group</a> is focused on the <b>application of<br/>computing</b> to the healthcare and manufacturing industries.",
          "I developed software for several <b>interdisciplinary projects</b>, including<br/>a smart health app with UB's School of Nursing and a smart manufacturing<br/>project with UB's Department of Industrial and Systems Engineering.",
          "I learned how to <b>collaborate</b> effectively with people<br/>who have different knowledge and experience.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/scikit-learn.svg",
          "https://icon.icepanel.io/Technology/svg/AWS.svg",
          "https://icon.icepanel.io/Technology/svg/React.svg",
          "https://icon.icepanel.io/Technology/svg/Flutter.svg",
          "https://icon.icepanel.io/Technology/svg/Firebase.svg",
          "https://icon.icepanel.io/Technology/svg/Unity.svg",
          "https://icon.icepanel.io/Technology/svg/Git.svg",
          "https://icon.icepanel.io/Technology/svg/GitHub.svg",
          "https://images.ctfassets.net/nrgyaltdicpt/h9dpHuVys19B1sOAWvbP6/5f8d4c6d051f63e4ba450befd56f9189/ologo_square_colour_light_bg.svg",
        ]}
        proj="/experience/esc"
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="Odoo" 
        loc="Buffalo, NY"
        role="Full Stack Engineer Intern"
        dates="June 2023 - August 2023"
        desc={[
          "<a class='underline' href='https://odoo.com' target='_blank'>Odoo</a> is reimagining <b>ERP software</b> with their<br/>suite of fully-integrated open source business apps.",
          "I developed <b>Apple Pay</b> and <b>Google Pay</b> integrations for Odoo's<br/>ecommerce platform using Python, JavaScript, and their respective APIs.",
          "I learned about the complex world of <b>payment processing</b> and<br/>experienced software engineering in the <b>corporate environment</b>.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
          "https://icon.icepanel.io/Technology/svg/XML.svg",
          "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
          "https://icon.icepanel.io/Technology/svg/Linux.svg",
          "https://icon.icepanel.io/Technology/svg/Git.svg",
          "https://icon.icepanel.io/Technology/svg/GitHub.svg",
        ]}
      />
      <ExperienceContainer
        innerRef={useAppear()}
        org="Physical Hydrogeology Lab" 
        loc="Buffalo, NY"
        role="Research Assistant"
        dates="December 2022 - January 2023"
        desc={[
          "The <a class='underline' href='http://hydro.geology.buffalo.edu/' target='_blank'>Physical Hydrogeology Lab</a> is focused on the study of<br/><b>groundwater flow</b> and the impact it has on surrounding ecosystems.",
          "I built a <b>survey distribution system</b> serving over 300 stations<br/>nationally using Python, Django, Twilio, and the Qualtrics API.",
          "I learned about the value of <b>crowdsourcing</b><br/>as a means of conducting scientific research.",
        ]}
        tech={[
          "https://icon.icepanel.io/Technology/svg/Python.svg",
          "https://icon.icepanel.io/Technology/svg/Django.svg",
          "https://icon.icepanel.io/Technology/svg/SQLite.svg",
          "https://www.svgrepo.com/show/354472/twilio-icon.svg",
          "https://icon.icepanel.io/Technology/svg/Linux.svg",
          "https://icon.icepanel.io/Technology/svg/Git.svg",
          "https://icon.icepanel.io/Technology/svg/GitHub.svg",
        ]}
      />
    </ContainerList>
  )
}
