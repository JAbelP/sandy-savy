import ReviewForm from "@/components/review-form";
import { Umbrella, Waves, Facebook, Mail } from "lucide-react"

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-300" />
        <Waves className="absolute top-2 left-2 text-blue-500 opacity-50" />
        <Umbrella className="absolute top-2 right-2 text-red-500 opacity-50 transform -rotate-12" />

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sandy Savy Rentals</h1>

        <p className="text-center mb-6 text-gray-600">
          We&apos;d love to hear about your experience with our beach equipment!
        </p>

        <ReviewForm />

        <div className="mt-8 text-center text-sm text-gray-500">Thank you for helping us improve our services!</div>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://www.google.com/maps?cid=YOUR_GOOGLE_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          >
            <Mail className="w-5 h-5 mr-2" />
            Google Review
          </a>
          <a
            href="https://www.facebook.com/YOUR_FACEBOOK_PAGE/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Facebook Review
          </a>
        </div>
      </div>
    </div>
  )
}

