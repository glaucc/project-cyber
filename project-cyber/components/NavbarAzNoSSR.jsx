import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('../components/NavbarAz'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}