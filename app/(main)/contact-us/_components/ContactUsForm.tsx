import { Info, Send } from "lucide-react";

import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUsForm = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex gap-12 max-md:flex-col md:gap-16">
        <form className="bg-background relative max-w-xl rounded-3xl p-6">
          <div className="flex flex-col gap-8">
            <div className="flex w-full gap-6">
              <div className="flex w-full flex-col gap-3">
                <label className="text-sm font-medium">
                  First Name <span className="text-primary">*</span>
                </label>
                <Input className="w-full" placeholder="Eg, Peter" />
              </div>
              <div className="flex w-full flex-col gap-3">
                <label className="text-sm font-medium">
                  Last Name <span className="text-primary">*</span>
                </label>
                <Input className="w-full" placeholder="Eg, Lost" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Email <span className="text-primary">*</span>
              </label>
              <Input className="w-full" type="email" placeholder="Example@email.com" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Subject <span className="text-primary">*</span>
              </label>
              <Input className="w-full" placeholder="Write here." />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Description <span className="text-primary">*</span>
              </label>
              <Textarea
                className="w-full"
                placeholder="Write Your questions in detail to support your Subject..."
              />
              <div className="text-secondary-foreground flex items-center gap-1 pt-2 text-sm">
                <Info className="size-4" /> <p>Fields with * are required to fill this form</p>
              </div>
            </div>
          </div>

          <Button className="mt-14 w-full">Confirm to send</Button>
          <div className="bg-primary absolute top-2/5 right-0 -z-10 h-20 w-full rounded-full blur-[300px]" />
        </form>
        <div className="flex h-full w-full flex-col justify-between py-8 max-md:items-center md:w-80 xl:w-96">
          <div className="flex flex-col max-md:text-center">
            <p className="text-xl font-semibold">Contact Information</p>
            <div className="mt-8 md:mt-10">
              <p className="font-outfit mt-3 text-lg font-medium">Email Support</p>
              <p className="mt-2.5">Speak to our friendly team Via our Socials</p>
              <div className="mt-5 flex w-full items-center gap-2 font-semibold max-md:justify-center">
                <Send className="size-5" />
                <p className="underline">Support@Doxiverse.com</p>
              </div>
            </div>
          </div>
          <div className="my-12 flex flex-col justify-center gap-3 max-md:text-center">
            <p className="font-outfit mt-3 text-lg font-medium">Our Official Social Medias</p>
            <p>Speak to our friendly team Via our Socials</p>
            <div className="flex justify-center gap-4 md:justify-start">
              {socialMediaData.map(item => (
                <SocialMediaIcon
                  className="size-11 rounded-full border-2 p-2.5"
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
