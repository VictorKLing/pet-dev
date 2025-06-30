"use client";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: "/images/tutor1.png",
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: "/images/tutor1.png",
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: "/images/tutor1.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up" data-aos-delay="300">Depoimentos dos nossos clientes</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="object-cover rounded-full"
                          />
                        </div>

                        <p className="text-gray-200">{item.content}</p>

                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-10 flex items-center justify-center gap-3">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
