import { useParams } from 'react-router-dom'
import Iframe from 'react-iframe'
// const iframe =
// '<iframe  style="width: 100%; height: 100vh " scrolling="no" title="fx." src=" http://pratikdev.net"</iframe>'
const LandingPages = () => {
  const { name: s } = useParams()
  console.log(s)
  return (
    <div style={{ position: 'relative', width: '100%', paddingTtop: '56.25%' }}>
      {/* <div dangerouslySetInnerHTML={{ __html: iframe }} /> */}
      {/* <iframe title='g' url='http://pratikdev.net' /> */}
      <Iframe
        styles={{ height: '100vh' }}
        url='http://pratikdev.net'
        zIndex='100'
        position='absolute'
        // top={0}
        width='100%'
        // height='100vh'
        id='myId'
        className='myClassname'
        display='initial'
      />
    </div>
  )
}
export default LandingPages
