/** @format */
import React from "react";
import tenis1 from "../image/nike1.png";
import tenis2 from "../image/nike2.png";
import tenis3 from "../image/nike3.png";
import tenis4 from "../image/nike4.png";
import tenis5 from "../image/nike5.png";
import tenis6 from "../image/nike6.png";
import tenis7 from "../image/nike7.png";
import { Palet } from "../styled";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const images = [
	{
		id: 1,
		image: tenis1,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#C70039",
		footer: "icon-palet",
	},
	{
		id: 2,
		image: tenis5,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#40128B",
		footer: "icon-palet",
	},
	{
		id: 3,
		image: tenis2,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#FF0060",
		footer: "icon-palet",
	},
	{
		id: 4,
		image: tenis3,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#414141",
		footer: "icon-palet",
	},
	{
		id: 5,
		image: tenis4,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#FF5F9E",
		footer: "icon-palet",
	},
	{
		id: 6,
		image: tenis6,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#393E46",
		footer: "icon-palet",
	},
	{
		id: 7,
		image: tenis7,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130,00",
		background: "#FFA41B",
		footer: "icon-palet",
	},
];

function ImageComponents() {
	const MainPaletObj = images.map((item) => (
		<Palet key={item.id} style={{ background: item.background }}>
			<div className='header-palet'>
				<div className='text-palet'>
					<h3 className='title-palet'>{item.marca}</h3>
					<p className='name-palet'>{item.name}</p>
					<span className='value-palet'>{item.value}</span>
				</div>
				<div className='btn-heart'>
					<AiOutlineHeart size={30} />
				</div>
			</div>
			<div className='tenis-palet'>
				<img src={item.image} alt={item.name} />
			</div>
			<div className='footer-palet'>
				<BsFillArrowRightCircleFill className={item.footer} size={25} />
			</div>
		</Palet>
	));
	return <>{MainPaletObj}</>;
}

export default ImageComponents;
