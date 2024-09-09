import { Button } from "@/components/ui/button"
import Hashtags from "./Hashtag"
import Link from "next/link"
import Image from "next/image"
import { displays, icons } from "@/lib/icon"


type ProjectHeaderProps = {
  titleWord: string
  secondWord: string
  demoUrl?: string
  tags: string[]
  descriptionWords: string[]
  descriptionColor?: string
  showStore: boolean

  bgColor?: string
  textColor?: string
  className?: string
  buttonColor?: string
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  qrCode?: string
}


const ProjectHeader = ({
  titleWord,
  secondWord,
  tags,
  descriptionWords,
  descriptionColor,
  bgColor,
  textColor,
  demoUrl,
  className,
  buttonColor,
  showStore,
  buttonVariant,
  qrCode,
}: ProjectHeaderProps) => {
  return (
    <div className={`w-full flex flex-col rounded-2xl p-5 space-y-3 ${className} ${bgColor}`}>
      <div className='w-full flex flex-col gap-3'>
        <h1 className={`text-3xl sm:text-5xl font-bold ${textColor}`}>{titleWord}.</h1>

        <p className={`text-xl font-medium ${textColor}`}>{secondWord}</p>

        <ul className='list-disc list-inside text-sm font-normal'>
          {descriptionWords?.map((word, index) => (
            <li key={index} className={`${descriptionColor}`}>{word}</li>
          ))}
        </ul>
      </div>

      <div className='flex overflow-x-scroll custom-scrollbar whitespace-nowrap'>
        <Hashtags tags={tags} />
      </div>

      {showStore ? (
        <div className='flex gap-2'>
          <Image src={icons.appleStore} height={30} alt='apple' />
          <Image src={icons.googlePlay} height={30} alt='google' />
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Link href={demoUrl ? demoUrl : '/'} target='_blank'>
            <Button variant={buttonVariant} size='sm' className={`${buttonColor}`}>
              Demo
            </Button>
          </Link>

          {qrCode && (
            <div>
              <Image src={qrCode} width={45} height={45} alt='qrCode' />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectHeader