'use client';

export default function BoothConcept() {
  return (
    <div className="h-full w-full flex flex-col sm:overflow-auto items-center gap-4 pb-4 justify-center">
      <h1 className="text-3xl mx-8 sm:mx-16 lg:mx-32 text-red-700 font-bold text-center p-2">Booth Concept</h1>
      <img src="phonto.png" className="object-cover h-auto w-3/4 lg:w-7/12"></img>
    </div>
  );
}