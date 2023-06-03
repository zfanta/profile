import Image from "next/image"
import { projects } from "@/data"

const width = 614

interface ImagesProps {
  images: (typeof projects)[number]["images"]
}

function ImageGrid({ images }: ImagesProps) {
  return (
    <div className="mt-2 hidden print:block lg:block">
      {images.map((line, index) => {
        const widthSum = line.reduce((acc, image) => acc + image.width, 0)
        return (
          <div className="flex flex-row gap-2" key={index}>
            {line.map((image) => {
              return image.srcset.map((src) => {
                const className =
                  src.colorScheme === "dark"
                    ? "hidden dark:block"
                    : src.colorScheme === "light"
                    ? "block dark:hidden"
                    : ""
                return (
                  <a href={src.src.src} target="_blank" key={src.src.src} className={className} rel="noreferrer">
                    <Image src={src.src} alt={image.alt} width={image.width * image.ratio * (width / widthSum)} />
                  </a>
                )
              })
            })}
          </div>
        )
      })}
    </div>
  )
}

function ImageCol({ images }: ImagesProps) {
  const flattened = images.flat()

  return (
    <div className="mt-2 flex flex-col items-center gap-2 print:hidden lg:hidden">
      {flattened.map((image) =>
        image.srcset.map((src) => {
          const className =
            src.colorScheme === "dark" ? "hidden dark:block" : src.colorScheme === "light" ? "block dark:hidden" : ""
          return (
            <a href={src.src.src} target="_blank" key={src.src.src} className={className} rel="noreferrer">
              <Image src={src.src} alt={image.alt} width={Math.min(image.width, width)} />
            </a>
          )
        })
      )}
    </div>
  )
}

export default function Images({ images }: ImagesProps) {
  return (
    <>
      <ImageGrid images={images} />
      <ImageCol images={images} />
    </>
  )
}
