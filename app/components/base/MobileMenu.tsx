'use client'

import { HeaderMenu, Sheet } from '@components/compound'

const styles = {
  container: 'flex md:hidden text-3xl',
}

function MobileMenu() {
  return (
    <div className={styles.container}>
      <Sheet
        content={
          <HeaderMenu.HeaderMenuList
            direction="col"
            showToggleLabel
            className="my-2 py-2 border-t-2"
          />
        }
      />
    </div>
  )
}

export default MobileMenu
