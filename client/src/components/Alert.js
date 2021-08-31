import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertContainer } from 'elements/alert'

const Alert = ({ type, message, alert, setAlert }) => {
  useEffect(() => {
    let time

    if (alert) {
      time = setTimeout(() => {
        setAlert(false)
      }, 3000)
    }

    return () => clearTimeout(time)
  }, [alert, setAlert])

  return (
    <>
      <AnimatePresence>
        {alert && (
          <AlertContainer
            animate={{ y: [-10, 0], opacity: [0, 1] }}
            as={motion.div}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            type={type}
          >
            <p>{message}</p>
          </AlertContainer>
        )}
      </AnimatePresence>
    </>
  )
}

export default Alert
