import React from 'react'
import { motion } from 'framer-motion'
import { Container, SpinnerLoading, Title } from 'elements/spinner'

const Spinner = () => {
  return (
    <Container>
      <SpinnerLoading
        animate={{ rotate: 360 }}
        as={motion.div}
        transition={{ repeat: Infinity, transition: 'easeInOut', duration: 1 }}
      />
      <Title>Loading</Title>
    </Container>
  )
}

export default Spinner
