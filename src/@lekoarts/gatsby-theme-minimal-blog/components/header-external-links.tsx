/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link as TLink } from "gatsby"
import { 
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaMedium 
} from 'react-icons/fa'

const otherExternalLinks = [
  {
    name: `Twitter`,
    url: `https://twitter.com/jahde`,
    icon: FaTwitterSquare,
  },
  {
    name: `Instagram`,
    url: `https://www.instagram.com/jahde441`,
    icon: FaInstagramSquare,
  },
  {
    name: `Medium`,
    url: `https://jahde.medium.com`,
    icon: FaMedium,
  },
  {
    name: `Github`,
    url: `https://github.com/jahde`,
    icon: FaGithubSquare,
  },
  {
    name: `LinkedIn`,
    url: `https://www.linkedin.com/in/jahde`,
    icon: FaLinkedin,
  },
]

const HeaderExternalLinks = () => {
  return (
    <React.Fragment>
      {otherExternalLinks && otherExternalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {otherExternalLinks.map((link) => (
            <TLink key={link.url} href={link.url} target="_blank">
              <link.icon/>
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks