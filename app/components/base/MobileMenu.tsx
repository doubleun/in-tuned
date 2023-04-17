import { HeaderMenu, Sheet } from '@components/compound'

const styles = {
  container: 'flex md:hidden text-3xl',
}

function MobileMenu() {
  return (
    <div className={styles.container} data-test-id="mobile-menu-container">
      <Sheet
        dataTestId="mobile-menu-sheet-container"
        content={
          <HeaderMenu.HeaderMenuList
            direction="col"
            showToggleLabel
            className="my-2 py-2 border-t-2 border-t-slate-900 dark:border-t-slate-100"
          />
        }
      />
    </div>
  )
}

export default MobileMenu
