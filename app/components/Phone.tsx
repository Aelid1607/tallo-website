import Image from "next/image";

type PhoneProps = {
  src: string;
  alt: string;
  size?: "small" | "regular" | "hero";
  device?: "ios" | "android";
  priority?: boolean;
};

export function Phone({
  src,
  alt,
  size = "regular",
  device = "ios",
  priority = false,
}: PhoneProps) {
  return (
    <div className={`phone phone-${size} phone-${device}`}>
      <div className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={1206}
          height={2622}
          priority={priority}
          sizes="(max-width: 700px) 70vw, 420px"
        />
      </div>
    </div>
  );
}
