import { useState } from "react"
import { useUser } from "../context/UserContext"
import { Heading, VStack } from "@chakra-ui/react"

const Checkout = () => {

  return (
    <VStack p={20}>
      <Heading>Tu carrito de compras</Heading>
    </VStack>
  )
}

export default Checkout
