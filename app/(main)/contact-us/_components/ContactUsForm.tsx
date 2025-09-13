"use client";
import { useEffect, useState } from "react";

import { Info, Loader, Send } from "lucide-react";
import { toast } from "sonner";

import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useContact from "@/hooks/useContact";
import { ContactUsContent } from "@/types/content.types";
import { ContactData } from "@/types/marketing.types";

const initialData: ContactData = {
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  description: "",
};

const trimString = (str: string) => str.trim();
interface ContactUsFormProps {
  content: ContactUsContent;
}
const ContactUsForm = ({ content }: ContactUsFormProps) => {
  const { sendContactData, isLoading, error, success } = useContact();

  const [formData, setFormData] = useState<ContactData>(initialData);
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    if (success) {
      setFormData(initialData);
      setSelectedSubject("");
      toast.success("Message sent successfully");
    }
    if (error) {
      toast.error("Error", { description: error });
    }
  }, [success, error]);

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    if (value !== "Other") {
      setFormData({ ...formData, subject: value });
    } else {
      setFormData({ ...formData, subject: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendContactData(formData);
  };
  return (
    <section className="flex w-full justify-center">
      <div className="flex gap-12 max-md:flex-col md:gap-16">
        <form className="bg-background relative max-w-xl rounded-3xl p-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
            <div className="flex w-full gap-6">
              <div className="flex w-full flex-col gap-3">
                <label className="text-sm font-medium">
                  First Name <span className="text-primary">*</span>
                </label>
                <Input
                  className="w-full"
                  placeholder="Eg, Peter"
                  value={formData.first_name}
                  required
                  onChange={e => {
                    if (trimString(formData.first_name + e.target.value) === "") return;
                    setFormData({ ...formData, first_name: e.target.value });
                  }}
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <label className="text-sm font-medium">
                  Last Name <span className="text-primary">*</span>
                </label>
                <Input
                  className="w-full"
                  placeholder="Eg, Lost"
                  value={formData.last_name}
                  required
                  onChange={e => {
                    if (trimString(formData.last_name + e.target.value) === "") return;
                    setFormData({ ...formData, last_name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Email <span className="text-primary">*</span>
              </label>
              <Input
                className="w-full"
                type="email"
                placeholder="Example@email.com"
                required
                value={formData.email}
                onChange={e => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Subject <span className="text-primary">*</span>
              </label>
              <Select onValueChange={handleSubjectChange} value={selectedSubject} required>
                <SelectTrigger className="!h-11 w-full rounded-lg">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recommend new AI tool">Recommend new AI tool</SelectItem>
                  <SelectItem value="Submit feedback">Submit feedback</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {selectedSubject === "Other" && (
                <Input
                  className="mt-2 w-full"
                  placeholder="Please specify your subject"
                  value={formData.subject}
                  required
                  onChange={e => {
                    if (trimString(formData.subject + e.target.value) === "") return;
                    setFormData({ ...formData, subject: e.target.value });
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Description <span className="text-primary">*</span>
              </label>
              <Textarea
                className="w-full"
                placeholder="Write Your questions in detail to support your Subject..."
                value={formData.description}
                required
                onChange={e => {
                  if (trimString(formData.description + e.target.value) === "") return;
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
              <div className="text-secondary-foreground flex items-center gap-1 pt-2 text-sm">
                <Info className="size-4" /> <p>Fields with * are required to fill this form</p>
              </div>
            </div>
          </div>

          <Button className="mt-14 w-full" type="submit" disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin" /> : " Confirm to send"}
          </Button>
          <div className="bg-primary absolute top-2/5 right-0 -z-10 h-20 w-full rounded-full blur-[300px]" />
        </form>
        <div className="flex h-full w-full flex-col justify-between py-8 max-md:items-center md:w-80 xl:w-96">
          <div className="flex flex-col max-md:text-center">
            <p className="text-xl font-semibold">{content.contact_info_title}</p>
            <div className="mt-8 md:mt-10">
              <p className="font-outfit mt-3 text-lg font-medium">{content.email_support_title}</p>
              <p className="mt-2.5">{content.email_support_description}</p>
              <div className="mt-5 flex w-full items-center gap-2 font-semibold max-md:justify-center">
                <Send className="size-5" />
                <p className="underline">{content.support_email}</p>
              </div>
            </div>
          </div>
          <div className="my-12 flex flex-col justify-center gap-3 max-md:text-center">
            <p className="font-outfit mt-3 text-lg font-medium">Our Official Social Medias</p>
            <p>{content.email_support_description}</p>
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
