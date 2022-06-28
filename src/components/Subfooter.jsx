import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Subfooter() {
  return (
         
    <div className="subfooter">
    <div className="bloque-social">
      <InstagramIcon />
      <p>Instagram</p>
    </div>
    <div className="bloque-social">
      <FacebookIcon />
      <p>Facebook</p>
    </div>
    <div className="bloque-social">
      <TwitterIcon />
      <p>Twitter</p>
    </div>
    <div className="bloque-social">
      <YouTubeIcon />
      <p>YouTube</p>
    </div>
    <div className="bloque-social">
      <LinkedInIcon />
      <p>LinkedIn</p>
    </div>
  </div>
  )
}

export default Subfooter