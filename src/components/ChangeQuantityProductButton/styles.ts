import styled from 'styled-components'

export const ChangeQuantityButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border: 0;
    background: transparent;
    text-align: center;
    width: 1.25rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button:hover {
    opacity: 0.7;
  }
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
