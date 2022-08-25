import styled from 'styled-components'

import background from '../../../../assets/background.png'

export const IntroContainer = styled.div`
  padding: 5.875rem 0;

  width: 100%;

  background: url(${background});

  @media (max-width: 768px) {
    padding: 3.25rem 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: ${(props) => props.theme['max-width']};
  overflow: hidden;
  margin: 0 auto;
  gap: 2.5rem;
  padding: 0 1rem;

  > div:first-child {
    flex: 1;
  }
  > div {
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      line-height: 1.3;
    }

    h3 {
      font-size: 1.25rem;
      margin-top: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    > img {
      object-fit: cover;
      width: auto;
      height: auto;
      max-width: 476px;
      max-height: 360px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    > div {
      h1,
      h3 {
        text-align: center;
      }
    }
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      flex: 1;
    }
  }
`

const STATUS_COLORS = {
  dark_yellow: 'yellow-700',
  black: 'base-text',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icon = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 100rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`
