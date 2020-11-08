import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPizza = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="300" rx="0" ry="0" width="322" height="16" />
    <rect x="4" y="329" rx="13" ry="13" width="266" height="67" />
    <rect x="144" y="365" rx="0" ry="0" width="67" height="0" />
    <rect x="12" y="414" rx="0" ry="0" width="96" height="41" />
    <rect x="146" y="409" rx="20" ry="20" width="126" height="47" />
  </ContentLoader>
)

export default LoaderPizza