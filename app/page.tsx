// import Image from 'next/image'

import Header from '@components/compound/Header'

function HomePage() {
  return (
    <>
      <Header
        logo={<Header.Logo text="In-tuned" />}
        toggleTheme={<Header.ToggleTheme />}
      />
      <div>Home Page</div>
    </>
  )
}
export default HomePage
