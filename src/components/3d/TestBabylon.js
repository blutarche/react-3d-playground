/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import { useEffect, useRef } from 'react'

export const TestBabylon = () => {
  const canvasRef = useRef()
  const engineRef = useRef()

  useEffect(() => {
    engineRef.current = new BABYLON.Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true
    })
    const mainScene = new BABYLON.Scene(engineRef.current)
    // run the render loop
    const filePath = BABYLON.SceneLoader.Append(
      '3d/',
      'test-texture.gltf',
      mainScene,
      scene => {
        console.log('TCL: TestBabylon -> scene', scene)
        // do something with the scene
        mainScene.createDefaultCameraOrLight(true, true, true)
        engineRef.current.runRenderLoop(() => {
          console.log('render')
          mainScene.render()
        })
      }
    )
    const handleResize = () => {
      engineRef.current.resize()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <canvas
      ref={el => {
        canvasRef.current = el
      }}
    />
  )
}
