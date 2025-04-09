import { Container, VideoBackground } from "./styles";
import { HeroArea } from "@/components/HeroArea";

export default function Home() {
  return (
    <Container>
      <VideoBackground playsInline autoPlay muted preload="metadata" loop>
        <source
          src="https://d3l1zi2ssjogwx.cloudfront.net/bg.mp4"
          type="video/mp4"
        />
      </VideoBackground>
      <HeroArea />
    </Container>
  );
}
