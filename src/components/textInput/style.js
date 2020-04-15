import styled from "styled-components";
import theme from "../../theme";
export const Container = styled.View`
  flex-direction: row;
  border-radius: 4;
  width: 100%;
  /* elevation: 1; */
  border-width: 0;
  height: 60px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "rgba(255,255,255,0.15)"};
`;
export const IconContainer = styled.View`
  border-right-width: 1;
  border-color: ${props => theme.colors.inputTextBorderColor};
  flex: 0.2;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;
export const InputContainer = styled.View`
  flex: ${props => (props.flex ? props.flex : 0.8)};
  padding-left: 18px;
  justify-content: center;
`;
export const TextInputView = styled.TextInput`
  font-size: ${props =>
    props.fontSize ? props.fontSize : theme.fontSize.normalSmall};
  font-family: ${theme.fontFamily.regular};
  color: ${props =>
    props.placeholderTextColor
      ? props.placeholderTextColor
      : theme.colors.white};
  text-align: ${props => (props.lang === "ar" ? "right" : "left")};
`;
