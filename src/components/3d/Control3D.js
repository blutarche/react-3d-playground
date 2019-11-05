import React, { useRef } from 'react'
import { useFrame, useThree, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })
export const Control3D = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return (
    <orbitControls
      ref={el => {
        ref.current = el
      }}
      args={[camera, gl.domElement]}
      {...props}
    />
  )
}
