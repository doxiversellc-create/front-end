import Image from "next/image";

export default function WriterInfo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/avatar.png"
        alt="Writer Profile"
        width={60}
        height={60}
        className="size-14 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <p className="font-outfit text-lg font-medium">Barkonal Accent</p>
        <p className="font-inter text-muted-foreground text-sm">Apr 30, 2025</p>
      </div>
    </div>
  );
}
