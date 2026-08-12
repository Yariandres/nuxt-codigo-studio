/**
 * Contact-modal open/close state.
 *
 * Shared, keyed singleton so the header mail icon (both locales) and the globally
 * mounted <ContactModal> (app.vue) react to the same ref:
 *
 *   const { open } = useContact()   // header button
 *   const { isOpen, close } = useContact()  // modal
 */
export function useContact() {
  const isOpen = useState<boolean>('contact-open', () => false)
  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  return { isOpen, open, close }
}
