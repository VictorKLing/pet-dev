import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export function Hero () {
    return (
        <section className="bg-[#e84c3d] text-white relative overflow-hidden">
            <div>
                <Image
                    src="/images/hero-dog.webp"
                    alt="Imagem de um cachorro"
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 lg:hidden'>

                </div>
            </div>
            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                        </p>
                        <a
                            target='_blank'
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            >
                        <WhatsappLogo className="w-5 h-5" />
                            Contato via Whatsapp
                        </a>
                        <div className="mt-8">
                            <p className="text-sm mb-8 ">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                            </p>
                            <div className='flex mt-4'>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image
                        src="/images/hero-dog.webp"
                        alt='Foto do dog'
                        className='object-contain'
                        fill
                        sizes="(max-width: 768px) 0vw, 50vw"
                        quality={100}
                        priority
                        />
                    </div>
                </article>
            </div>
            
        </section>
    )
}