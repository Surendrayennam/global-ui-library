import React from 'react'

import { ExampleComponent, Button } from 'global-ui-library'
import 'global-ui-library/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <Button text="submit"></Button>
    </div>
  )
}

export default App
