import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

const Rose = () => {
	const { scene } = useGLTF("/rose.glb"); // Load rose model
	const roseRef = useRef<THREE.Group>(null);
	const [bloomed, setBloomed] = useState(false);

	useEffect(() => {
		if (roseRef.current) {
			gsap.to(roseRef.current.scale, {
				x: 1,
				y: 1,
				z: 1,
				duration: 2,
				ease: "power2.out",
				onComplete: () => setBloomed(true),
			});
		}
	}, []);

	return <primitive ref={roseRef} object={scene} scale={0.1} />;
};

const Petal = () => {
	const petalRef = useRef<THREE.Mesh>(null);

	useEffect(() => {
		if (petalRef.current) {
			gsap.to(petalRef.current.position, {
				y: "-=5",
				x: `+=${Math.random() * 2 - 1}`,
				z: `+=${Math.random() * 2 - 1}`,
				duration: 4 + Math.random() * 2,
				repeat: -1,
				ease: "power1.in",
			});
		}
	}, []);

	return (
		<mesh
			ref={petalRef}
			position={[Math.random() - 0.5, 2, Math.random() - 0.5]}
		>
			<circleGeometry args={[0.2, 32]} />
			<meshStandardMaterial color="red" />
		</mesh>
	);
};

const PetalRain = () => {
	return (
		<>
			{Array.from({ length: 20 }).map((_, i) => (
				<Petal key={i} />
			))}
		</>
	);
};

const RoseScene = () => {
	return (
		<Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 5, 5]} intensity={1} />
			<Rose />
			<PetalRain />
		</Canvas>
	);
};

export default RoseScene;
