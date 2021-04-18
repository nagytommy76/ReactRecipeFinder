import styled from 'styled-components'

// A theme változó az App.js, ThemeProveider-be átadott object-ből jön!
// lightTheme egy boolean amit a ToggleContainer styled componentnek adok át
export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 7rem;
  height: 3rem;
  outline: none;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;