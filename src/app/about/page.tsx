import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="text-white bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* === HERO SECTION === */}
        <section className="text-center mb-24">
          <Image
            src="https://srcdpgjsavojeassrvej.supabase.co/storage/v1/object/public/portfolio-images/main/avatar.jpg"
            alt="My photo"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-lg"
            priority
          />
          <h1 className="text-5xl font-bold mb-4">Hello, I am Maksym!</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I am a full-stack developer who is passionate about creating elegant
            and effective solutions to complex problems. My goal is to write
            code that not only works, but also inspires and push people
            forward(or just me).
          </p>
        </section>

        {/* === TIMELINE SECTION === */}
        <Timeline />

        {/* === PRINCIPLES SECTION === */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">My principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaCode size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Simple code</h3>
              <p className="text-gray-400">
                I believe in writing clean and understandable code.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaPaintBrush size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Attention to details</h3>
              <p className="text-gray-400">
                I value precision and attention to detail in everything I do.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaRocket size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Always learning</h3>
              <p className="text-gray-400">
                I am always looking for new technologies and ways to improve my
                skills.
              </p>
            </div>
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to communicate?</h2>
          <p className="text-lg text-gray-400 mb-8">Write me an email!</p>
          <Link
            href="mailto:mezgoodle@gmail.com"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Contact
          </Link>
        </section>
      </div>
    </main>
  );
}
