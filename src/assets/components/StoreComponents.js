/** @format */

import { Store } from "../styled";
import { images } from "./ImageComponents";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function StoreComponents() {
	const store = images.map((item) => (
		<Store key={item.id}>
			<div className='header-store-box'>
				<div className='text-store'>
					<h3>NEW</h3>
				</div>
				<AiOutlineHeart style={{ margin: 5 }} size={25} />
			</div>
			<div className='photo-store'>
				<img src={item.image} alt={item.name} />
			</div>
			<div className='footer-store'>
				<h3>{item.name}</h3>
				<span>{item.value}</span>
			</div>
		</Store>
	));
	return <>{store}</>;
}
export default StoreComponents;
