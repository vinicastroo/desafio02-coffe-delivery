import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${(props) => props.theme['max-width']};
  padding: 2rem 1rem;
  margin: 0 auto;

  > h1 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 900;
    font-size: 2rem;
  }
`

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`
