import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BriefcaseMedicalIcon } from "lucide-react";

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className=""
          unoptimized={true}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 text-base font-semibold flex gap-2.5 items-center">
              <BriefcaseMedicalIcon className="text-2xl text-primary" />
              Наши медицинские направления
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark">
              Комплексный подход к вашему здоровью
            </h2>
            <p className="text-dark/50 text-lg leading-[1.3] md:max-w-3/4">
              Мы организуем диагностику, лечение и восстановление в клиниках
              Турции с международной аккредитацией. Только проверенные врачи и
              индивидуальный подход.
            </p>
            <Link
              href="/services"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
            >
              Все услуги
            </Link>
          </div>

          {/* Диагностика */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services/diagnostics">
                <Image
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Диагностика"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/services/diagnostics"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <ArrowRight width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Полная диагностика</h3>
                  <p className="text-white/80 text-base leading-6">
                    Комплексные check-up программы, анализы, УЗИ, МРТ и
                    консультации врачей.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Пластическая хирургия */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services/plastic-surgery">
                <Image
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Пластическая хирургия"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/services/plastic-surgery"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <ArrowRight width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Пластическая хирургия</h3>
                  <p className="text-white/80 text-base leading-6">
                    Эстетические операции, ринопластика, липосакция, фейслифтинг
                    и многое другое.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Check-up */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services/checkup">
                <Image
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Check-up"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/services/checkup"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <ArrowRight width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Check-up за 1 день</h3>
                  <p className="text-white/80 text-base leading-6">
                    Быстрая диагностика состояния организма по 15+ параметрам.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Кардиология */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services/cardiology">
                <Image
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Кардиология"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/services/cardiology"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <ArrowRight width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Кардиология</h3>
                  <p className="text-white/80 text-base leading-6">
                    Современные методы диагностики и лечения заболеваний сердца
                    в клиниках Турции.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
