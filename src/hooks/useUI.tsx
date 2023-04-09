import { UiContext } from '../context/ui'
import { useContext } from 'react'

export const useUI = () => {
  const context = useContext(UiContext)

  if (context === undefined) {
    throw new Error('useUI must be used within a UiProvider')
  }

  return context
}
