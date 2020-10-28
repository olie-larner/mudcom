import React from "react"
import loadable from '@loadable/component'
const App = loadable(() => import('./App'))

const IndexPage = () => (
   <App />
)

export default IndexPage
