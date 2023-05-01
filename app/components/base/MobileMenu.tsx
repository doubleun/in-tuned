'use client'

import { Sheet } from '@components/compound'
import { HeaderMenuList } from '.'
import { useState } from 'react'

const styles = {
  container: 'flex md:hidden text-3xl',
}

function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.container} data-test-id="mobile-menu-container">
      <Sheet
        open={open}
        onOpenChange={setOpen}
        dataTestId="mobile-menu-sheet-container"
        content={
          <HeaderMenuList
            direction="col"
            showToggleLabel
            className="my-2 py-2 border-t-2 border-t-slate-900 dark:border-t-slate-100"
            setOpen={setOpen}
          />
        }
      />
    </div>
  )
}

export default MobileMenu
