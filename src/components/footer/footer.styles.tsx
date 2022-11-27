import styled from '@emotion/styled'

export const Container = styled.footer`
  align-items: center;
  background-color: #282828;
  color: #fff;
  display: flex;
  font-size: 0.8em;
  height: 6em;
  justify-content: space-between;
  padding: 1em;
  width: 100%;

  @media (min-width: 43em) {
    margin: 0 auto;
    padding-left: 2em;
    padding-right: 2em;
  }
`

export const Links = styled.div`
  * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`
