import { useState } from 'react';

const Dropdown = ({ title, text, type = 'large' }) => {
	const [isOpen, setIsOpen] = useState(false);
	const img = `<i class="fas fa-chevron-up dropdown__ingredients_box-arrow"></i>`

	return (
		<article
			className={'dropdown ' + (type === 'large' ? 'large' : 'small') + (isOpen ? '' : ' closed')}
			onClick={() => {
				setIsOpen(!isOpen)
			}}>
			<div className='dropdown__label'>
				<h3>{title}</h3>
				<img
					className={isOpen ? 'arrow_down' : ''}
					src={img}
					alt='chevron si on ouvre ou ferme le dropdown'>
                         
                    </img>
			</div>
			<div className='dropdown__content'>{text}</div>
		</article>
	);
};

export default Dropdown;