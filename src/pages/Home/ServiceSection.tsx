import Container from "@/components/ui/Container";
import BatteryReplacement from "../SmallComponents/BatteryReplacement";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Service we provided</h1>
        <p className="max-w-[80ch] mt-5 mb-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestias,Lorem, ipsum dolor sit amet consectetur ut?
        </p>
      </div>
      <div className="grid grid-row-12 gap-5">
        <BatteryReplacement />

        <div className="bg-red-400 h-[350px] rounded-2xl col-span-6 lg:col-row-5"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-12 lg:col-span-7"></div>
        <div className="bg-red-400 h-[350px] rounded-2xl col-span-12 lg:col-span-5"></div>

        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
