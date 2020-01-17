import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardDiv = styled.div`
  height: 280px;
  width: 400px;
  border: solid 1px rgba(0,0,0,0.87);
  display: flex;
  margin: 16px;
  cursor: pointer;
`

export const CardImage = styled.img`
  width: 50%;
  height: 100%;
`

export const CardDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 8px;
`

export const CardTitle = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`

export const CardSubTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
  color: rgba(0,0,0,0.54);
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`

export const CardDescription = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
  color: rgba(0,0,0,0.87);
  overflow:hidden; 
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`
