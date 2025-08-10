export default function ContactPage() {
  return (
    <div className=" bg-black text-white min-h-screen font-sans px-4 md:px-12 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-3 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 md:col-span-2 resize-none"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 transition rounded-md px-8 py-3 font-semibold text-white shadow-md md:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
