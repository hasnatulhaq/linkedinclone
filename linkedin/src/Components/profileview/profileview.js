function Redbox(){
  return(
    <>
    <Greenbox/>
       <h1>hello world</h1>
    </>
  )
}

function Greenbox(){
  return(
    <>
     <Redbox/>
       <h1>hello world</h1>
       <ProfileView/>
    </>
  )
}



export default function ProfileView(){
    return(
        <>
        <Redbox/>
        <div className="main-wrapper">
           <div>
             </div> 
             <div>
               </div>   
        </div>
          
        </>
    )
}



