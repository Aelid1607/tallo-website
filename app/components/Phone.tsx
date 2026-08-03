import Image from "next/image";

type PhoneProps = {
  src: string;
  alt: string;
  size?: "small" | "regular" | "hero";
  device?: "ios" | "android";
  priority?: boolean;
};

const screenshotsNeedingDynamicIsland = new Set([
  "/screenshots/liquor-home.png",
  "/screenshots/meal-planner.png",
  "/screenshots/recipe-detail.png",
]);

export function Phone({
  src,
  alt,
  size = "regular",
  device = "ios",
  priority = false,
}: PhoneProps) {
  const needsDynamicIsland =
    src.startsWith("/screenshots/iphone17/") ||
    screenshotsNeedingDynamicIsland.has(src);

  return (
    <div className={`phone phone-${size} phone-${device}`}>
      <Image
        className="phone-hardware"
        src="/devices/iphone17-lineup.avif"
        alt=""
        width={1665}
        height={1080}
        priority={priority}
        aria-hidden="true"
      />
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
      {needsDynamicIsland ? <span className="phone-island" aria-hidden="true" /> : null}
    </div>
  );
}
