import { iconEmail } from '../../../shared/icons.constants';
import KitButton from '../KitButton';
import KitInput from '../KitInput';
import KitRadioButton from '../KitRadioButton';
import allKits from './all-kits.module.scss';
import KitCheckbox from '../KitCheckbox';
import KitHeart from '../KitHeart';

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
      <div className={allKits.allKits__block}>
        <KitInput label='Email' icon={iconEmail}/>
      </div>
      <div className={allKits.allKits__block}>
        <KitRadioButton idRadioButton="Test" radioName="test" title="Test_1"/>
        <KitRadioButton idRadioButton="Test2" radioName="test" title="Test_2"/>
      </div>
      <div className={allKits.allKits__block}>
        <KitCheckbox title="NTCC"/>
        <KitCheckbox />
      </div>
      <div className={allKits.allKits__block}>
        <KitHeart />
      </div>
    </div>
  )
}

export default AllKits;
