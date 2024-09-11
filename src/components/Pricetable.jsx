import React from "react";

export default function priceTable(props){
    return(
      <div className='container'>
        <div className='cards'>
          <p className='header'>{props.title}</p>
          <p className='sub_header'>{props.sub_title}</p>
          <hr></hr>
          <ul>
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
            <li>{props.list4}</li>
            <li>{props.list5}</li>
            <li>{props.list6}</li>
            <li>{props.list7}</li>
            <li>{props.list8}</li>
          </ul>
          <div>
            <button className='btn' type='button'>
              <b>BUTTON</b>
            </button>
          </div>
        </div>
      </div>
    )
  }
 