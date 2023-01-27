import styled, { css } from 'styled-components'

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  > strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px; ;
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 500;
      font-size: 1rem;
    }

    > span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }
`
export const HeaderInformationCard = styled(HeaderCard)`
  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`
export const HeaderPaymentCard = styled(HeaderCard)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 0.75rem;
    gap: 0.75rem;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;

    transition: background-color 0.2s, color 0.2s;
    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  button:focus,
  button:active {
    border: 1px solid transparent;
  }

  button:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  .selectedButton {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
  }
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  > div {
    display: flex;
    gap: 1rem;
  }

  .opcional_input {
    position: relative;
    display: flex;
    align-items: center;

    > span {
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 1rem;
      margin-right: 1rem;
      font-style: italic;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

interface InputProps {
  size?: number
}

export const Input = styled.input<InputProps>`
  padding: 0.75rem;
  border: 0;
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  margin-bottom: 1rem;
  border-radius: 4px;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}%;
      ${props.size === 100 &&
      css`
        flex: 1;
      `}
    `}

  .width_auto {
    width: auto;
  }
`
