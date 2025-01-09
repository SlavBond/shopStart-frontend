
import { classNames } from '../../../shared/helpers/classNames.helper';
import button from './button.module.scss';

interface IButton {
	theme?: 'dark' | 'light',
	disabled?: boolean,
	radius?: 'small' | 'big',
	children: React.ReactNode;
}

const KitButton = ({ theme = 'dark', disabled = false, radius ='big', children }: IButton) => {

  const buttonClass = classNames(button['kit-button'], {
    [button[`kit-button_theme-${theme}`]]: !!theme,
    [button[`kit-button_radius-${radius}`]]: !!radius,
    [button['kit-button_disabled']]: disabled,
  });

  return (
    <div className={buttonClass}>
      {children}
    </div>
  )
}

export default KitButton;