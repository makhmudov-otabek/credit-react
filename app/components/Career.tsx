import Image from "next/image";
import CareerImg from "@/public/career.png";
export default function Career() {
  return (
    <div id="career" className="w-full bg-[#FAFAFA] px-8 py-18">
      <p className="text-4xl font-bold text-center mb-12">
        Faoliyatimiz davomida
      </p>
      <div className="w-full flex justify-between gap-6 items-center flex-wrap">
        <div className="md:w-6/12 w-full">
          <p className="text-3xl md:text-5xl font-bold mb-12">
            500+ muvaffaqiyatli kreditlar
          </p>
          <p className="text-3xl md:text-5xl font-bold">
            10 milliard so‘m – jami berilgan mablag‘
          </p>
        </div>

        <div className="md:w-5/12 w-full">
          <Image alt="" src={CareerImg} width={600} />
        </div>
      </div>
    </div>
  );
}
