import React from 'react'

export default function BookSelect(props){
	let {options} = props
	return (
		<div className="book-shelf-changer">
			<select>
				<option disabled>Move to...</option>
				{options.map((option, index)=>(<option key={index} onClick={() => {console.log(option.stateKey)}}>{option.name}</option>))}
				<option>None</option>
			</select>
		</div>
	)
}