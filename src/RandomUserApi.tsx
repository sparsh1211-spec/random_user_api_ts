
import axios from "axios";
import  {FC, memo, useEffect, useState} from "react";

interface Props{
    page:number;
    title:string;

   
}

const RandomUsersApi: FC<Props>=({title ,page}) => {

    const [users,setUsers]=useState<any>([]);

    console.log(users);
    console.log("user list rendering with page : " + page + " and: "+ title);

    useEffect(() => {
       
    axios.get("https://randomuser.me/api/?inc=id,gender,name,email,nat,picture&page="+ page +"&results=20").then((response)=>{console.log(response.data.results);

    setUsers(response.data.results);


    });

    },[page]);  //useEffect will run the function iff there is a change in the dependency array as in this case "page".

    //function inside useEffect will not be added in queue instead it will run synchronously, while setTimeout adds function in queue after a definite time(or we can say it runs the function asynchronously).


    
    return (
        <>
        <div className="text-2xl font-extrabold">Title: {title}</div>
        <div className="flex space-x-8">
         <div className=""><p className="font-extrabold">EMAIL</p><hr></hr>{users.map((u:any)=><li>{u.email}</li>)}</div>
         
         <div className=""><p className="font-extrabold">GENDER</p><hr></hr>{users.map((u:any)=> <div>{u.gender}</div>)}</div>
         <div className=""><p className="font-extrabold">NATIONALITY</p><hr></hr>{users.map((u:any)=> <div>{u.nat}</div>)}</div>
         </div>
        </>
    );

};
RandomUsersApi.defaultProps={
};

export default memo(RandomUsersApi)
