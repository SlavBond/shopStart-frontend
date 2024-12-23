import { InputHTMLAttributes } from 'react';
import input from './input.module.scss'

interface KitInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string,
  icon?: React.ReactNode;
}

const KitInput = ({ label, icon, onChange }: KitInputProps) => {

  return (
		<div className={input['kit-input']}>
			<input
				type='text'
				className={input['kit-input__input']}
				onChange={onChange}
				required
			/>
			<div className={input['kit-input__icon']}>{icon}</div>
			<label className={input['kit-input__label']}>{label}</label>
			<span className={input['kit-input__underline']} />
  	</div>
  )
}

export default KitInput;

// const KitInput = () => {

//   return (
// 		<div className={input['kit-input']}>
// 			<div className={input['kit-input__wrapper']}>
// 				<div className={input['kit-input__icon']}>
// 					{iconEmail}
// 				</div>
// 				<div className={input['kit-input__block']}>
// 					<input type="text" className={input['kit-input__input']} required/>
// 					<label className={input['kit-input__label']}>Email</label>
// 				</div>
// 				<span className={input['kit-input__underline']} />
// 			</div>
//   	</div>
//   )
// }

// export default KitInput;