import Link from "next/link"
import { List, ListItem } from "./nav.styles";

export const Nav = () => {
  return (
    <nav>
      <List>
        <ListItem>
          <Link href="/">
            Inicio
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/privacidad">
            Privacidad
          </Link>
        </ListItem>
      </List>
    </nav>
  )
}
