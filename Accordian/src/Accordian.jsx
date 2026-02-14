import React, { use, useState } from 'react'
import './index.css'
import data from './data'
import './index.css'
function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])
  function handleSingleSelection(getcurrentId) {
    console.log(getcurrentId)

    setSelected(getcurrentId === selected ? null : getcurrentId)
    console.log(selected);
  }
  function handleMultiSelection(getcurrentId) {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentId)
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getcurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple)
    console.log(cpyMultiple);


  }

  return (
    <>

      <div className='wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable All</button>

        <div className='accordian'>
          {
            data && data.length > 0 ? (
              data.map((dataItem) => (
                <div className='item' >
                  <div className='title' onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }>


                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  <div>
                    {
                      enableMultiSelection ?
                        multiple.indexOf(dataItem.id) !== -1 &&
                        <div className='content'>
                          {dataItem.answer}

                        </div> :
                        selected === dataItem.id && <div className='content'>
                          {dataItem.answer}

                        </div>

                    }
                    {/* {
                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?(
                      <div className='content'>
                        {dataItem.answer}

                      </div>
                    ):null
                  } */}
                  </div>
                </div>
              ))
            ) : <div><h4>No data found!!</h4></div>
          }
        </div>
      </div>

    </>
  )
}

export default Accordian
