// components/BackgroundImage.tsx
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <Image
      src="/images/Untitled design (1).png"
      alt="Background"
      fill
      priority
      quality={80}
      className="object-cover"
      sizes="100vw"
    />
  );
};

export default BackgroundImage;