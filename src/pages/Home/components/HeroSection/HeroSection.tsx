import { Button } from "@/components/Elements";
import { HeroLaptopImage } from "@/constants";

export const HeroSection = () => {
  return (
    <section className="content-container flex items-center mt-2">
      <div className="flex flex-col items-start gap-28 flex-[1.1]">
        <div className="flex flex-col gap-8">
          <h1 className="text-primary-700 text-[64px] font-semibold">
            Tech Heim
          </h1>
          <h3 className="text-primary-700">
            "Join the <span className="text-Secondary">digital revolution</span>
            "
          </h3>
        </div>
        <Button
          variant="fillSecondary"
          className="!px-24 !py-5"
        >
          Explore More
        </Button>
      </div>
      <div className="flex-1">
        <img
          src={HeroLaptopImage}
          alt="laptop"
        />
      </div>
    </section>
  );
};
