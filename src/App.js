import React, { useState } from "react";
import './app.css'
import { v4 as uuid} from 'uuid'
import Entries from './components/Entries'
import EditData from "./components/EditData";
import {CSVLink} from 'react-csv'

function App() {
  const [detail,setDetail]=useState([])
  const [addDetail,setAddDetail]=useState({
    A:"",
    B:"",
    C:"",
    D:"",
    E:""
  })
  const [editFormData,setEditFormData]=useState({
    A:"",
    B:"",
    C:"",
    D:"",
    E:""
  })
  const [editId,setEditId]=useState(null)


  const submitHandler=(e)=>{
    e.preventDefault()

    const newDetail={
      id:uuid(),
      A:addDetail.A,
      B:addDetail.B,
      C:addDetail.C,
      D:addDetail.D,
      E:addDetail.E
    }
    setDetail(detail.concat(newDetail))
    setAddDetail({
      A:"",
      B:"",
      C:"",
      D:"",
      E:""
    })
  }

  const editClickHandler=(e,item)=>{
    e.preventDefault()
    setEditId(item.id)

    const values={
      A:item.A,
      B:item.B,
      C:item.C,
      D:item.D,
      E:item.E
    }

    setEditFormData(values)
  }


const editChangeHandler=(e)=>{
    e.preventDefault()
    setEditFormData({...editFormData,[e.target.name]:e.target.value})
  }

  const changeHandler=(e)=>{
    e.preventDefault()
    setAddDetail({...addDetail,[e.target.name]:e.target.value})
  }
const editSaveHandler=(e)=>{
  e.preventDefault()
  
  const editedData={
    id:editId,
    A:editFormData.A,
    B:editFormData.B,
    C:editFormData.C,
    D:editFormData.D,
    E:editFormData.E,
  }

  const newEdittedData=[...detail]
  const index=detail.findIndex((data)=>data.id===editId)
  newEdittedData[index]=editedData
  setDetail(newEdittedData)
  setEditId(null)
}

const deleteDetail=(e,item)=>{
  e.preventDefault()
  const newData=detail.filter(data=>(
    data.id!==item.id
  ))
  setDetail(newData)
}

const headers=[
  {label:"A",key:"A"},
  {label:"B",key:"B"},
  {label:"C",key:"C"},
  {label:"D",key:"D"},
  {label:"E",key:"E"}
]

const csvReport={
  data:detail,
  headers:headers,
  filename:'data.csv'
}
  return (
    <div className="table-container">
      <table>
 
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
      {detail.map(item=>(
          <div key={item.id} >
          {editId===item.id?(<EditData editSaveHandler={editSaveHandler}  editFormData={editFormData} editChangeHandler={editChangeHandler}/>):( <Entries item={item} editClickHandler={editClickHandler} deleteDetail={deleteDetail}/>)
          }
          </div>
          ))}
       
      </tbody>
      </table>
      <br />

      <br/>
      <br />
      <div>
      <CSVLink className="csvlink"{...csvReport}>download</CSVLink>
      </div>
      <br />
      <br />

      <h1>Add your details</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="A" className="A" placeholder="Enter" value={addDetail.A} onChange={changeHandler}/>
        <input type="text" name="B" className="B" placeholder="Enter" value={addDetail.B} onChange={changeHandler}/>
        <input type="text" name="C" className="C" placeholder="Enter" onChange={changeHandler} value={addDetail.C} />
        <input type="text" name="D" className="D" placeholder="Enter" value={addDetail.D}  onChange={changeHandler}/>
        <input type="text" name="E" className="E" placeholder="Enter" value={addDetail.E}  onChange={changeHandler}/>
        <button type="submit" className="addButton">Add</button>
      </form>
    </div>
      );
}

export default App;
