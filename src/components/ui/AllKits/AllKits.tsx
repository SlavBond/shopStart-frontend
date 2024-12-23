import { iconEmail } from '../../../shared/icons.constants';
import KitButton from '../KitButton';
import KitInput from '../KitInput';
import KitRadioButton from '../KitRadioButton';
import allKits from './all-kits.module.scss';

const AllKits = () => {
  return (
    <div className={allKits.allKits}>
      <div className={allKits.allKits__button}>
        <p>BUTTONS</p>
        <KitButton>Show more</KitButton>
        <KitButton theme="light">Show more</KitButton>
        <KitButton radius="small">Show more</KitButton>
        <KitButton theme="light" radius="small">Show more</KitButton>
      </div>
      <div>
        <KitInput label='Email' icon={iconEmail}/>
      </div>
      <div>
        <KitRadioButton />
      </div>
    </div>
  )
}

export default AllKits;
