import Link from "next/link";
import { BriefcaseMedical, Edit2Icon, Calendar1Icon } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-[#32b5aa] via-[#c3dfdd] to-[#ffffff] overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white text-center md:text-start z-10">
            <p className="text-inherit text-sm font-medium">
              Лечение в лучших клиниках Турции
            </p>
            <h1 className="text-inherit text-6xl sm:text-8xl font-semibold -tracking-wider md:max-w-7xl mt-4 mb-6 leading-tight">
              <span className="text-primary">Adal</span> Medicine <br />—
              здоровье без границ
            </h1>
            <p className="text-lg text-white/80 mb-10 md:max-w-2xl">
              Полный цикл медицинского туризма: диагностика, лечение,
              сопровождение. Надёжность, комфорт и поддержка на каждом этапе.
            </p>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contact"
                className="w-72 px-8 py-4 border text-center border-white bg-white text-dark duration-300 hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
              >
                Оставить заявку
              </Link>
              <Link
                href="/services"
                className="w-72 px-8 py-4 border border-white bg-transparent text-white hover:bg-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer"
              >
                Посмотреть услуги
              </Link>
            </div>
          </div>
        </div>

        {/* Нижний блок преимуществ */}
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-12 md:gap-20 sm:text-center text-black">
            <div className="flex flex-col sm:items-center gap-3">
              <BriefcaseMedical className="text-3xl text-primary" />
              <p className="text-sm sm:text-base font-medium">
                Персональный план лечения
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <Edit2Icon className="text-3xl text-primary" />
              <p className="text-sm sm:text-base font-medium">
                Быстрая запись в клиники
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <Calendar1Icon className="text-3xl text-primary" />
              <p className="text-sm sm:text-base font-medium">
                Пакеты «всё включено»
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <p className="text-3xl font-semibold text-primary">24/7</p>
              <p className="text-sm sm:text-base font-medium text-black/70">
                Поддержка до и после лечения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
