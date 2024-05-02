import React from 'react'

function SelectStudent({setStudent}) {


  return (
    <>
        <button onClick={() => setStudent('Kyle')}>Kyle</button>
        <button onClick={() => setStudent('Ethan')}>Ethan</button>
        <button onClick={() => setStudent('Thai')}>Thai</button>
    </>
  )
}

export default SelectStudent