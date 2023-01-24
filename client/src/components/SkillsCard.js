import styles from './skills.module.scss';

const SkillsCard = props => {
  return (
    <div className={styles.skills__card}>
      <img src={props.icons} alt="icon" />
      <h3>{props.skills}</h3>
    </div>
  );
};
export default SkillsCard;
