import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return observer
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = observeElements()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}