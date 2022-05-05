import React from "react";

const Note = ({ text, editedDate, title }) => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-6 m-4 hover:scale-105 transition duration-500">
			<h4 className="text-lg font-semibold mb-1 truncate">{title}</h4>
			<div className="border-b pt-2 w-full mb-4" />
			<p className="text-gray-700 text-sm">{text}</p>
			<p className="text-gray-400 text-xs mt-4">
				Last edited on: {editedDate}
			</p>
		</div>
	);
};

export default Note;