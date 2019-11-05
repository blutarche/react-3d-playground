/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { TestModel } from 'components/3d/TestModel'
import { Control3D } from 'components/3d/Control3D'
import { Color } from 'three'

export const App = () => {
  return (
    <div
      css={css`
        canvas {
          height: 100vh;
        }
      `}
    >
      <Canvas
        style={{
          background:
            'radial-gradient(at 50% 70%, #00000033 20%, #00000000 60%)'
        }}
        gl={{
          gammaFactor: 2.2,
          gammaOutput: true,
          physicallyCorrectLights: true
        }}
      >
        <ambientLight intensity={0.3} color={new Color('404040')} />
        {/* <directionalLight
          intensity={2}
          position={[0, 15, 0]}
          color={new Color('404040')}
        /> */}
        <hemisphereLight
          intensity={2}
          position={[0, 1, 0]}
          color={new Color('404040')}
        />
        <Suspense fallback={null}>
          <TestModel />
        </Suspense>
        <Control3D
          autoRotate
          enablePan={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}
