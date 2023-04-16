import { roboto as font } from '@fonts'
import clsx from 'clsx'
import Image from 'next/image'

interface LogoComponent {
  icon?: string
  text?: string
}

type GetTwLogoProps = Omit<LogoComponent, 'text'>

const getTwLogo = ({ icon }: GetTwLogoProps) => ({
  container: 'flex items-center justify-between',
  iconContainer: 'relative flex-1',
  text: clsx(['font-bold flex-1 text-center dark:text-slate-50'], {
    ['hidden']: icon,
    ['sm:inline-block']: icon,
    ['text-3xl']: !icon,
  }),
})

// scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"

function Logo({ icon, text }: LogoComponent) {
  const styles = getTwLogo({ icon })

  return (
    <div className={styles.container}>
      {icon && (
        <div className={styles.iconContainer}>
          <Image src="/logo.svg" alt="logo" width={70} height={70} />
        </div>
      )}
      {text && <h1 className={clsx([font.className, styles.text])}>{text}</h1>}
    </div>
  )
}
export default Logo
