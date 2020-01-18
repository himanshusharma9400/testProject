import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const ShowNotFound = styled.div`
  width: 100%;
  color: rgba(0,0,0,0.87);
  justify-content: center;
  text-align: center;
  display: flex;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
`

export const ShowDetailsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

export const ShowTitle = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  margin-right: 32px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
    margin-right: 8px;
  }
`

export const ShowDate = styled.div`
  font-size: 18px;
  line-height: 18px;
  margin-right: 32px;
  font-weight: bold;
  color: rgba(0,0,0,0.87);
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    margin-right: 8px;
  }
`

export const ShowRatingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32px;
  @media (max-width: 768px) {
    margin-right: 8px;
  }
`

export const ShowRatings = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: rgba(0,0,0,0.87);
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`

export const ShowDescription = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: rgba(0,0,0,0.87);
  overflow:hidden; 
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 16px;
  }
`

export const ShowImage = styled.img`
  margin-right: 32px;
  height: 256px;
  width: 160px;
  @media (max-width: 768px) {
    margin-right: 8px;
    height: 128px;
    width: 92px;
  }
`

export const IFrameStyle = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 512
}