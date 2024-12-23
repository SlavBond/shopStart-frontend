import kitRadioButton from './radioButton.module.scss';

interface IKitRadioButton {
  idRadioButton: string;
  title: string;
}

const KitRadioButton = ({ idRadioButton, title }: IKitRadioButton) => {
  return (
    <div className={kitRadioButton.radioButton}>
      <input type='radio' id={`radio_${idRadioButton}`}/>
      <label
       htmlFor={`radio_${idRadioButton}`}
       className={kitRadioButton.radioButton__radioLabel}
      />
    </div>
  );
};

export default KitRadioButton;
