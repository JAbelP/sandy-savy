import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



export default function page() {
  const CtaButton = ({ href, text }: { href: string; text: string }) => (
    <Link
      href={href}
      className="inline-block capitalize bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {text}
    </Link>
  )

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={"/images/ElderFamily.jpg"}
          alt={"Places To Visit in NC For The Elderly!"}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Experience Paradise at Sunset Beach Villa</h1>
          <div className="prose max-w-none text-gray-700" />
          <div className='text-black'>
            <p>Welcome to Sunset Beach Villa, your perfect getaway for a relaxing beach vacation!</p>
            <p>Our luxurious villa offers stunning ocean views, private beach access, and all the amenities you need for an unforgettable stay.</p>
            <h2>Features:</h2>
            <ol>
              <li>Spacious 3-bedroom villa</li>
              <li>Fully equipped gourmet kitchen</li>
              <li>Private infinity pool overlooking the ocean</li>
            </ol>
          </div>

          <div className="my-8 text-center">
            <CtaButton href={"/blog"} text="Don't forget your Beach Chairs" />

          </div>
            <div className='text-black'>
              <p>Cupidatat magna sunt occaecat dolor aliquip est sunt. Culpa deserunt nulla duis laborum. Adipisicing enim consectetur ad ea ipsum labore ea voluptate sunt.</p>
              <p>Nisi consectetur voluptate sint qui nisi ad ut nostrud tempor. Eiusmod magna aliquip mollit cupidatat laborum commodo elit in veniam. Laborum anim consectetur tempor ipsum. Elit commodo id qui fugiat duis quis. Elit enim incididunt eiusmod non anim do velit eu.</p>
              <p>Ea sint consequat adipisicing dolore aliqua deserunt. Veniam exercitation labore eiusmod nulla fugiat excepteur non. Nisi sunt minim minim non excepteur minim proident duis.</p>
              <p>Quis et in veniam cupidatat deserunt cillum sunt qui sunt. Ipsum irure deserunt occaecat dolor mollit. Nulla qui in laboris est fugiat mollit non adipisicing. Magna sunt id adipisicing eu officia exercitation proident ex nostrud. Lorem ut consectetur Lorem quis id.</p>
              <p>Tempor quis irure irure dolore. Eiusmod in tempor sunt nostrud cillum sit duis reprehenderit anim. Eu ut sint fugiat elit.</p>
            </div>
          <div className="my-8 text-center">
            <CtaButton href={"/blog"} text="Check Availability of Items" />
          </div>
          
            <div className='text-black'>
              <p>Ea sint consequat adipisicing dolore aliqua deserunt. Veniam exercitation labore eiusmod nulla fugiat excepteur non. Nisi sunt minim minim non excepteur minim proident duis.</p>
              <p>Quis et in veniam cupidatat deserunt cillum sunt qui sunt. Ipsum irure deserunt occaecat dolor mollit. Nulla qui in laboris est fugiat mollit non adipisicing. Magna sunt id adipisicing eu officia exercitation proident ex nostrud. Lorem ut consectetur Lorem quis id.</p>
              <p>Tempor quis irure irure dolore. Eiusmod in tempor sunt nostrud cillum sit duis reprehenderit anim. Eu ut sint fugiat elit.</p>
            </div>
          </div>
      </article>
    </div>
  )
}