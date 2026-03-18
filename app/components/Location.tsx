import Image from "next/image";
import Picture1 from "@/public/1.jpg";
import Picture2 from "@/public/2.jpg";
import Picture3 from "@/public/3.jpg";

export default function Location() {
  return (
    <div id="location" className="w-full bg-[#00a7cc2b] px-8 py-18">
      <p className="text-4xl md:text-5xl font-bold text-center mb-12">
        Bizning manzil
      </p>
      <div className="flex justify-between items-center gap-8 flex-wrap">
        <div className="flex-12/12 md:flex-3/12 bg-gray-300 object-cover rounded-md h-56">
          <Image
            alt=""
            src={Picture1}
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>
        <div className="flex-12/12 md:flex-3/12 bg-gray-300 rounded-md h-56">
          <Image
            alt=""
            src={Picture2}
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>
        <div className="flex-12/12 md:flex-3/12 bg-gray-300 rounded-md h-56">
          <Image
            alt=""
            src={Picture3}
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>
      </div>
      <div className="w-full h-100 mt-8 rounded-md">
        <iframe
          src="https://maps.google.com/maps?q=41.300383,69.204294&z=16&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
