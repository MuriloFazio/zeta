import { Container, BackgroundImage } from "./styles";
import { HeroArea } from "@/components/HeroArea";
import zetaBackground from "../assets/neural_background.png";

export default function Home() {
  return (
    <Container>
      <BackgroundImage src={zetaBackground} alt="background zeta" />
      <HeroArea />
    </Container>
  );
}
