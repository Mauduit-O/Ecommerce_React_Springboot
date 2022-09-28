import styled from 'styled-components';

export const ContainerProduct = styled.div`
  padding: 8% 4%;
  border-bottom: 1px solid #d0d0d0;

  &:hover {
    background: #f3f3f3;
  }
`
export const ContainerProductInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  cursor: pointer;
`
export const Quantity = styled.input`
  text-align: center;
  cursor: pointer;
`
export const Link = styled.a`
  text-decoration:none;
  color:black;

  &:hover{
    color:pink;
  }
`
export const TitleProduct = styled.h1`
  font-size: 13px;
`
export const SubtitleProduct = styled.p`
  font-size: 12px;
  color: black;
`
export const ContainerProductPrice = styled.div`
  display: flex;
  justify-content: space-between;	
  font-size: 12px;	
`
export const ProductPrice = styled.p`
  margin-bottom: 0;	
  color: black;
`
export const DeleteProduct = styled.button`
  background:transparent;
  border:none;	
  color: #995E06;
`
export const ContainerQuantity = styled.div`
  display: flex;
`
export const BtnQuantity = styled.p`
  width: 4vw;
  background: black;
  border: none;	
  border-radius: 4px;
  color: white;
  margin-right: 15px;
  font-size: 20px;
  font-family: "Avenir-Heavy";
  text-align: center;
`