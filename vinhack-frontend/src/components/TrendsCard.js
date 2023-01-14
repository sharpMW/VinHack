import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDownloadURL } from 'firebase/storage'

const TrendsCard = (props) => {
  console.log("props", props)
  // useEffect(() => {
  //   try {
  //     const fetching = async () => {
  //       const res = await axios.post("http://localhost:5000/",{},{
  //         headers: {
  //           'Content-type': 'application/json'
  //         }
  //       });
  //       setCloth(res.data)
  //       //return res;
  //     };
  //     fetching()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [])
  return (
    <>
      <div className="grid grid-cols-4 gap-x-4 place-items-center py-5 ">
        {props.details.map((value, index) => {
          return value.map((v, i) => {
            return <div className="drop-shadow-md p-2 w-fit" key={i}>
              <button className="focus:outline-none focus:ring focus:ring-green-200 ">
                <div className="grid grid-cols-1 focus:ring">
                  <img src={v} className="" alt="images" />
                </div>
              </button>
            </div>
          })
        })}
      </div>
    </>
  );
};

export default TrendsCard;
