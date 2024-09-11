import React from "react";
import './App.css';

function App() {
 const data = [
  {
    header: "FREE",
    sub_header: <><span style={{ fontSize: '50px' }}>$0</span><span style={{ fontSize: '16px' }}>/month</span></>,
    list1:"✅ Single User",
    list2:"✅5GB Storage",
    list3:"✅Unlimited Public Projects",
    list4:"✅Community Access",
    list5:<option disabled>❌Unlimited Private Projects</option>,
    list6:<option disabled>❌Dedicated Phone Support</option>,
    list7:<option disabled>❌Free Subdomain</option>,
    list8:<option disabled>❌Monthly Status Reports</option>,
  },
  {
    header: "PAID",
    sub_header: <><span style={{ fontSize: '50px' }}>$10</span><span style={{ fontSize: '16px' }}>/month</span></>,
    list1:"✅ Single User",
    list2:"✅5GB Storage",
    list3:"✅Unlimited Public Projects",
    list4:"✅Community Access",
    list5:"✅Unlimited Private Projects",
    list6:"✅Dedicated Phone Support",
    list7:<option disabled>❌Free Subdomain</option>,
    list8:<option disabled>❌Monthly Status Reports</option>,
  },
  {
    header: "PAID",
    sub_header: <><span style={{ fontSize: '50px' }}>$20</span><span style={{ fontSize: '16px' }}>/month</span></>,
    list1:"✅ Single User",
    list2:"✅5GB Storage",
    list3:"✅Unlimited Public Projects",
    list4:"✅Community Access",
    list5:"✅Unlimited Private Projects",
    list6:"✅Dedicated Phone Support",
    list7:"✅Free Subdomain",
    list8:"✅Monthly Status Reports",
  }
 ];
 return(
  <div className='main'>
  {data.map((item,index)=>
  (<PriceTable
    key={index}
    title= {item.header}
    sub_title = {item.sub_header}
    list1= {item.list1}
    list2= {item.list2}
    list3= {item.list3}
    list4= {item.list4}
    list5= {item.list5}
    list6= {item.list6}
    list7= {item.list7}
    list8= {item.list8}
/>
  ))}
  </div>
 );
}

export default App;

 function PriceTable(props){
  return(
    <div className='container'>
      <div className='cards'>
        <p className='header'>{props.title}</p>
        <p className='sub_header'>{props.sub_title}</p>
        <hr style={{ border: '1px solid black', width: '100%' }} />
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