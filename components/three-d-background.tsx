"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={3.5}>
      <icosahedronGeometry args={[1, 3]} />
      <meshBasicMaterial color="#6C63FF" wireframe opacity={0.08} transparent />
    </mesh>
  )
}

function FloatingParticles() {
  const count = 50
  const mesh = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 5],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    const dummy = new THREE.Object3D()
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed
      dummy.position.set(
        particle.position[0] + Math.sin(t) * 0.5,
        particle.position[1] + Math.cos(t) * 0.5,
        particle.position[2],
      )
      dummy.scale.setScalar(particle.scale)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#6C63FF" transparent opacity={0.4} />
    </instancedMesh>
  )
}

export default function ThreeDBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a0a0f"]} />

      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#6C63FF" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#ff6b6b" />

      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
      <AnimatedSphere />
      <FloatingParticles />
    </Canvas>
  )
}
