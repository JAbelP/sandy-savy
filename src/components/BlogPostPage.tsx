// import Image from "next/image"

// interface BlogPostProps {
//   title: string
//   imageUrl: string
//   contentFirstHalf: string
//   contentSecondHalf: string
//   midCtaLink: string
//   endCtaLink: string
// }

// export default function BlogPost({
//   title,
//   imageUrl,
//   contentFirstHalf,
//   contentSecondHalf,
//   midCtaLink,
//   endCtaLink,
// }: BlogPostProps) {
//   const CtaButton = ({ href, text }: { href: string; text: string }) => (
//     <a
//       href={href}
//       className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//     >
//       {text}
//     </a>
//   )

//   return (
//     <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8">
//       <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <Image
//           src={imageUrl || "/placeholder.svg"}
//           alt={title}
//           width={800}
//           height={400}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
//           <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: contentFirstHalf }} />

//           <div className="my-8 text-center">
//             <CtaButton href={midCtaLink} text="Check Availability" />
//           </div>

//           <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: contentSecondHalf }} />
//         </div>
//         <div className="mt-8 mb-6 text-center">
//           <CtaButton href={endCtaLink} text="Book Your Stay Now" />
//         </div>
//       </article>
//     </div>
//   )
// }

