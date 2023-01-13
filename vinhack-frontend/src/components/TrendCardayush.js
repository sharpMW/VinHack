import React from "react";

// const TrendsCard = (props) => {
//   const object = (index) => {
//     return {
//       shirt: require(`../assets/t-shirt${index%4}.jpg`),
//       pant: require(`../assets/pant${index%4}.jpg`),
//       shoe: require(`../assets/shoe${index%4}.jpg`),
//     };
//   };
//   const ClothObject = ({ obj }) => {
//     return (
//       <div className="flex flex-col">
//         {["shirt", "pant", "shoe"].map((item) => {
//           return <img src={obj[item]} />;
//         })}
//       </div>
//     );
//   };
  return (
    <>
      <div className="max-h-[75vh]">
        <div className="grid grid-cols-4  gap-x-4 place-items-center py-5 ">
          {props.details.map((value, index) => (
            <div className="drop-shadow-md p-2 w-fit" key={index}>
              <div className="grid grid-cols-1">
                {/* <img
                  src={object(index+1).shirt}
                  alt={value.img2}
                  
                  className={`${
                    value.img2.includes("pant") ? "" : "h-[300px]"
                  }`}
                  alt=""
                /> */}
                <ClothObject obj={object(index+2)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendsCard;
