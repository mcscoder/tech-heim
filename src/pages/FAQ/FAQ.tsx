import { Question } from "@/components/Elements";

export const FAQ = () => {
  return (
    <section className="content-container flex flex-col my-20 gap-6">
      <div className="h-[450px] relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/98cb/6d04/7c10ce9c6bec9dfb1d180644d83ea12b?Expires=1702252800&Signature=HM5tJurGfUROFu3LYpkWV45tD-3dvlM6dSV5yLtvC-A06qDELkPBrKPR7cX4wwc~Wy~rIDxeoirOxfkKcU3Xt2upfkTfUACfUMwUYjJ5mrbHqs-qqoiuYHKlLRJwI-FPiWJHZfQTNi7zZqRe2cHoQlyS8SzHixJAbsl7m6j7AspUCX9pdrCAAps0aoBJvjfb4goXrocSMp8~H73-dubClwqXT7kTR6L7TL5y-NiIrRHFtvEXXrlj5TMvXbRWGtxVCDWBYGuiGpC1Uld-DYfiiQSllIGw6HLvN2~n3qdv1ZCt~ghy~dMka9hpvZDqiBN1I3nwietgGBaP1s0kA-YWCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="frequently questions"
          className="object-cover w-full h-full object-[50%_75%] rounded-xl"
        />
        <h3 className="absolute top-[50%] left-10 text-primary-900">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="flex flex-col">
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
        <Question
          title="Can I purchase products from Tech Heim using installment payments?"
          description="Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget."
        />
      </div>
    </section>
  );
};
