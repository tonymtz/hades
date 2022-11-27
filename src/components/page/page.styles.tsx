import styled from '@emotion/styled'
import { Quicksand } from '@next/font/google'

const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const Container = styled.section`
  height: 100%;
`

interface CoverProps {
  url: string
}

export const Cover = styled.div<CoverProps>`
  background-image: ${ ({ url }) => url ? `url(${ url })` : "none" };
  height: 11rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 43em) {
    height: 20rem;
  }
`

export const Body = styled.div`
  background-color: #fcfcfc;
  border-radius: 1rem 1rem 0 0;
  margin: 10rem auto 0;
  padding: 1em 1em;
  position: relative;
  width: 100%;

  @media (min-width: 43em) {
    box-shadow: 0 0 4em rgba(150, 150, 150, 0.1);
    margin-top: 16rem;
    padding-left: 2em;
    padding-right: 2em;
    width: 60rem;
  }
`

export const Title = styled.h1`
  ${ quicksand.style }

  color: #fff;
  font-size: 2.5rem;
  padding: 0 1rem;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  width: 100%;

  @media (min-width: 43em) {
    font-size: 3.5rem;
    width: 60rem;
  }
`
