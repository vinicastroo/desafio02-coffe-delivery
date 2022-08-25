import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  flex-wrap: wrap;
  max-width: ${(props) => props.theme['max-width']};
  width: 100%;
  padding: 0 1rem;
  gap: 2rem;
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    > strong {
      margin-bottom: 0.25rem;
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-700']};
    }

    > span {
      margin-bottom: 2.5rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const BorderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px 2px;
  border-radius: 6px 36px;

  background: ${(props) => `linear-gradient(
        135deg, 
        ${props.theme['yellow-500']} 50%, 
        ${props.theme['purple-500']} 100%
        )`};
`

export const Card = styled.div`
  width: 100%;
  background: ${(props) => props.theme.white};
  border-radius: 6px 35px;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;

    > div {
      display: flex;
      flex-direction: column;

      font-size: 1rem;
    }
  }

  > div:last-child {
    margin: 0;
  }
`

const STATUS_COLORS = {
  dark_yellow: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface IconProps {
  backgroundColor: keyof typeof STATUS_COLORS
}
export const Icon = styled.div<IconProps>`
  padding: 0.5rem;
  background: ${(props) => props.theme[STATUS_COLORS[props.backgroundColor]]};
  border-radius: 30px;

  color: ${(props) => props.theme.white};
`
