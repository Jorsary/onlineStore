import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props:any) => (
  <ContentLoader 
    className="border rounded-3xl"
    speed={0.5}
    width={224}
    height={282}
    viewBox="0 0 224 282"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="28" y="28" rx="5" ry="5" width="32" height="32" />
    <rect x="61" y="28" rx="5" ry="5" width="100" height="130" /> 
    <rect x="28" y="165" rx="5" ry="5" width="166" height="45" /> 
    <rect x="28" y="217" rx="5" ry="5" width="41" height="37" /> 
    <rect x="156" y="217" rx="5" ry="5" width="39" height="35" />
  </ContentLoader>
)

export default MyLoader