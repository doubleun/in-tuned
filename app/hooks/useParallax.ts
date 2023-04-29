import { MotionValue, useTransform } from 'framer-motion'

const useParallax = (
  value: MotionValue<number>,
  startAnimationAt: number,
  endAnimationAt: number,
  offsetStartAt: number,
  offsetEndAt: number
) => {
  return useTransform(
    value,
    [startAnimationAt, endAnimationAt],
    [offsetEndAt, offsetStartAt]
  )
}

export default useParallax
