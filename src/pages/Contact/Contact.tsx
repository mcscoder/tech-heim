import {
  Button,
  ContactMethod,
  ContactMethodProps,
  Input,
  TextField,
} from "@/components/Elements";
import { CallIncomingIcon, LocationAddIcon, SmsIcon } from "@/constants";

const contactMethods: ContactMethodProps[] = [
  {
    icon: <LocationAddIcon />,
    title: "Office",
    description: "123 Main Street, Anytown,USA",
  },
  {
    icon: <SmsIcon />,
    title: "Email",
    description: "info@techheim.com",
  },
  {
    icon: <CallIncomingIcon />,
    title: "Phone",
    description: "+1 (555) 123-4567",
  },
];

export const Contact = () => {
  return (
    <section className="content-container flex flex-col m-24 gap-24">
      <div className="flex items-start justify-around">
        {contactMethods.map((item, index) => {
          return (
            <ContactMethod
              key={index}
              {...item}
            />
          );
        })}
      </div>
      <div className="flex gap-32">
        <div className="flex flex-col gap-6 flex-[1.5]">
          <h4>Message Us</h4>
          <p className="text-body-xl text-gray-71">
            We're here to assist you every step of the way. Whether you have a
            question, need technical support, or simply want to share your
            feedback, our dedicated team is ready to listen and provide prompt
            assistance.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-6 flex-[1]"
        >
          <div className="flex flex-col gap-4">
            <Input
              placeholder="* Your name"
              label="Name"
              required
            />
            <Input
              placeholder="* Your Email"
              label="Email"
              required
            />
            <TextField placeholder="Message" />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-[50%]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
