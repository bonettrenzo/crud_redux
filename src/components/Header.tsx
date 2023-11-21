import { Metric } from "@tremor/react";
import React from "react";

const Header = () => {
	return (
		<>
			<div className=" w-full flex justify-center items-center mt-4 p-4">
				<div className=" w-4/5 backdrop-blur-xl fixed z-10 rounded-full">
					<Metric className="text-center p-4 text-blue-500 ">
						Crud con Redux
					</Metric>
				</div>
			</div>
		</>
	);
};

export default Header;

/* 
<Metric className="text-center p-4 text-blue-500 ">Crud con Redux</Metric> */
