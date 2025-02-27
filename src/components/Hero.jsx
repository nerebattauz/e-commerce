import { VStack, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const hero = () => {
  return (
    <VStack bg={"pink"} py={35} px={20} borderRadius={20} color={'white'} textAlign={"center"} spacing={5} w={"100%"}>
      <Heading w={"4xl"} >💖🎁✨</Heading>
      <Heading> Regalos únicos, diseñados para vos </Heading>
       <p>Transformá tus recuerdos en algo especial con nuestros stickers, polaroids y pósters personalizados. <br />Creá el regalo perfecto para sorprender a alguien o decorá tus espacios con diseños únicos.</p>
       <Button as={Link} to={"/products"} variant={"solid"}>Ir a todos los productos</Button>
    </VStack>
  )
}

export default hero

