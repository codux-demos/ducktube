import styles from './filters.module.scss';
import classNames from 'classnames';

export interface FiltersProps {
    className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={classNames(styles.btn, styles.active)}>All</button>
            <button className={styles.btn}>AI</button>
            <button className={styles.btn}>Computer Science</button>
            <button className={styles.btn}>News</button>
            <button className={styles.btn}>Podcasts</button>
            <button className={styles.btn}>Editing</button>
            <button className={styles.btn}>Live</button>
            <button className={styles.btn}>Mixes</button>
            <button className={styles.btn}>Music</button>
            <button className={styles.btn}>Gaming</button>
            <button className={styles.btn}>Microsoft Windows</button>
            <button className={styles.btn}>Apple</button>
            <button className={styles.btn}>Comedy</button>
            <button className={styles.btn}>Action</button>
        </div>
    );
};
