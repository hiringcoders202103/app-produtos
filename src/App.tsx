import React, { useState, useEffect } from 'react'
import http from './services/AWSClient'
import { Container, Card, Title, Info } from './styles/products'
interface ProductProps {
  productName: string;
  items: [Items];
}
interface Items {
  sellers: [Sellers]
}

interface Sellers {
  sellerId: string;
  commertialOffer: CommertialOffer
}
interface CommertialOffer{
  Installments: [Installments];
}
interface Installments {
  Value: Number;
}

export function App() {
  
  // const [products, setProducts] = useState([]);
  
  const [products, setProducts] = useState<ProductProps[]>([])


  useEffect(() => {
    http
      .get('/')
      .then((response) => response.data)
        .then((data) => {
          setProducts(data)
        }
      )
    }, [])

  return(
    <Container>
     {
      products.map((product)=>{
        const price = product.items[0].sellers[0].commertialOffer.Installments[0].Value
        return (
          <Card key="{produtc.id}">
            <Title>{product.productName}</Title>
            <Info>R$ {price}</Info>
          </Card>
        )
      })
      }
    </Container>
  )
}
