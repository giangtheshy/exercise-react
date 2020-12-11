import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false)
  const hexValue = `#${hex}`
  const bgc = rgb.join(',')

  const handleClick = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }
  useEffect(() => {
    const clear = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(clear)
  }, [alert])
  return (
    <article className='color-center' style={{ backgroundColor: `rgb(${bgc})`, color: `${index > 10 && 'white'}` }} onClick={() => handleClick()}>
      <p className="weight">{weight}%</p>
      <p className="hex">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}

    </article>
  )
}

export default SingleColor
