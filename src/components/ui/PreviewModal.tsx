import Image from "next/image";
import React, { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

function PreviewModal({
  handlePhotosModal,
  images,
  videos,
}: {
  handlePhotosModal: () => void;
  images: { url: string; width: number; height: number; isVideo: boolean }[];
  videos: { url: string; width: number; height: number; isVideo: boolean }[];
}) {
  const [index, setIndex] = useState<number>(0);

  const nextPage = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (index === imagesAndVideos.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const prevPage = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (index === 0) {
      setIndex(imagesAndVideos.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const styles = {
    arrow: `
        absolute 
        w-32 
        h-screen 
        cursor-pointer 
        flex 
        items-center 
        justify-center
        transition-colors
        duration-300
        hover:bg-white/5
        active:bg-white/10
        `,
  };

  const imagesAndVideos = [...images, ...videos];

  return (
    <div
      className="
        w-full 
        h-[100dvh] 
        fixed 
        flex 
        justify-center 
        items-center 
        top-0 
        left-0 
        z-70 
        bg-black/80
        "
      onClick={handlePhotosModal}
    >
      <div
        className="
            relative 
            flex 
            justify-center 
            items-center
            "
        onClick={(e) => e.stopPropagation()}
      >
        {imagesAndVideos.length > 0 &&
          (!imagesAndVideos[index].isVideo ? (
            <Image
              src={`${imagesAndVideos[index].url}`}
              width={imagesAndVideos[index].width}
              height={imagesAndVideos[index].height}
              alt="Galeria con las capturas de mis proyectos personales para mi portafolio"
              className="object-cover rounded-xs select-none"
            />
          ) : (
            <video width="1200" height="1200" controls autoPlay>
              <source src={`${imagesAndVideos[index].url}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
      </div>

      <div className={`${styles.arrow} left-0`} onClick={(e) => prevPage(e)}>
        <CircleArrowLeft className="size-10  transition-colors duration-300 text-white/60" />
      </div>

      <div className={`${styles.arrow} right-0`} onClick={(e) => nextPage(e)}>
        <CircleArrowRight className="size-10  transition-colors duration-300 text-white/60" />
      </div>

      <div className="absolute w-full bottom-10 flex items-center justify-center text-sm text-[var(--font-color-dark)]">
        <p>
          {index + 1}/{imagesAndVideos.length}
        </p>
      </div>
    </div>
  );
}

export default PreviewModal;
