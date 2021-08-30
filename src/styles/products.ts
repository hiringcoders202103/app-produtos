import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1485px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 20px;
  padding: 10px;
  height: 240px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  @media(max-width: 1024px) {
    width: 80%;
  }
`

export const Title = styled.p`
  display: block;
  font-weight: 700;
  font-size: 2rem;
  color: #000!important;
`

export const Info = styled.p`
  font-size: 1.85rem;
  color: #FFF;
  margin-top: 0;
  span {
    font-weight: bold;
  }
`
