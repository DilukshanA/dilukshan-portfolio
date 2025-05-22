import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Group } from "three"
import * as THREE from "three"

useGLTF.preload("/robot_playground.glb")

export default function Model() {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF("/robot_playground.glb")
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    const action = actions["Experiment"]
    if (action) {
      action.reset().play().setLoop(THREE.LoopRepeat, Infinity)
    }
  }, [actions])

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}
