import styled from 'styled-components'

export const ProductInformationContent = styled.div`
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
  border-radius: 6px 44px;
`

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  & + & {
    margin-top: 1.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    > div {
      display: flex;
      flex-direction: row;
    }

    > div:first-child {
      justify-content: space-between;
      font-size: 1rem;

      span {
        color: ${(props) => props.theme['base-subtitle']};
      }

      strong {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
export const ButtonGroup = styled.div`
  gap: 0.5rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  transition: color 0.2s, background-color 0.2s;

  svg {
    margin-right: 0.25rem;
    color: ${(props) => props.theme['purple-500']};
    transition: color 0.2s;
  }

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`

export const Price = styled.div`
  margin-top: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }

    > span:first-child {
      font-size: 0.875rem;
    }

    > span:last-child {
      font-size: 1rem;
    }

    > span {
      color: ${(props) => props.theme['base-text']};
    }
  }

  > div:first-child {
    margin-top: 0;
  }

  button {
    border: 0;
    margin-top: 1.5rem;
    text-align: center;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
