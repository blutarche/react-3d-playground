import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import testTextureGLTF from 'files/3d/test-texture.gltf'

export const TestModel = props => {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, testTextureGLTF, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })
  console.log('TCL: gltf', gltf)

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <object3D
          name="Light"
          position={[4.076245307922363, 5.903861999511719, -1.0054539442062378]}
          rotation={[
            1.8901259643076738,
            0.8805683470227423,
            -2.045215994363619
          ]}
        />
        <object3D
          name="Camera"
          position={[7.358891487121582, 4.958309173583984, 6.925790786743164]}
          rotation={[
            1.2420707302048006,
            0.32996876609352715,
            -0.7597118623571987
          ]}
        />
        <mesh name="Cube" position={[0, -0.7929978966712952, 0]}>
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[3].material}
            name="Cube Image Texture"
          />
        </mesh>
        <mesh name="Sphere" position={[0, 1.2070021629333496, 0]}>
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[4].material}
            name="Sphere Image Texture"
          />
        </mesh>
      </scene>
    </group>
  )
}
