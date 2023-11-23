import { SectionTitle } from "@/components/Elements";
import {
  AppleLogo,
  CannonLogo,
  HuaweiLogo,
  LenovoLogo,
  SamsungLogo,
  SonyLogo,
} from "@/constants";

export const TopBrandSection = () => {
  return (
    <section className="content-container flex flex-col gap-8">
      <SectionTitle title="Top Brands" />
      <div className="flex items-center justify-between py-8">
        <AppleLogo />
        <SonyLogo />
        <SamsungLogo />
        <CannonLogo />
        <HuaweiLogo />
        <LenovoLogo />
      </div>
    </section>
  );
};
