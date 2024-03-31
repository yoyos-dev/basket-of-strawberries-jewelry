'use client';

export default function News() {
  return (
    <div className="h-full w-full flex flex-col sm:overflow-auto items-center gap-4 pb-4 justify-center">
      <h1 className="text-xl lg:text-3xl mx-8 sm:mx-16 lg:mx-32 text-red-700 font-bold text-center p-2">Basket of Strawberries at the Renegade Fair May18th and 19th! (hopefully 🤞🥹)</h1>
      <img src="renegade vintage.png" className="object-cover rounded-lg h-auto w-9/12"></img>
    </div>
  );
}