import Image from "next/image";
import Why1 from "@/public/why-1.png";
import Why2 from "@/public/why-2.png";
import Why3 from "@/public/why-3.png";

export default function WhyUs() {
  return (
    <div id="whyUs" className="w-full bg-[#FAFAFA] px-8 py-18">
      <p className="text-3xl md:text-5xl font-bold text-center mb-12">
        Nega aynan biz ?
      </p>
      <div className="w-full flex justify-between gap-6 flex-wrap">
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 bg-white px-12 py-6 border-b-4 border-b-[#00A8CC]">
          <Image className="m-auto" alt="" src={Why1} />
          <p className="text-xl font-bold">
            Kredit rasmiylashtirish – 1 kun ichida
          </p>
          <p>
            Kreditingizni bir kundan kechikmagan holda chiqarib beramiz.
            Tajribali mutaxassislarimiz kredit jarayonini tez va oson hal
            qilishga yordam beradi.
          </p>
        </div>
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 bg-white px-12 py-6 border-b-4 border-b-[#00A8CC]">
          <Image className="m-auto" alt="" src={Why2} />
          <p className="text-xl font-bold">Past foizli kredit (15% – 17%)</p>
          <p>
            Siz uchun eng qulay foiz stavkalari bilan kredit variantlarini
            tanlab beramiz. Hamkor banklar orqali 15%–17% stavkada kredit olish
            imkoniyatini taqdim etamiz va jarayonni maksimal darajada
            soddalashtiramiz.
          </p>
        </div>
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 bg-white px-12 py-6 border-b-4 border-b-[#00A8CC]">
          <Image className="m-auto" alt="" src={Why3} />
          <p className="text-xl font-bold">
            Kredit rasmiylashtirish – 1 kun ichida
          </p>
          <p>
            Barcha jarayonlar tajribali mutaxassislarimiz nazoratida amalga
            oshiriladi. Sizning ma’lumotlaringiz to‘liq himoyalangan bo‘lib,
            kredit rasmiylashtirish xavfsiz va shaffof tarzda olib boriladi.
          </p>
        </div>
      </div>
    </div>
  );
}
