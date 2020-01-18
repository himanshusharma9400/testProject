import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  background: #EAEAEA;
  padding: 8px 16px 8px 16px;
`;

export const TitleText = styled.div`
  color: purple;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
`;

export const BackButton = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-left: auto;
  color: rgba(0,0,0,0.54);
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  margin-left: auto;
`