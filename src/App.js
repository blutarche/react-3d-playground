/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useState } from 'react'

import { TestThreeJs } from 'components/3d/TestThreeJs'
import { TestBabylon } from 'components/3d/TestBabylon'

const Button = styled.div`
  padding: 16px 32px;
  border: 1px solid #ddd;
  margin: 16px;
`

export const App = () => {
  const [showBabylon, setShowBabylon] = useState(true)
  return (
    <div
      css={css`
        canvas {
          width: 100vw;
          height: calc(100vh - 80px);
        }
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <Button onClick={() => setShowBabylon(true)}>Babylon.js</Button>
        <Button onClick={() => setShowBabylon(false)}>Three.js</Button>
      </div>
      {showBabylon ? <TestBabylon /> : <TestThreeJs />}
    </div>
  )
}
