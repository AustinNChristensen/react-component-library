import React, { ReactElement } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
    children: ReactElement;
    secondary?: boolean;
    disabled?: boolean;
}
export const Button = ({ children,
    secondary = false,
    disabled = false }: IButtonProps): ReactElement => {
    const classes = [
        styles.btn,
        !secondary && styles.primary,
        secondary && styles.secondary,
        disabled && styles.btnDisabled
    ].filter(Boolean);
    return (
        <button
            className={classes.join(' ')}
            disabled={disabled}
        >
            <span className={styles.text}>{children}</span>
        </button>
    );
};