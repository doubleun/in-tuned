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
  dataTestId?: string | undefined
  description?: string | undefined
  content?: ReactNode
}

//TODO: make sheet generic
function SheetComponent({
  dataTestId,
  content,
  description,
}: SheetComponentProps) {
  return (
    <Sheet data-test-id={dataTestId}>
      <SheetTrigger asChild>
        <Menu width={28} height={28} />
      </SheetTrigger>
      <SheetContent
        noBackdropBlur
        position="bottom"
        size="xl"
        className="rounded-2xl"
        data-test-id={`${dataTestId}-content`}
      >
        <SheetHeader data-test-id={`${dataTestId}-header`}>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        {content && content}

        {/* <SheetFooter data-test-id={`${dataTestId}-footer`}>
          <button>Save</button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

export default SheetComponent
