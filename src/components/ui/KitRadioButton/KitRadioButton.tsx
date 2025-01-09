import kitRadioButton from './kitRadioButton.module.scss';

interface IKitRadioButton {
  idRadioButton: string;
  radioName: string;
  title?: string;
}

const KitRadioButton = ({ idRadioButton, title, radioName }: IKitRadioButton) => {
  return (
    <label
      className={kitRadioButton.radioButton}
      htmlFor={`radio_${idRadioButton}`}
    >
      <input
        type='radio'
        id={`radio_${idRadioButton}`}
        name={`radio_${radioName}`}
      />
      <span className={kitRadioButton.radioButton__emulator}></span>
      <span className={kitRadioButton.radioButton__title}>{title}</span>
    </label>
  );
};

export default KitRadioButton;
