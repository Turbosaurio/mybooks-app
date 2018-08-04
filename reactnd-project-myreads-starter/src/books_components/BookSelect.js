import React from 'react'

export default function BookSelect(props){
	let {options, keyName} = props
	return (
		<div className="book-shelf-changer">
			<select>
				<option disabled>Move to...</option>
				{
					options.map((option, index) =>{
						if(option.keyName === keyName){
							return <option key={index} disabled>&#9755; {option.name}</option>
						} else {
							return <option key={index} onClick={() => {console.log(option.stateKey)}} >{option.name}</option>
						}
					})
				}
				<option>None</option>
			</select>
		</div>
	)
}