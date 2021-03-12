/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const nav = [
  {
    title: `Blog`,
    slug: `https://jahde.substack.com/`,
  },
]

// type NavigationProps = {
//   nav: {
//     title: string
//     slug: string
//   }[]
// }

const Navigation = () => {
  const { basePath } = useMinimalBlogConfig()
  console.log('basePath', basePath)
  // debugger;

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {nav.map((item) => (
            <TLink key={item.slug} as={Link} activeClassName="active" to={item.slug}>
              {item.title}
            </TLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation