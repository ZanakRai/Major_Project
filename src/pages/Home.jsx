import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { FaRocket, FaCameraRetro, FaCogs, FaGamepad } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Developer } from '../Components/developer.jsx'
import CanvasLoader from '../Components/CanvasLoader.jsx'

export default function HomePage() {
  return (
    <div className="absolute left-0 right-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-white dark:via-gray-100 dark:to-purple-200 text-white dark:text-gray-900 min-h-screen font-sans px-6 md:px-16 py-12 transition-colors duration-700 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-16">
          <div className="w-full md:w-2/3 aspect-[4/3] relative rounded-3xl shadow-[0_0_40px_5px_rgba(147,71,255,0.6)] dark:shadow-[0_0_50px_8px_rgba(123, 63, 247, 0.8)] overflow-hidden border border-purple-700 dark:border-purple-500 animate-fade-in work-convas hover:shadow-[0_0_70px_10px_rgba(180,120,255,0.8)] transition-shadow duration-700">
            <Canvas camera={{ position: [0, 2, 3], fov: 55 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.8} />
              <hemisphereLight intensity={0.6} groundColor={0x222244} />
              <directionalLight position={[7, 12, 7]} intensity={1} />
              <OrbitControls enableZoom={false} target={[0, 1.2, 0]} rotateSpeed={0.5} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} />
              </Suspense>
            </Canvas>
          </div>

          <div className="max-w-md mx-auto md:mx-0 text-center md:text-left space-y-8 flex flex-col items-center md:items-start">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-wide drop-shadow-[0_4px_8px_rgba(147,71,255,0.8)]">
              Real-Time <span className="text-purple-400 dark:text-purple-600">Motion Capture</span>
            </h1>
            <p className="text-gray-300 dark:text-gray-700 text-lg md:text-xl leading-relaxed font-light max-w-lg drop-shadow-md">
              Capture movements and animate 3D or 2D characters with unmatched ease and precision.
            </p>
            <Link to="/avatar" className="w-full md:w-auto">
              <button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-95 transform transition-all rounded-2xl px-12 py-5 font-bold text-white shadow-xl hover:shadow-3xl flex items-center justify-center gap-4 focus:outline-none focus:ring-4 focus:ring-purple-500 dark:bg-gradient-to-r dark:from-purple-400 dark:to-indigo-400 dark:hover:from-purple-500 dark:hover:to-indigo-500 dark:text-gray-900"
                aria-label="Get started with motion capture"
              >
                Get Started <FaRocket size={22} />
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Service
            icon={<FaCameraRetro className="text-purple-500 dark:text-purple-600 animate-pulse" />}
            title="Live Motion Tracking"
            desc="Track motion live using your camera with instant feedback."
          />
          <Service
            icon={<FaCogs className="text-purple-500 dark:text-purple-600 animate-spin-slow" />}
            title="Custom Characters"
            desc="Bring your custom rigged 3D characters to life effortlessly."
          />
          <Service
            icon={<FaGamepad className="text-purple-500 dark:text-purple-600 animate-bounce-slow" />}
            title="Adjustable Camera"
            desc="Easily configure and control the 3D camera angles."
          />
        </section>

        {/* People Created Section */}
        <section>
          <h2 className="text-4xl font-extrabold mb-10 text-center md:text-left tracking-wide text-purple-400 dark:text-purple-600 drop-shadow-md">
            People Have Created
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <Card name="Sarah" commentCount={1} />
            <Card name="David" commentCount={3} likes={12} />
            <Card name="Jessica" commentCount={2} />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gradient-to-r from-purple-900/80 via-indigo-900/70 to-purple-900/80 dark:from-purple-300/80 dark:via-indigo-300/60 dark:to-purple-300/80 rounded-3xl p-14 max-w-4xl mx-auto text-center shadow-2xl transition-colors duration-700">
          <p className="italic text-2xl text-purple-100 dark:text-purple-900 max-w-xl mx-auto font-light tracking-wide drop-shadow-lg">
            &quot;The best motion capture software I&apos;ve ever used! Simple and effective.&quot;
          </p>
          <div className="flex items-center justify-center space-x-6 mt-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 ring-8 ring-purple-600 dark:ring-purple-300 animate-pulse"></div>
            <span className="text-purple-200 dark:text-purple-800 font-semibold text-lg drop-shadow-md">— User</span>
          </div>
        </section>
      </div>

      <Loader />

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

function Service({ icon, title, desc }) {
  return (
    <div className="bg-gradient-to-tr from-purple-900 to-black dark:from-purple-200 dark:to-white rounded-3xl p-10 flex flex-col items-center text-center space-y-6 shadow-2xl hover:shadow-4xl transition transform hover:-translate-y-2 hover:scale-105 duration-300">
      <div className="text-7xl">{icon}</div>
      <h3 className="text-3xl font-semibold text-purple-400 dark:text-purple-600 drop-shadow-md">{title}</h3>
      <p className="text-gray-300 dark:text-gray-700 text-lg md:text-xl max-w-sm">{desc}</p>
    </div>
  )
}

function Card({ name, commentCount, likes }) {
  return (
    <div className="bg-gradient-to-bl from-purple-900 to-black dark:from-purple-200 dark:to-white p-8 rounded-3xl shadow-2xl hover:shadow-4xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer select-none">
      <div className="h-40 bg-purple-800 dark:bg-purple-400 rounded-xl mb-6 animate-pulse"></div>
      <div className="text-white dark:text-gray-900 font-extrabold text-2xl tracking-wide drop-shadow-lg">{name}</div>
      <div className="text-purple-300 dark:text-purple-700 text-lg mt-1">
        {commentCount} Comment{commentCount > 1 ? 's' : ''}
      </div>
      {likes !== undefined && (
        <div className="text-purple-300 dark:text-purple-700 text-lg mt-3 flex items-center gap-3">
          <span className="text-xl select-none">👍</span> {likes}
        </div>
      )}
    </div>
  )
}
