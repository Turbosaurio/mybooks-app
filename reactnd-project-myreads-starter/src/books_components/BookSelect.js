import React from 'react'

export default function BookSelect(props){
	let {options} = props
	return (
		<div className="book-shelf-changer">
			<select>
				{options.map((option, index)=>(<option key={index}>{option}</option>))}
			</select>
		</div>
	)
}