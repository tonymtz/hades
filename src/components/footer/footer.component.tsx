import Link from "next/link"
import { Container, Links } from "./footer.styles";

export const Footer = () => {
  return (
    <Container>
      <p>Copyright © 2022 TepacheLabs</p>
      <Links>
        <Link href="/terminos">Términos</Link>
        <Link href="/privacidad">Privacidad</Link>
      </Links>
    </Container>
  )
}
