import CenterContainer from "../../components/container/CenterContainer";
import ContainerList from "../../components/container/ContainerList";

export default function Christmas() {
  return (
    <ContainerList>
      <CenterContainer>
        <iframe src="/frames/christmas/index.html" style={{ width: "720px", height: "480px" }} />
      </CenterContainer>
    </ContainerList>
  )
}
