import React, { useState } from 'react'

const EditData = ({editFormData,editChangeHandler,editSaveHandler}) => {
    return (
        <tr>
            <td>
                <input type="text" name="A" className="A"  value={editFormData.A} onChange={editChangeHandler} />
            </td>
            <td>
                <input type="text" name="B" className="B"  value={editFormData.B} onChange={editChangeHandler}/>
            </td>
            <td>
                <input type="text" name="C" className="C" value={editFormData.C}  onChange={editChangeHandler} />
            </td>
            <td>
                <input type="text" name="D" className="D"  value={editFormData.D} onChange={editChangeHandler} />
            </td>
            <td>
                <input type="text" name="E" className="E"  value={editFormData.E} onChange={editChangeHandler} />
            </td>
            <td>
                <button type='submit' onClick={editSaveHandler}>Save</button>
            </td>
        </tr>
    )
}

export default EditData