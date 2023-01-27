import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1rem;

  width: 16rem;
  height: 18rem;
  > img {
    max-width: 120px;
    max-height: 120px;
    object-fit: cover;
    margin-top: -2rem;
  }

  strong {
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  > p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const Category = styled.div`
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  border-radius: 50px; ;
`

export const FooterProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  margin-bottom: 0.5rem;

  > strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-text']};
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.55rem;
  }

  input {
    width: 30px;
  }
`

export const Button = styled.button`
  border: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    padding: 0.5rem 0.75rem;

    background: ${(props) => props.theme['purple-700']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.white};
    }

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
