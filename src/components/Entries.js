import React from 'react'

export default function Entries({item,editClickHandler,deleteDetail}) {
  return (
   
    <tr >
    <td>{item.A}</td>
    <td>{item.B}</td>
    <td>{item.C}</td>
    <td>{item.D}</td>
    <td>{item.E}</td>

    <td>
      <button type="button" onClick={(e)=>editClickHandler(e,item)}>Edit</button>
      <button onClick={(e)=>deleteDetail(e,item)}>Delete</button>
    </td>
  </tr>
    
  )
}
