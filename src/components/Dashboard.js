import React from 'react'
import Card from './Card'
 

function Dashboard({result,setResult}) {
        let data=[
            {  Color:"primary",
               Title:"Earning (Monthly)",
               Amount:"$40,000",
               Icon:"fa-calendar",
               isprogress:true
            },
            { Color:"success",
            Title:"Earnings (Annual)",
            Amount:"$215,000",
            Icon:"fa-dollar-sign",
            isprogress:true
            },
            {  Color:"info",
            Title:"Tasks",
            Amount:"50%",
            Icon:"fa-clipboard-list",
            isprogress:false
            },
            {  Color:"warning",
            Title:"Pending Requests",
            Amount:"18",
            Icon:"fa-comment",
            isprogress:true
             }
        ]

        // let handleDelete=(i)=>{
        //   let newuser=[...result]
        //   newuser.splice(i,1)
        //   setResult(newuser )
        // }

        


  return<>
    <div className='container-fluid'>
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        </div>
        <div className="row">

                {
                    data.map((e,i)=>{
                        return <Card data={e} key={i}/>
                    })
                }


         </div>

  
  
  </>
}

export default Dashboard
