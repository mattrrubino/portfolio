import CenterContainer from "../../components/container/CenterContainer";
import ContainerList from "../../components/container/ContainerList";

export default function COVID() {
  return (
    <ContainerList>
      <CenterContainer>
        <iframe src="/frames/covid/index.html" className="aspect-[960/540] h-full" />
      </CenterContainer>
    </ContainerList>
  )
}
