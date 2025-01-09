import kitCheckboxModule from './kitCheckbox.module.scss';

interface KitCheckboxProps {
  title?: string;
}

const KitCheckbox = ({ title }: KitCheckboxProps) => {
  return (
    <label
      className={kitCheckboxModule.checkbox}
    >
      { title &&
          <span className={kitCheckboxModule.checkbox__title}>
            {title}
          </span>
      }
      <input
        type="checkbox"
        className={kitCheckboxModule.checkbox__input}
      />
      <span
        className={kitCheckboxModule.checkbox__emulator}
      />
    </label>
  )
}

export default KitCheckbox;
