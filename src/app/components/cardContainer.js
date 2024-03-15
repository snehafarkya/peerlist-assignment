// components/CardContainer.js
"use client"
import { useState } from 'react';
// import { useClient } from 'swr'; // Import useClient from swr or another library
import  Card from './card';
const CardContainer = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1', category: 'applied', name:'Ronald Richards' , company:'Cloud Consultant at Rapid Circle    ', exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490', shortlist:'Yogini Bende'},
    { id: 2, text: 'Card 2', category: 'rejected' ,name:'Esther Howard',company:'Frontend Developer',exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490', shortlist:'Yogini Bende'},
    { id: 3, text: 'Card 3', category: 'shortlisted',name:'Leslie Alexander' ,company:'Software Engineer',exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490',shortlist:'Yogini Bende'},
    { id: 4, text: 'Card 1', category: 'applied', name:'Ken Williamson' , company:'Data Scientist', exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490', shortlist:'Yogini Bende'},
    { id: 5, text: 'Card 2', category: 'applied' ,name:'David Warner',company:'Graphic Designer',exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490',shortlist:'Yogini Bende'},
    { id: 6, text: 'Card 3', category: 'shortlisted',name:'Sam Curran' ,company:'Cloud Consultant at Rapid Circle    ',exp:'11y 6m', offer:'Yes' ,notice:'Immediate',email:'darrell.stewards@emaildomain.com',number:'+1 12345 67490',shortlist:'Yogini Bende'},
  ]);

  // Wrap the component logic in useClient
  // const { data } = useClient();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = cards.filter((card) => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return (
      searchRegex.test(card.name) ||
      searchRegex.test(card.company) ||
      searchRegex.test(card.email) ||
      searchRegex.test(card.number)
    );
  });
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, category) => {
    const id = e.dataTransfer.getData('text/plain');
    const updatedCards = cards.map(card =>
      card.id == id ? { ...card, category: category } : card
    );

    setCards(updatedCards);
  };
  const getCountByCategory = (category) => {
    return cards.filter(card => card.category === category).length;
  };

  return (
    <>
     <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search candidates"
          value={searchTerm}
          onChange={handleSearchChange}
          className=" text-[#959DA5] border-gray-300 rounded-md px-6 py-1 focus:outline-none focus:ring-0 focus:border-transparent"
        />
      </div>
    <div className="grid grid-cols-3 px-6 gap-4">
      
      <div
        onDrop={(e) => handleDrop(e, 'rejected')}
        onDragOver={(e) => e.preventDefault()}
        className='border border-[#FFEAEA] h-auto rounded-lg'

      >
        <h2 className='bg-[#FFEAEA] p-2 font-semibold rounded-t-lg tracking-[4%] uppercase text-[#EB5757] text-xs'>Rejected • {getCountByCategory('rejected')} </h2>
        {filteredCards
          .filter(card => card.category === 'rejected')
          .map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              text={card.text}
              category={card.category}
              company={card.company}
              shortlist={card.shortlist}
              handleDragStart={(e) => handleDragStart(e, card.id)}
              handleDragEnd={() => {}}
            />
          ))}
      </div>
      <div
        onDrop={(e) => handleDrop(e, 'applied')}
        onDragOver={(e) => e.preventDefault()}
        className='border border-[#E1E4E8] h-auto rounded-lg'
      >
        <h2 className='bg-[#E1E4E8] text-[#0D0D0D]  rounded-t-lg p-2 font-semibold tracking-[4%] uppercase text-xs'>Applied •  {getCountByCategory('applied')}</h2>
        {filteredCards
          .filter(card => card.category === 'applied')
          .map(card => (
            <Card
              key={card.id}
              name={card.name}
              id={card.id}
              text={card.text}
              company={card.company}
              category={card.category}
              exp={card.exp}
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
        onDrop={(e) => handleDrop(e, 'shortlisted')}
        onDragOver={(e) => e.preventDefault()}
        className='rounded-lg border border-[#E2F5EA] h-auto'
      >
        <h2 className='p-2 font-semibold tracking-[4%] rounded-t-lg uppercase text-xs bg-[#E2F5EA] text-[#219653]'>Shortlisted •  {getCountByCategory('shortlisted')}</h2>
        {filteredCards
          .filter(card => card.category === 'shortlisted')
          .map(card => (
            <Card
              key={card.id}
              id={card.id}
              text={card.text}
              name={card.name}
              company={card.company}
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
    </>
  );
};

export default CardContainer;
