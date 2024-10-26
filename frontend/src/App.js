// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line

import axios from "axios";

function Getclasses({}) {

  const handleLogin2 = async () => {
    // return fetch('http://localhost:3000/login')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json.movies)
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    const response = await fetch('http://localhost:3000/login' , {
      method: 'GET'
    })
    
    const data = await response.json();
    console.log(data);

    // const headers = [
    //   "Access-Control-Allow-Origin", "http://localhost:3000/login"
    // ]

    // axios.get('/api/data')
    // .then(response => {
    //   console.log(response.data); // 'Hello from the server!'
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    // const obj = {
    //   method: 'POST',
    //   body: JSON.stringify("Hello") ,
    //   mode: "no cors" ,
    //   headers: {
    //       'Access-Control-Allow-Origin': '*' ,
    //       'Content-type': 'application/json'
    //   }
    // }

    // const myHeaders = {"headers": ["Access-Control-Allow-Origin", "*"]};

    // let headers = {headers: ['Access-Control-Allow-Origin', 'http://localhost:3000/login']};

    // return fetch("http://localhost:3000/login", {"headers": ["Access-Control-Allow-Origin","http://localhost:3000/login"]})




    // const instance = axios.create(
    //   {
    //           baseURL: "http://localhost:3000/login",
    //           withCredentials: false,
    //     })
    //     instance();


//     const instance = axios.create({
//       baseURL: "http://localhost:3000/login",
//       withCredentials: false,
//       mode: "no-cors"
//     });


// instance();

// const fetchPromise = fetch("http://localhost:3000/login", {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "Content-Type": "text/xml",
//   }
//   // ,
//   // body: "<person><name>Arun</name></person>",
// });

// fetchPromise.then((response) => {
//   console.log(response.status);
// });




    // axios({
    //   method: 'GET',
    //   headers: { "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8; application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin":"http://localhost:3000/login"},
    //   url: 'http://localhost:3000/login',
    //   data: "yooooo"
    // }).then(function (response) {
    //   console.log(response.data);
    // });

    // axios.get("http://localhost:3000/login").then((json) => {
      
          
    //       alert(json);
  
    //     }) 

    // try {
    //   const response = await axios.get("http://localhost:3000/login");
    //   setCourses(response.data.courses || []);
    // } catch (error) {
    //   console.log("Error fetching courses from apis data");
    // }


    // return fetch("http://localhost:3000/login", obj)
    // .then((response) => console.log(response, "hi"))
    // .then((json) => {
      
    //     setPath(json);
    //     alert(json);

    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //   fetch('http://localhost:3000/login', {
    //  "mode": 'no-cors'

    //     // "Access-Control-Allow-Origin": "http://localhost:3000/login"
    //   })  
    //   .then(json => {
    //       console.log(json.stringify(json))
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // try {
    //   const response = await axios.get("http://localhost:3000/courses", {
    //     "Referrer-Policy": "strict-origin-when-cross-origin",
    //   });
    //   setCourses(response.data.courses || []);
    // } catch (error) {
    //   console.log("Error fetching courses from apis data");
    // }


  };


  return (
    <div className="App22">
      <br />
      Backend should be running on localhost:3000
      <br />
      <br />
I am hoping to press the button below and get the data from the backend to show up in the console. 
      <br />
      <br />
      <button onClick={handleLogin2}>Open Dev Tools (Console) and Press this button</button>
    </div>
  );
}

export default Getclasses;
