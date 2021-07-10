
import React, { useState } from "react";
import RandomUserApi from './RandomUserApi';


interface Props{
   
}

const App: React.FC<Props>=(props) => {
  const [page,setPage]=useState(1);
  const [title,setTitle]=useState("Favourites")
  console.log(page);
  console.log(title);
    return (
        <>
             <div className="flex flex-col items-start space-y-8 p-8">
            <RandomUserApi page={page} title={title}/>
            <div className="flex space-x-8">
            <button className="px-2 py-2 text-white bg-black" onClick={()=>setPage(page + 1)}>NEXT</button>
            <button className="px-2 py-2 text-white bg-black" onClick={()=>setTitle("Top Performers")}>CHANGE TITLE</button>
            </div>
            </div>
            
        </>
    );

};
App.defaultProps={
}

export default App;
