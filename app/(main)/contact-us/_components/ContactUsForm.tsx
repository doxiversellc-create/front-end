import { Info, Send } from "lucide-react";

import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUsForm = () => {
  return (
    <section className="w-full flex justify-center ">
      <div className="   flex gap-12 md:gap-16 max-md:flex-col">
        <form className="relative  p-6 max-w-xl bg-background rounded-3xl border ">
          <div className="flex flex-col gap-8">
            <div className="flex  gap-6 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label className=" font-medium text-sm">
                  First Name <span className="text-primary">*</span>
                </label>
                <Input className="w-full" placeholder="Eg, Peter" />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className=" font-medium text-sm">
                  Last Name <span className="text-primary">*</span>
                </label>
                <Input className="w-full" placeholder="Eg, Lost" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className=" font-medium text-sm">
                Email <span className="text-primary">*</span>
              </label>
              <Input className="w-full" type="email" placeholder="Example@email.com" />
            </div>
            <div className="flex flex-col gap-3">
              <label className=" font-medium text-sm">
                Subject <span className="text-primary">*</span>
              </label>
              <Input className="w-full" placeholder="Write here." />
            </div>
            <div className="flex flex-col gap-3">
              <label className=" font-medium text-sm">
                Description <span className="text-primary">*</span>
              </label>
              <Textarea
                className="w-full"
                placeholder="Write Your questions in detail to support your Subject..."
              />
              <div className=" flex items-center gap-1  text-secondary-foreground text-sm pt-2">
                <Info className="size-4" /> <p>Fields with * are required to fill this form</p>
              </div>
            </div>
          </div>

          <Button className=" mt-14 w-full">Confirm to send</Button>
          {/* <div className="absolute blur-[300px] top-2/5 rounded-full right-0 w-full h-20 bg-primary -z-10" /> */}
        </form>
        <div className="h-full w-full max-md:items-center  md:w-80 xl:w-96 py-8  flex flex-col justify-between ">
          <div className="flex flex-col max-md:text-center">
            <p className="text-xl font-semibold">Contact Information</p>
            <div className="mt-8 md:mt-10 ">
              <p className="font-medium text-lg mt-3 font-outfit">Email Support</p>
              <p className="mt-2.5">Speak to our friendly team Via our Socials</p>
              <div className="flex items-center font-semibold gap-2 mt-5 w-full max-md:justify-center">
                <Send className="size-5 " />
                <p className=" underline">Support@Doxiverse.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center  max-md:text-center gap-3 my-12 ">
            <p className="font-medium text-lg mt-3 font-outfit">Our Official Social Medias</p>
            <p>Speak to our friendly team Via our Socials</p>
            <div className="flex gap-4 justify-center">
              {socialMediaData.map(item => (
                <SocialMediaIcon
                  className="rounded-full border-2 size-11 p-2.5"
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
