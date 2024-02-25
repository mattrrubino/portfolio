import CenterContainer from "../../components/container/CenterContainer";
import ContainerList from "../../components/container/ContainerList";

export default function Pokemix() {
  return (
    <ContainerList>
      <CenterContainer>
        <iframe src="/frames/pokemix/index.html" className="h-full w-full border-none overflow-hidden" />
      </CenterContainer>
    </ContainerList>
  )
}
