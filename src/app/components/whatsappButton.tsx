import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappButton() {
  return (
    <a
      className="flex w-fit items-center gap-4 rounded-full bg-primary-500 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-primary-700"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5585998655310"
    >
      <FaWhatsapp size={24} /> Agende sua consulta
    </a>
  )
}
