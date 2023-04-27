import { RefObject, useEffect, useRef, useState } from 'react'

const useIntersectionObserver = <T extends HTMLDivElement = HTMLDivElement>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] => {
  const containerRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const ref = containerRef.current
    const observer = new IntersectionObserver(callbackFunction, options)
    if (ref) observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}

export default useIntersectionObserver
