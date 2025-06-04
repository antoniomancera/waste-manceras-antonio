'use client';
import Image from 'next/image'; 

export default function Card({ card, onSelect, isSelected }) {
  const { id, image, title, subtitle, price, notAllowedOnRoad } = card;

  const cardClasses = `
    w-[289px] bg-gray-800 rounded-lg shadow-md overflow-hidden border-2
    flex flex-col transform transition-all duration-200 ease-in-out
    ${isSelected ? 'border-blue-600 shadow-blue-500/50' : 'border-gray-700 hover:border-gray-500 hover:shadow-lg'}
  `;

  const buttonClasses = `
    mt-auto w-full py-3 text-center rounded-b-lg font-semibold transition duration-200
    ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white'}
  `;

  return (
    <div className={cardClasses} onClick={() => onSelect(id)}>

      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        {title.split(' ')[0]} Yards
      </div>

 
      <div className="relative h-[150px] bg-gray-700 flex items-center justify-center overflow-hidden">

        {notAllowedOnRoad && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1 z-20">
        
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.342a.75.75 0 011.486 0l3.75 7.5A.75.75 0 0112 12.75H8a.75.75 0 01-.736-1.008l3.75-7.5zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Not Allowed On The Road</span>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          width={200} 
          height={120} 
          className="object-cover" 
        />
      </div>

   
      <div className="p-4 flex flex-col flex-grow"> 
        <h3 className="text-xl font-bold mb-1 text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
        <p className="text-3xl font-extrabold text-blue-500 mb-4">£{price}</p>

        <button
          onClick={() => onSelect(id)} 
          className={buttonClasses}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
          {!isSelected && <span className="ml-2">&rarr;</span>} 
        </button>
      </div>
    </div>
  );
}