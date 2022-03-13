import { FC } from "react"
import Image from 'next/image'

type Props = {
	title: string,
	image?: string,
	width?: number,
	height?: number
}

const Project: FC<Props> = ({ title, image, width, height, children }) => {
	return (
		<div className="w-full md:w-3/5 h-full flex flex-col md:flex-row justify-center items-center">
			<div className="w-full md:w-1/3 h-full flex justify-center items-center">
				{image && <Image src={image} width={width} height={height}></Image>}
				{!image && <h1>🚨Work in Progress🚨</h1>}
			</div>
			<div className="w-full md:w-2/3 h-full p-10">
				<h1 className="text-2xl font-bold">{title}</h1>
				{children}
			</div>
		</div>
	)
}

export default Project