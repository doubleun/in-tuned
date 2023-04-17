import { ReactNode } from 'react'
import { Logo, ToggleTheme } from '@components/base'
import HeaderMenu from '@components/compound/HeaderMenu'

interface HeaderComponent {
  logo: ReactNode
  toggleTheme: ReactNode
}

const styles = {
  header:
    // 'sticky w-full h-16 border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900',
    'sticky w-full h-16 border-b border-b-slate-200 bg-white dark:border-0 dark:bg-transparent',
  nav: 'flex items-center mx-6 md:mx-14 w-auto h-full justify-between',
}

function Header({ logo, toggleTheme }: HeaderComponent) {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        {logo}
        <div>
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
Header.Logo = Logo
Header.ToggleTheme = ToggleTheme

// colors
// lightPrimary: #f8e1bc
// primary: #f3b756
// darkPrimary: #9d7340

// bg: #101219
// darkBg: #000000
