import styled from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
    variant: ButtonVariants;
  }

  const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    success: 'green',
    danger: 'red',
  }

export const ButtonContainer = styled.button<ButtonContainerProps>`

${props => {
  return ` background-color: ${buttonVariants[props.variant]};`
}}
`