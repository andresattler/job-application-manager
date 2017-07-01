import { WDS_PORT } from '../shared/config'

const renderApp = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:${WDS_PORT}/dist/bundle.js"></script>
  </body>
</html>
`
export default renderApp
