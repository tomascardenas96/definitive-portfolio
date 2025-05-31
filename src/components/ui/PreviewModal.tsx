import Image from "next/image";
import React, { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { IoMdClose } from "react-icons/io";

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
        w-25
        h-[100%]
        cursor-pointer 
        flex 
        items-center 
        justify-center
        transition-colors
        duration-300
        z-1
        xl:hover:bg-white/5
        xl:active:bg-white/10
        xl:w-32 
        `,
  };

  const imagesAndVideos = [...images, ...videos];

  return (
    <div
      className="
        w-full 
        h-[100vh] 
        fixed 
        flex 
        justify-center 
        items-center 
        top-0 
        left-0 
        z-70 
        bg-black/80
        pb-10
        "
      onClick={handlePhotosModal}
    >
      <div
        className="
            relative
            flex 
            justify-center 
            items-center
            flex-col
            gap-5
            xl:static
            "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end pr-5 relative h-7 xl:pr-0 ">
          <IoMdClose
            className="absolute z-30 size-8 xl:cursor-pointer xl:hover:bg-white/5
        xl:active:bg-white/10 transition-colors duration-300"
            onClick={handlePhotosModal}
          />
        </div>

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

        <div className="w-full bottom-10 flex items-center justify-center text-sm text-[var(--font-color-dark)]">
          <p>
            {index + 1}/{imagesAndVideos.length}
          </p>
        </div>

        <div className={`${styles.arrow} left-0`} onClick={(e) => prevPage(e)}>
          <CircleArrowLeft className="size-10  transition-colors duration-300 text-white/60" />
        </div>

        <div className={`${styles.arrow} right-0`} onClick={(e) => nextPage(e)}>
          <CircleArrowRight className="size-10  transition-colors duration-300 text-white/60" />
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
