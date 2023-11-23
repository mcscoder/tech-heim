import { Button } from "@/components/Elements";

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
          src="https://s3-alpha-sig.figma.com/img/1674/8db2/4d54715f5a9efbe4e0abf224c5fa5484?Expires=1701648000&Signature=NlYTC7p6IzHqfevRnTAtkkNmDORPz68MpSyweCKxhODE4E4LtoehcplTwqBlFvw6hYDzzTyTOPS5OG9lzhX9Pxa3Vq6APie5LwmseJlnZo0KvZITkjvCjDempYZfO~8b1-ShagCuW8h1Db6Nosn5njmiQru3tzw8-Du4n8k~TRSnE5nUsYk-5D3yvfTgKCxwiyGiCr9~Dk4EAQHH3UkZAA-815dga1J9~RfO34R6-Ez1HNTtRpbpRIR1BJGZ3ILo6tULjOuvQTL5hbT9Dqg1Oy06K8BCzqEzi50U7C2NLo0jPaSwsM8EKRUqY3F~ipFSEixv~PTGo5-yHjdj56W6gA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="laptop"
        />
      </div>
    </section>
  );
};
