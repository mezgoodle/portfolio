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
            src="/your-photo.jpg" // Замініть на шлях до вашого фото в папці /public
            alt="Ваше фото"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-lg"
            priority
          />
          <h1 className="text-5xl font-bold mb-4">Привіт, я [Ваше Ім'я]</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Я — full-stack розробник, який захоплюється створенням елегантних та
            ефективних рішень для складних проблем. Моя мета — писати код, який
            не тільки працює, але й надихає.
          </p>
        </section>

        {/* === TIMELINE SECTION === */}
        <Timeline />

        {/* === PRINCIPLES SECTION === */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">Мої принципи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaCode size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Чистий код</h3>
              <p className="text-gray-400">
                Я вірю, що найкращий код — це той, який легко читати, розуміти
                та підтримувати.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaPaintBrush size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Увага до деталей</h3>
              <p className="text-gray-400">
                Від ідеального пікселя в дизайні до оптимізованого запиту в базі
                даних — деталі мають значення.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <FaRocket size={40} className="mx-auto text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Постійний розвиток</h3>
              <p className="text-gray-400">
                Технології не стоять на місці, і я разом з ними. Завжди
                відкритий до вивчення нового.
              </p>
            </div>
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Зацікавились?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Давайте створимо щось неймовірне разом!
          </p>
          <Link
            href="/#contact"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Зв'язатись зі мною
          </Link>
        </section>
      </div>
    </main>
  );
}
