import { FC } from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
import { Footer } from "../footer";
import { Body, Container, Cover, Title } from "./page.styles";

interface Props {
  blockMap: BlockMapType
  cover?: string
  title?: string
}

export const Page: FC<Props> = ({ blockMap, cover, title }) => {
  return (
    <Container>
      { cover && (
        <Cover url={ cover }>
          { title && <Title>{ title }</Title> }
        </Cover>
      ) }
      <Body>
        <NotionRenderer blockMap={ blockMap }/>
      </Body>
      <Footer/>
    </Container>
  )
}
