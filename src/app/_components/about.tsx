import {Check} from '@phosphor-icons/react/dist/ssr';
import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr';
import {MapPin} from '@phosphor-icons/react/dist/ssr';


import Image from "next/image";

export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16">
            <div className="container px-4 mx-auto grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden' data-aos="fade-down">
                            <Image
                                src="/images/about-1.png"
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden' data-aos="fade-right">
                            <Image
                                src="/images/about-2.png"
                                alt="Foto do cachorro 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold" data-aos="fade-right" data-aos-delay="300">
                            SOBRE
                        </h2>

                        <p>
                            Until one has loved an animal, a part of one's soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex flex-col lg:flex-row gap-2" data-aos="fade-up" data-aos-delay="300">
                            <a
                                target='_blank'
                                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a
                                href="#"
                                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da loja
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}