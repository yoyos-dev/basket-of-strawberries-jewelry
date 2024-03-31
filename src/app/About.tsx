'use client';

export default function About() {
  return (
    <div className="h-full w-full flex flex-col sm:overflow-auto items-center gap-4 pb-4">
      <h1 className="text-3xl text-red-700 font-bold text-center bg-rose-100 w-full p-2">About Basket of Strawberries</h1>
      <div className="flex flex-col xl:flex-row  mx-8 sm:mx-16 text-lg gap-8">
        <img src="AboutBoS.jpg" className="object-cover rounded-lg xl:w-1/2"></img>
        <div className="flex flex-col gap-2">
          <p>Basket of Strawberries is not just a brand that sells cute and fun jewelry, but an entire experience. You can find fresh batches of handmade earrings, one-of-a-kind chunky necklaces, and keychains, which are all designed by me.</p>
          <p>The experience of buying jewelry from Basket of Strawberries is like wandering through a fresh produce market. As you search for a new necklace or a perfect pair of earrings to complete your outfit, you are encouraged to carefully browse through each piece, just like you would while searching for fruits and vegetables in a grocery store. Every item is unique and rarely repeated, as only a few of each design are made.</p>
        </div>
      </div>
      <h1 className="text-3xl text-red-700 font-bold text-center bg-rose-100 w-full p-2">About Me</h1>
      <div className="flex flex-col xl:flex-row mx-8 sm:mx-16 lg:mx-32 text-lg gap-4">
        <div className="flex flex-col gap-2">
          <p>Im 21 years old but have had a passion for creating ever since I was young. Growing up in the south side of Chicago forces you to be creative and to find charm in anything you choose to find charm in. This limit in access to supplies forced me to learn to create art using anything I could find; even trash! As a first-generation American raised in a Chinese household, it is my dream to share my culture through my art for all to see.</p>
          <p>I appreciate the craftiness I learned from the habits of my Cantonese family along with the humor and style of 2000s cartoons and sitcoms which heavily impacted my art. The interwovenness of my American childhood and my Chinese heritage influence everything I make. My hope is to capture the emotion behind my art in a way that others can relate to through my brand Basket of Strawberries!</p>
        </div>
        <img src="AboutMe.JPG" className="object-cover rounded-lg xl:w-1/2"></img>
      </div>
    </div>
  );
}