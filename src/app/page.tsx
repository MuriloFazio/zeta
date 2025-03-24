import Chat from "../components/Chat/Chat";
import { Container } from "./styles";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Chat />
      </Container>
    </>
  );
}
