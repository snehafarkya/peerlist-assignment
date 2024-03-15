// import React from 'react'

// export default function Card() {
//   return (
//     <div className='border-r w-full text-black'>
//       rhwrgrekgenb
//     </div>
//   )
// }
// components/Card.js
import { useState } from "react";
import Image from "next/image";

import user from "../../../public/images/card-user.svg";
import tick from "../../../public/images/tick.svg";
import verified from "../../../public/images/verified.svg";

const Card = ({
  id,
  text,
  name,
  category,
  company,
  exp,
  offer,
  notice,
  email,
  number,
  shortlist,
  handleDragStart,
  handleDragEnd,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = () => {
    setIsDragging(true);
  };

  return (
    <div
      id={id}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      className={`p-6 m-2 border-[#E1E4E8] border  bg-white rounded-md flex flex-col justify-start gap-1  text-black transition-all duration-300 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex justify-between">
      <Image src={user} alt="user" />
      <p className="text-[10px] text-[#6A737D]">Applied 1d ago</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold flex gap-1 items-center">
          {name}{" "}
          <span>
            <Image src={verified} alt="" />
          </span>
        </p>
        <p className="text-xs">{company}</p>
      </div>
      <div className="flex justify-between flex-wrap gap-y-2">
        {exp ? (
          <div className="flex gap-1 flex-col">
            <p className="text-[10px] ">Experience</p>
            <p className="text-xs font-semibold">{exp}</p>
          </div>
        ) : null}
        {offer ? (
          <div className="flex gap-1 flex-col">
            <p className="text-[10px] ">Holding offer?</p>
            <p className="text-xs font-semibold">{offer}</p>
          </div>
        ) : null}
        {notice ? (
          <div className="flex gap-1 flex-col">
            <p className="text-[10px] ">Notice Period</p>
            <p className="text-xs font-semibold">{notice}</p>
          </div>
        ) : null}
        {email && number ? (
          <div className="flex gap-1 flex-col">
            <p className="text-[10px] ">Contact</p>
            <p className="text-xs font-semibold">{email}</p>
            <p className="text-xs font-semibold">{number}</p>
          </div>
        ) : null}
        {category === 'shortlisted' ?(
        
        <div className="flex gap-1 items-center text-[10px]">
        {shortlist && <>
          <Image src={tick} alt="" /> Shortlisted by <b>{shortlist}</b> on 15
          Dec 2023</>
        }
        

        </div>):null}
        {category === 'rejected' ?(
          <div className="flex gap-1 items-center text-[10px]">
          {shortlist && <>
            <Image src={tick} alt="" /> Rejected by <b>{shortlist}</b> on 15
            Dec 2023</>
          }
          </div>
        ):null}
      </div>
      {/* {text} - {category} */}
    </div>
  );
};

export default Card;
