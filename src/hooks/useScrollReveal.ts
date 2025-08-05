import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    })

    // Initial setup
    const setupScrollReveal = () => {
      const elements = document.querySelectorAll(".scroll-reveal")
      elements.forEach((el) => observer.observe(el))
    }

    // Setup immediately
    setupScrollReveal()

    // Also setup after a short delay to catch dynamically loaded content
    const timeoutId = setTimeout(setupScrollReveal, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])
}