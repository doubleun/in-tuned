import { GlowIcon, Typography } from '@components/base'

export function FooterComponent() {
  return (
    <article
      data-test-id="home-footer-container"
      className="custom-container flex w-full justify-between py-4"
    >
      {/* Left side - address text */}
      <Typography
        dataTestId="home-footer-text"
        text="In-Tuned® ----- Bangkok, Thailand"
        typo="h3"
        size="xs"
      />
      {/* Right side - social links */}
      <div className="flex items-center gap-3">
        <GlowIcon
          icon={'Youtube'}
          size={18}
          link="https://www.youtube.com/@In-tuned"
          hoverClassName="group-hover:bg-pink-600"
        />
        <GlowIcon
          icon={'Mail'}
          size={16}
          link="mailto:intuned.inspired@gmail.com"
          hoverClassName="group-hover:bg-purple-600"
        />
        <GlowIcon
          icon={'Linkedin'}
          size={16}
          link="https://www.linkedin.com/in/wachirachai-nitsomboon-b835b9210/"
        />
      </div>
    </article>
  )
}
export default FooterComponent
