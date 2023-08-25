import Image from 'next/image'
import { WhatsappButton } from './components/whatsappButton'
import {
  LuCheck,
  LuFacebook,
  LuInstagram,
  LuMail,
  LuMapPin,
  LuYoutube,
} from 'react-icons/lu'

export default function Home() {
  return (
    <>
      <section className="bg-primary-200 pt-28" id="home">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-end lg:justify-between">
          <div className="mx-auto mb-16 flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <p className="mb-4 text-sm font-bold uppercase text-primary-500">
              BOAS-VINDAS A DOCTORCARE 👋
            </p>
            <h1 className="mb-6 text-3xl font-bold text-dark-900 lg:text-5xl">
              Assistência médica simplificada para todos
            </h1>
            <p className="mb-8 text-lg">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <WhatsappButton />
          </div>

          <Image
            className="m-auto w-64 lg:m-0 lg:w-[420px]"
            src="/home-image.png"
            alt=""
            width={420}
            height={547}
          />
        </div>
        <div className="bg-gradient-to-b from-transparent from-50% to-primary-100 to-50% px-6">
          <div className="mx-auto grid max-w-7xl gap-16 rounded-md bg-beige py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-primary-500 md:divide-opacity-50 lg:py-16">
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">+3.500</span>
              <p className="text-primary-500">Pacientes atendidos</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">+15</span>
              <p className="text-primary-500">Especialistas disponíveis</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">+10</span>
              <p className="text-primary-500">Anos no mercado</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-100 px-6 py-24 md:py-44">
        <p className="mb-4 text-center text-sm font-bold uppercase text-primary-500">
          Serviços
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-dark-900">
          Como podemos ajudá-lo <br className="hidden md:block" /> a se sentir
          melhor?
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:gap-10">
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Problemas digestivos</h3>
            <p className="text-dark-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Saúde Hormonal</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Bem-estar mental</h3>
            <p className="text-dark-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Cuidados Pediátricos</h3>
            <p className="text-dark-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Autoimune e Inflamação</h3>
            <p className="text-dark-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="grid gap-4 rounded-md border border-primary-200 bg-white p-6">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200">
              <LuCheck className="text-primary-500" size={15} />
            </div>
            <h3 className="text-2xl font-bold">Saúde do Coração</h3>
            <p className="text-dark-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-beige px-6 py-24 md:py-44">
        <div className="mx-auto max-w-7xl lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16">
          <div className="mb-14 md:text-center lg:text-start">
            <p className="mb-4 text-sm font-bold uppercase text-primary-500">
              Serviços
            </p>
            <h2 className="mb-6 text-3xl font-bold text-dark-900 lg:text-4xl">
              Entenda quem somos <br /> e por que existimos
            </h2>
            <p className="mx-auto text-dark-700 md:max-w-lg lg:w-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          <Image
            className="mx-auto w-full max-w-lg"
            src="/about-image.png"
            alt=""
            width={480}
            height={414}
          />
        </div>
      </section>
      <section className="px-6 py-24 md:py-44">
        <div className="mx-auto max-w-7xl md:flex md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="mb-14 md:mb-0">
            <h2 className="mb-8 text-3xl font-bold text-dark-900 lg:text-4xl">
              Entre em contato <br /> com a gente!
            </h2>
            <a className="mb-8 flex items-center gap-2" href="#">
              <LuMapPin className="text-primary-500" size={24} />
              R. Amauri Souza, 346
            </a>
            <a className="mb-8 flex items-center gap-2" href="#">
              <LuMail className="text-primary-500" size={24} />
              contato@doctorcare.com
            </a>
            <WhatsappButton />
          </div>
          <Image
            className="mx-auto w-full max-w-md md:mx-0 lg:max-w-xl"
            src="/contact-image.jpg"
            alt=""
            width={480}
            height={414}
          />
        </div>
      </section>
      <footer className="bg-primary-500 px-6 py-14 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="w-full text-2xl text-white lg:w-fit">
              Doctor<span className="font-bold">Care</span>
            </p>
            <p className="text-white">Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-8 text-white">
            <LuInstagram size={24} />
            <LuFacebook size={24} />
            <LuYoutube size={24} />
          </div>
        </div>
      </footer>
    </>
  )
}
