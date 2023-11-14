import { Form, Icon, Input, Link } from "@/components/Elements";
import { ArrowRightIcon, UserIcon, socialLinks } from "@/constants";

export const MainFooterMisc = () => {
  return (
    <div className="flex flex-col items-start gap-4 text-white">
      <h6>Sign up for News and updates</h6>
      <Form>
        <Input
          startIcon={<UserIcon />}
          endIcon={<ArrowRightIcon />}
          placeholder="E-mail-address"
          className="w-[350px]"
        />
      </Form>
      <div className="flex items-center gap-4">
        {socialLinks.map((socialLink, index) => {
          return (
            <Link
              href={socialLink.path}
              key={index}
              target={socialLink.target || ""}
              startIcon={
                <Icon
                  primaryIcon={socialLink.startIcon}
                  secondaryIcon={socialLink.endIcon}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};
