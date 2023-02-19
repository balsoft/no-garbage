import styled from "styled-components";
import {IStack} from "../h-stack/h-stack.styled";

const VStackStyled = styled.div<IStack>`
  position: ${props => props.position};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  overflow: ${props => props.overflow};
  flex-grow: ${props => props.wrap};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  flex-wrap: ${props => props.wrap};
  cursor: ${props => props.cursor};
  opacity: ${props => props.opacity};
  transition: ${props => props.transition};
};
`

export default VStackStyled