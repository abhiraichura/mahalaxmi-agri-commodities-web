import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Custom shader material for organic flowing mesh
    const vertexShader = `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;

      void main() {
        vUv = uv;
        vec3 pos = position;
        float elevation = sin(pos.x * 2.0 + uTime * 0.3) * 0.15
                        + sin(pos.y * 3.0 + uTime * 0.2) * 0.1
                        + sin((pos.x + pos.y) * 1.5 + uTime * 0.4) * 0.08;
        pos.z += elevation;
        vElevation = elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `

    const fragmentShader = `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;

      void main() {
        vec3 pink = vec3(0.929, 0.094, 0.475); // #ed1879
        vec3 gold = vec3(0.788, 0.635, 0.153);  // #c9a227
        vec3 white = vec3(0.97, 0.97, 0.97);
        vec3 cream = vec3(0.95, 0.94, 0.92);

        float noise = sin(vUv.x * 10.0 + uTime * 0.1) * sin(vUv.y * 10.0 + uTime * 0.15) * 0.5 + 0.5;

        vec3 color = mix(cream, white, vUv.y);
        color = mix(color, pink, smoothstep(0.3, 0.7, vElevation + noise * 0.1) * 0.04);
        color = mix(color, gold, smoothstep(0.5, 0.9, vElevation + noise * 0.15) * 0.03);

        float grid = step(0.98, fract(vUv.x * 40.0)) * 0.02 + step(0.98, fract(vUv.y * 40.0)) * 0.02;
        color += grid * vec3(0.9, 0.9, 0.9);

        gl_FragColor = vec4(color, 0.6);
      }
    `

    const geometry = new THREE.PlaneGeometry(16, 10, 128, 128)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    camera.position.z = 3.5

    // Floating particles
    const particleCount = 80
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(particleCount * 3)
    const pSizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 12
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4
      pSizes[i] = Math.random() * 2 + 0.5
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('size', new THREE.BufferAttribute(pSizes, 1))

    const pMat = new THREE.PointsMaterial({
      color: '#ed1879',
      size: 0.04,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener('mousemove', onMouseMove)

    let raf: number
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      material.uniforms.uTime.value = elapsed

      mesh.rotation.x = mouseY * 0.02
      mesh.rotation.y = mouseX * 0.02

      particles.rotation.y = elapsed * 0.02
      particles.rotation.x = Math.sin(elapsed * 0.1) * 0.05

      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      pGeo.dispose()
      pMat.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
