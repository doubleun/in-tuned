import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { GlowIcon, Typography } from '@components/base'

import { cn } from '@utils'
import Link from 'next/link'

const navItemTwClass = `mx-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 dark:focus:bg-black/30 disabled:pointer-events-none bg-transparent hover:bg-slate-100 dark:hover:bg-black/20 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-black/30 data-[active]:bg-slate-50 dark:data-[active]:bg-black/30 h-10 py-2 px-4 group w-max`

function ContactPopup({ triggerClassName }: ContactPopupProps) {
  return (
    <div className={cn(navItemTwClass, triggerClassName)}>
      <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
        <DialogContent className="max-w-none max-h-none w-fit">
          <DialogHeader className="p-4 sm:p-[2.5rem] md:p-[5rem] md:pb-[3rem] lg:p-[4rem] lg:pb-[4rem] flex flex-col justify-between items-center gap-2">
            <DialogTitle>Contact us</DialogTitle>
            <Link href="mailto:intuned.inspired@gmail.com">
              <DialogDescription className="text-xl sm:text-4xl lg:text-6xl">
                intuned.inspiered@gmail.com
              </DialogDescription>
            </Link>
          </DialogHeader>
          <div
            data-test-id="contact-dialog-footer-foundation"
            className="flex w-full justify-center md:pb-[2rem] lg:pb-[2rem]"
          >
            <div
              data-test-id="contact-dialog-footer-container"
              className="flex flex-col items-center gap-2"
            >
              <div className="text-xs">Say hello !</div>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/wachi.f/"
                  target="_blank"
                  className="flex gap-1"
                >
                  <GlowIcon icon="Instagram" size={16} />
                  <Typography
                    dataTestId="contact-social-fluke"
                    text="Fluke"
                    typo="clean"
                    className="text-xs"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/poyja__/"
                  target="_blank"
                  className="flex gap-1"
                >
                  <GlowIcon icon="Instagram" size={16} />
                  <Typography
                    dataTestId="contact-social-ploy"
                    text="Ploy"
                    typo="clean"
                    className="text-xs"
                  />
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default ContactPopup

interface ContactPopupProps {
  triggerClassName?: string
}
