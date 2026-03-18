import Image from "next/image";
import How1 from "@/public/how1.png";
import How2 from "@/public/how2.png";
import How3 from "@/public/how3.png";

export default function HowItWorks() {
  return (
    <div id="howItWorks" className="w-full bg-[#00a7cc2b] px-8 py-18">
      <p className="text-3xl md:text-5xl font-bold text-center mb-12">
        Qanday ishlaydi ?
      </p>
      <div className="w-full flex justify-between gap-6 flex-wrap">
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 px-4 md:px-8 py-6">
          <Image alt="" src={How1} width={450} />
          <p className="font-bold text-2xl mt-8">Bizga qo`g`iroq qiling</p>
        </div>
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 px-4 md:px-8 py-6">
          <Image alt="" src={How2} width={450} />
          <p className="font-bold text-2xl mt-8">
            Mutaxassisimiz bilan bog‘lanib va uy yoki mashinangizni garovga
            qo‘yish shartlarini bilib oling.
          </p>
        </div>
        <div className="md:flex-3/12 flex-1 flex flex-col gap-8 px-4 md:px-8 py-6">
          <Image alt="" src={How3} width={330} />
          <p className="font-bold text-2xl mt-8">
            50 milliondan 5 milliardgacha mablag‘ingizni tezkor
            rasmiylashtiramiz
          </p>
        </div>
      </div>
    </div>
  );
}
