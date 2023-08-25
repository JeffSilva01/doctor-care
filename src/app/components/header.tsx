'use client'
import { LuFacebook, LuInstagram, LuMenu, LuX, LuYoutube } from 'react-icons/lu'
import { useState } from 'react'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header
      data-open={isOpenMenu}
      className="group fixed z-0 w-full bg-primary-200 px-6 data-[open=true]:bg-primary-500"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row lg:justify-between">
        <p className="w-full text-2xl leading-[72px] text-primary-500 group-data-[open=true]:text-white lg:w-fit">
          Doctor<span className="font-bold">Care</span>
        </p>
        <nav className="sr-only items-center group-data-[open=true]:not-sr-only group-data-[open=true]:flex group-data-[open=true]:h-screen group-data-[open=true]:w-screen group-data-[open=true]:flex-col group-data-[open=true]:gap-16 group-data-[open=true]:bg-primary-500 group-data-[open=true]:pt-16 lg:not-sr-only lg:flex lg:gap-8">
          <a
            className="text-2xl font-bold text-white lg:text-base lg:font-normal lg:text-primary-500"
            href="#home"
          >
            Início
          </a>
          <a
            className="text-2xl font-bold text-white lg:text-base lg:font-normal lg:text-primary-500"
            href="#about"
          >
            Sobre
          </a>
          <a
            className="text-2xl font-bold text-white lg:text-base lg:font-normal lg:text-primary-500"
            href="#services"
          >
            Serviços
          </a>
          <a
            className="text-2xl font-bold text-white lg:text-base lg:font-normal lg:text-primary-500"
            href="#Depositions"
          >
            Depoimentos
          </a>

          <a
            className="rounded-full bg-white px-8 py-4 text-2xl font-bold uppercase text-primary-500 lg:ml-48 lg:border lg:border-primary-500 lg:bg-transparent lg:px-6 lg:py-2 lg:text-sm"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5585998655310"
          >
            Agende sua consulta
          </a>
          <div className="flex items-start gap-8 lg:hidden">
            <LuInstagram className="text-white" size={24} />
            <LuFacebook className="text-white" size={24} />
            <LuYoutube className="text-white" size={24} />
          </div>
        </nav>
        <button
          className="absolute right-6 top-6 z-20 lg:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          type="button"
        >
          {isOpenMenu ? (
            <LuX className="text-white" size={24} />
          ) : (
            <LuMenu className="text-primary-500" size={24} />
          )}
        </button>
      </div>
    </header>
  )
}
