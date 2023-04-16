'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet'
import { Menu } from 'lucide-react'
import { ReactNode } from 'react'

interface SheetComponentProps {
  description?: string | undefined
  content?: ReactNode
}

//TODO: make sheet generic
function SheetComponent({ content, description }: SheetComponentProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu width={28} height={28} />
      </SheetTrigger>
      <SheetContent
        noBackdropBlur
        position="bottom"
        size="xl"
        className="rounded-2xl"
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        {content && content}

        <SheetFooter>
          <button>Save</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetComponent
