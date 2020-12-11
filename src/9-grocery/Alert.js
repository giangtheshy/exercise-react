import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <div className={`alert ${type}`}>
      {msg}

    </div>
  )
}

export default Alert
