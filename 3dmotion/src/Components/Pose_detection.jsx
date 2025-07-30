// src/App.jsx
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Pose } from '@mediapipe/pose'
import { Camera as MediaPipeCamera } from '@mediapipe/camera_utils'


 function Pose_detection() {
    const mountRef = useRef(null)
    const videoRef = useRef(null)
    const [model, setModel] = useState(null)
    const boneMap = useRef({})
    const prevQuats = useRef({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color('red')

        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0, 1.6, 3)

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        mountRef.current.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true

        scene.add(new THREE.AmbientLight(0x404040))

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(1, 1, 1)
        scene.add(light)

        const loader = new GLTFLoader()
        try {
            loader.load('/model.glb', (gltf) => {
                const avatar = gltf.scene
                avatar.scale.set(1, 1, 1)

                // Center the model
                const box = new THREE.Box3().setFromObject(avatar)
                const center = new THREE.Vector3()
                box.getCenter(center)
                avatar.position.sub(center)
                avatar.position.y -= 0.6

                avatar.traverse((obj) => {
                    if (obj.isBone) {
                        boneMap.current[obj.name] = obj
                        prevQuats.current[obj.name] = obj.quaternion.clone()
                    }
                })

                scene.add(avatar)
                setModel(avatar)

                // Enable skeleton debug
                const helper = new THREE.SkeletonHelper(avatar)
                scene.add(helper)

                setLoading(false)
            })
        } catch (err) {
            console.error("Failed to load model:", err)
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            mountRef.current.removeChild(renderer.domElement)
        }
    }, [])

    const computeBoneQuaternion = (parentPos, jointPos, childPos) => {
        const v1 = new THREE.Vector3().subVectors(jointPos, parentPos).normalize()
        const v2 = new THREE.Vector3().subVectors(childPos, jointPos).normalize()
        const axis = new THREE.Vector3().crossVectors(v1, v2)
        const angle = Math.acos(THREE.MathUtils.clamp(v1.dot(v2), -1, 1))

        if (axis.lengthSq() < 1e-6 || isNaN(angle)) {
            return new THREE.Quaternion()
        }

        axis.normalize()
        return new THREE.Quaternion().setFromAxisAngle(axis, angle)
    }

    useEffect(() => {
        if (!videoRef.current || !model) return

        const pose = new Pose({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
        })

        pose.setOptions({
            modelComplexity: 2,
            smoothLandmarks: true,
            enableSegmentation: false,
            minDetectionConfidence: 0.7,
            minTrackingConfidence: 0.7,
        })

        pose.onResults((results) => {
            if (!results.poseLandmarks || !boneMap.current) return

            const lm = results.poseLandmarks
            const points = lm.map((p) => new THREE.Vector3(p.x, -p.y, -p.z))

            const bones = boneMap.current
            const prev = prevQuats.current

            const updateBone = (boneName, qTarget, lerpAlpha = 0.5) => {
                if (!bones[boneName] || !prev[boneName]) return
                prev[boneName].slerp(qTarget, lerpAlpha)
                bones[boneName].quaternion.copy(prev[boneName])
            }

            const hipCenter = new THREE.Vector3().addVectors(points[23], points[24]).multiplyScalar(0.5)
            const shoulderCenter = new THREE.Vector3().addVectors(points[11], points[12]).multiplyScalar(0.5)
            const neck = points[0]

            updateBone('mixamorigSpine', computeBoneQuaternion(hipCenter, shoulderCenter, neck))
            updateBone('mixamorigNeck', computeBoneQuaternion(shoulderCenter, neck, points[1]))

            updateBone('mixamorigLeftArm', computeBoneQuaternion(points[11], points[13], points[15]))
            updateBone('mixamorigLeftForeArm', computeBoneQuaternion(points[13], points[15], points[17]))

            updateBone('mixamorigRightArm', computeBoneQuaternion(points[12], points[14], points[16]))
            updateBone('mixamorigRightForeArm', computeBoneQuaternion(points[14], points[16], points[18]))

            updateBone('mixamorigLeftUpLeg', computeBoneQuaternion(points[23], points[25], points[27]))
            updateBone('mixamorigLeftLeg', computeBoneQuaternion(points[25], points[27], points[29]))

            updateBone('mixamorigRightUpLeg', computeBoneQuaternion(points[24], points[26], points[28]))
            updateBone('mixamorigRightLeg', computeBoneQuaternion(points[26], points[28], points[30]))

            updateBone('mixamorigHead', computeBoneQuaternion(points[0], points[1], points[2]))
        })

        try {
            const camera = new MediaPipeCamera(videoRef.current, {
                onFrame: async () => {
                    await pose.send({ image: videoRef.current })
                },
                width: 640,
                height: 480,

            })

            camera.start()

            // Force play in some browsers
            videoRef.current.play().catch((e) => console.warn('Video play failed:', e))

            return () => camera.stop()
        } catch (err) {
            console.error("Pose tracking error:", err)
        }
    }, [model])

    return (
        <>
            {loading && (
                <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow z-50">
                    Loading avatar...
                </div>
            )}
            <div ref={mountRef} className="w-screen h-screen" />
            <video
                ref={videoRef}
                className="fixed bottom-4 left-4 w-48 h-48 rounded-md border border-gray-300 shadow-lg" style={{ transform: 'scaleX(-1)' }}
                muted
                playsInline
            />
        </>
    )
}

export default Pose_detection