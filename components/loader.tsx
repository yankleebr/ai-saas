import Image from "next/image"


export const Loader = () => {
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w10 h-10 relative animate-spin">
               <Image
                alt="logo"
                width={35}
                height={35}
                src={'/logo.png'}
               />
            </div>
            <p className="text-sm text-muted-foreground">
                Genius is thinking...
            </p>
        </div>
    ) 
  }