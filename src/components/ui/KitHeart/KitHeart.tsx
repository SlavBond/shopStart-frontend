import kitHeartCheck from './kitHeart.module.scss';

const KitHeart = () => {
  return (
    <label className={kitHeartCheck.kitHeart}>
      <input
        type='checkbox'
        className={kitHeartCheck.kitHeart__input}
      />
      <span className={kitHeartCheck.kitHeart__simulation}></span>
    </label>
  )
}

export default KitHeart