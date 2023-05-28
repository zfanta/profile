import { projects } from '@/data'
import Image from 'next/image'

const width = 614

interface ImagesProps {
  images: (typeof projects)[number]['images']
}

function ImageGrid ({images}: ImagesProps) {
  return (
    <div className="hidden print:block lg:block mt-2">
      {images.map((line, index) => {
        const widthSum = line.reduce((acc, image) => acc + image.width, 0)
        return (
          <div className="flex flex-row gap-2" key={index}>
            {line.map((image, index) => {
              return (
                <a href={image.src.src} target="_blank" key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={(image.width * image.ratio)*(width/widthSum)}
                  />
                </a>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

function ImageCol ({images}: ImagesProps) {
  const flattened = images.flat()

  return (
    <div className="flex flex-col gap-2 lg:hidden print:hidden items-center mt-2">
      {flattened.map((image, index) => (
        <a href={image.src.src} target="_blank" key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={Math.min(image.width, width)}
          />
        </a>
      ))}
    </div>
  )
}

export default function Images ({ images }: ImagesProps) {
  return (
    <>
      <ImageGrid images={images} />
      <ImageCol images={images} />
    </>
  )
}
