import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 2rem;
  }

  width: 100%;

  max-width: ${(props) => props.theme['max-width']};
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 2.5rem;

  @media (max-width: 935px) {
    grid-template-columns: 1fr;
  }
`
