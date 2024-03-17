// components/CardContainer.js
"use client";
import { useState } from "react";
import shortlistedIcon from "../../../public/images/shortlisted-icon.svg";
import rejectedIcon from "../../../public/images/rejected-icon.svg";
import searchIcon from "../../../public/images/searchicon.svg";
import appliedIcon from "../../../public/images/appliedIcon.svg";
import user1 from "../../../public/images/user.svg";
import user2 from "../../../public/images/user2.svg";
import user3 from "../../../public/images/user3.svg";
import user4 from "../../../public/images/user4.svg";
import user5 from "../../../public/images/card-user.svg";

import Image from "next/image";

// import { useClient } from 'swr'; // Import useClient from swr or another library
import Card from "./card";
const CardContainer = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Card 1",
      category: "applied",
      name: "Ronald Richards",
      company: "Cloud Consultant at Rapid Circle    ",
      exp: "11y 6m",
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
      icon: <Image src={user2} alt="" />,
      applied:'Applied 1d ago',
    },
    {
      id: 2,
      text: "Card 2",
      category: "rejected",
      name: "Esther Howard",
      company: "Frontend Developer",
      exp: "11y 6m",
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
      icon: <Image src={user2} alt="" />,
      applied:'Applied 1d ago',

    },
    {
      id: 3,
      text: "Card 3",
      category: "shortlisted",
      name: "Leslie Alexander",
      company: "Software Engineer",
      exp: "11y 6m",
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
      icon: <Image src={user3} alt="" />,
      applied:'Applied 1d ago',

    },
    {
      id: 4,
      text: "Card 1",
      category: "applied",
      name: "Ken Williamson",
      company: "Data Scientist",
      exp: "11y 6m",
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
      applied:'Applied 1d ago',
      icon: <Image src={user4} alt="" />,
    },
    {
      id: 5,
      text: "Card 2",
      category: "applied",
      name: "David Warner",
      company: "Graphic Designer",
      exp: "11y 6m",
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
      icon: <Image src={user3} alt="" />,
    },
    {
      id: 6,
      text: "Card 3",
      category: "shortlisted",
      name: "Sam Curran",
      company: "Cloud Consultant at Rapid Circle    ",
      exp: "11y 6m",
      icon: <Image src={user5} alt="" />,
      offer: "Yes",
      notice: "Immediate",
      email: "darrell.stewards@emaildomain.com",
      number: "+1 12345 67490",
      shortlist: "Yogini Bende",
    },
  ]);

  // Wrap the component logic in useClient
  // const { data } = useClient();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = cards.filter((card) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(card.name) ||
      searchRegex.test(card.company) ||
      searchRegex.test(card.email) ||
      searchRegex.test(card.number)
    );
  });
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e, category) => {
    const id = e.dataTransfer.getData("text/plain");
    const updatedCards = cards.map((card) =>
      card.id == id ? { ...card, category: category } : card
    );

    setCards(updatedCards);
  };
  const getCountByCategory = (category) => {
    return filteredCards.filter((card) => card.category === category).length;
  };

  return (
    <div className="">
      <div className="flex items-center justify-start px-6 mb-4 ">
        <Image src={searchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search candidates"
          value={searchTerm}
          onChange={handleSearchChange}
          className=" text-[#959DA5] border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:ring-0 focus:border-transparent"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 px-6 gap-4 pb-16">
        <div
          onDrop={(e) => handleDrop(e, "rejected")}
          onDragOver={(e) => e.preventDefault()}
          className="border border-[#FFEAEA] bg-[#FAFBFC] h-auto rounded-lg"
        >
          <h2 className="bg-[#FFEAEA] p-2 font-semibold rounded-t-lg tracking-[4%] uppercase flex items-center gap-1 text-[#EB5757] text-xs">
            {" "}
            <span>
              <Image src={rejectedIcon} alt="" />
            </span>{" "}
            Rejected • {getCountByCategory("rejected")}{" "}
          </h2>
          {filteredCards
            .filter((card) => card.category === "rejected")
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                text={card.text}
                icon={card.icon}
                applied={card.applied}
                category={card.category}
                company={card.company}
                shortlist={card.shortlist}
                handleDragStart={(e) => handleDragStart(e, card.id)}
                handleDragEnd={() => {}}
              />
            ))}
        </div>
        <div
          onDrop={(e) => handleDrop(e, "applied")}
          onDragOver={(e) => e.preventDefault()}
          className="border border-[#E1E4E8] bg-[#FAFBFC] h-auto rounded-lg"
        >
          <h2 className="bg-[#E1E4E8] text-[#0D0D0D]  rounded-t-lg p-2 font-semibold tracking-[4%] flex gap-1 items-center uppercase text-xs">
            {" "}
            <span>
              {" "}
              <Image src={appliedIcon} alt="" />{" "}
            </span>
            Applied • {getCountByCategory("applied")}
          </h2>
          {filteredCards
            .filter((card) => card.category === "applied")
            .map((card) => (
              <Card
                key={card.id}
                name={card.name}
                id={card.id}
                icon={card.icon}
                text={card.text}
                company={card.company}
                category={card.category}
                exp={card.exp}
                applied={card.applied}
                offer={card.offer}
                notice={card.notice}
                email={card.email}
                number={card.number}
                handleDragStart={(e) => handleDragStart(e, card.id)}
                handleDragEnd={() => {}}
              />
            ))}
        </div>

        <div
          onDrop={(e) => handleDrop(e, "shortlisted")}
          onDragOver={(e) => e.preventDefault()}
          className="rounded-lg border border-[#E2F5EA] bg-[#FAFBFC] h-auto"
        >
          <h2 className="p-2 font-semibold tracking-[4%] rounded-t-lg uppercase flex gap-1 items-center text-xs bg-[#E2F5EA] text-[#219653]">
            <span>
              <Image src={shortlistedIcon} alt="" />
            </span>{" "}
            Shortlisted • {getCountByCategory("shortlisted")}
          </h2>
          {filteredCards
            .filter((card) => card.category === "shortlisted")
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                text={card.text}
                name={card.name}
                company={card.company}
                applied={card.applied}
                icon={card.icon}
                exp={card.exp}
                offer={card.offer}
                notice={card.notice}
                category={card.category}
                shortlist={card.shortlist}
                handleDragStart={(e) => handleDragStart(e, card.id)}
                handleDragEnd={() => {}}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
