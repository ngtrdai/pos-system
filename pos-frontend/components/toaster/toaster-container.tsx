import useWindowSize from '@/utils/use-window-size'
import { Toaster } from 'react-hot-toast'

const ToasterContainer = () => {
  const { isMobile } = useWindowSize()
  return (
    <Toaster
      position={isMobile ? 'top-center' : 'bottom-right'}
      containerClassName={'mt-16 desktop:my-6'}
      toastOptions={{
        style: { maxWidth: '360px' },
      }}
    />
  )
}

export default ToasterContainer
