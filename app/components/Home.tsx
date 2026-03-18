import Image from "next/image";
import HomeImg from "@/public/home.png";
import DavrBank from "@/public/bank.webp";
export default function Home() {
  return (
    <div id="home" className="w-full bg-[#00a7cc2b] px-8 py-18">
      <div className="flex items-start">
        <div className="flex-1 hidden md:block">
          <Image alt="Home" src={HomeImg} />
        </div>
        <div className="h-full flex-1 flex flex-col justify-between gap-10">
          <p className="text-4xl md:text-5xl font-bold">Biz haqimizda</p>
          <p className="text-xl text-gray-800 md:w-[80%]">
            Biz kredit olish jarayonini siz uchun oson va tez qilishni maqsad
            qilgan konsalting kompaniyamiz. Tajribali mutaxassislarimiz orqali
            sizga mos bank va eng qulay shartlarni tanlab beramiz. Har bir mijoz
            bilan individual ishlaymiz va barcha bosqichlarda to‘liq yordam
            beramiz.
          </p>

          <div className="flex gap-4">
            <Image width={60} alt="Bank" src={DavrBank} />
            <Image width={60} alt="Bank" src={DavrBank} />
            <Image width={60} alt="Bank" src={DavrBank} />
            <Image width={60} alt="Bank" src={DavrBank} />
            <Image width={60} alt="Bank" src={DavrBank} />
          </div>
        </div>
      </div>
    </div>
  );
}
