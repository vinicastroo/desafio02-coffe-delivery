import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  max-width: ${(props) => props.theme['max-width']};
  width: 100%;

  nav {
    display: flex;
    gap: 0.5rem;
    transition: background-color 0.2s, color 0.2s;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      position: relative;

      border: 1px solid transparent;
      line-height: 1.6;
      padding: 0.5rem;
      border-radius: 5px;
      font-weight: 500;
      transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }

    .location {
      background: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};
    }

    .checkout {
      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};
    }

    .location:hover {
      color: ${(props) => props.theme['purple-300']};
      background: ${(props) => props.theme['purple-500']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }

    .checkout:hover {
      color: ${(props) => props.theme['yellow-300']};
      background: ${(props) => props.theme['yellow-500']};
      border: 1px solid ${(props) => props.theme['yellow-500']};
    }
  }
`

export const Badge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  background: ${(props) => props.theme['yellow-700']};
  right: 0;
  top: 0;
  border-radius: 50px;
  margin-top: -0.625rem;
  margin-right: -0.625rem;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
`
