import ContainerList from "../components/container/ContainerList";
import PublicationContainer from "../components/container/PublicationContainer";
import TitleContainer from "../components/container/TitleContainer";
import useAppear from "../hooks/useAppear";

export default function Publications() {
  return (
    <ContainerList>
      <TitleContainer
        innerRef={useAppear()}
        title="Publications"
        desc="I am interested in machine learning<br/>research, particularly with applications<br/>to healthcare and manufacturing."
      />
      <PublicationContainer
        id="mdd"
        innerRef={useAppear()}
        title="A Mispronunciation-Based Voice-Omics Representation Framework for Screening Specific Language Impairments in Children"
        authors={[
          "Wei Bo",
          "Matthew Rubino",
          "Wenyao Xu",
        ]}
        location="IEEE ICHI 2024"
        type="Conference Paper"
        abstract={`
          This paper introduces an innovative end-to-end (E2E) framework for screening Specific Language Impairment (SLI) in children,
          centralizing phoneme-level mispronunciation (PLM) detection to enhance the precision and reliability. We have developed a
          unique voice-omics representation that translates PLM predictions into symbolic sequences, yielding significant phenotyping
          biomarkers that provide objective and quantifiable assessments of children's speech patterns. Through meticulous fine-tuning
          of the Connectionist Temporal Classification (CTC) model on the L2-ARCTIC dataset and rigorous five-fold cross-validation,
          our E2E models have demonstrated remarkable accuracy, with Area Under the Curve (AUC) values exceeding 0.71 and a notable
          recall rate of up to 71.5 % on the CHILDES dataset. Our approach signifies a substantial advancement in SLI screening,
          leveraging cutting-edge technology to capture the complexities of spontaneous speech in children.
        `}
        link="https://www.computer.org/csdl/proceedings-article/ichi/2024/837300a294/1ZCgZ5NyLf2"
      />
      <PublicationContainer
        id="twin"
        innerRef={useAppear()}
        title="A Campus Prototype of Interactive Digital Twin in Cyber Manufacturing"
        location="ACM SenSys 2022"
        type="Demo Paper"
        authors={[
          "Matthew Rubino",
          "Michelle Weng",
          "Jiasheng Chen",
          "Shardul Saptarshi",
          "Marcus Francisco",
          "Alex Francisco",
          "Chi Zhou",
          "Hongyue Sun",
          "Wenyao Xu",
        ]}
        abstract={`
          Smart manufacturing and Industry 4.0 are bringing disruptive changes to the
          manufacturing sector. Smart manufacturing increases productivity, creates safer
          conditions for workers, and simplifies product customization, all while decreasing
          business expenses. To this end, we have created a flexible three-component
          architecture for remote machine management, using it to build a digital twin
          prototype of a Creality Ender-3 Pro 3D printer located on the University at Buffalo
          campus. This twin provides users with the ability to monitor and control the machine
          from anywhere in the world through a web interface. Our system improves upon existing
          technologies, such as Octoprint, through the addition of twin views. It also relies
          upon cheaper components, using the Arduino and ESP32 rather than the Raspberry Pi.
          Finally, existing technologies tend to focus on one specific type of machine. In
          contrast, our framework is flexible, capable of supporting many different machines.
        `}
        link="https://dl.acm.org/doi/abs/10.1145/3560905.3568049"
      />
    </ContainerList>
  )
}
