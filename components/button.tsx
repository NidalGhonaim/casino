"use client";

import { isValidElement, MouseEvent, ReactElement, ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import Link from "next/link";
import IconDice from "./icons/icon-dice";

const cx = classNames.bind(styles);

type ButtonProps = {
  link?: boolean;
  href?: string;
  openInNewWindow?: boolean;
  formSubmit?: boolean;
  formSubmitLabel?: string;
  secondary?: boolean;
  iconOnly?: boolean;
  active?: boolean;
  iconOnlyOnMobile?: boolean;
  stretch?: boolean;
  display?: boolean;
  className?: string;
  icon?: ReactElement;
  children?: ReactNode;
  title?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  submit?: boolean;
};

const Button = ({
  link = false,
  href = "",
  openInNewWindow = false,
  formSubmit,
  formSubmitLabel,
  secondary = false,
  iconOnly = false,
  active = false,
  iconOnlyOnMobile = false,
  stretch = false,
  display = true,
  className,
  icon: Icon,
  children,
  title,
  onClick,
  onMouseDown,
  loading = false,
  disabled = false,
  submit,
}: ButtonProps) => {
  if (!display) return null;

  // conditional class names
  const classNames = cx(
    {
      [styles.button]: true,
      [styles.secondary]: secondary,
      [styles.stretch]: stretch,
      [styles.loading]: loading,
      [styles.iconOnly]: iconOnly,
      [styles.active]: active,
      [styles.iconOnlyOnMobile]: iconOnlyOnMobile,
    },
    className
  );

  const getIcon = () => {
    if (loading) return <IconDice />;
    if (isValidElement(Icon)) return Icon;
    // if (typeof Icon === "function") return <Icon />;
    return null;
  };

  if (link)
    return (
      <Link
        className={classNames}
        href={href}
        title={title}
        data-no-dnd="true"
        target={openInNewWindow ? "_blank" : "_self"}
        rel={openInNewWindow ? "noopener noreferrer" : ""}
      >
        <div className={styles.content}>
          {getIcon()} <div className={styles.label}>{children}</div>
        </div>
      </Link>
    );

  if (formSubmit)
    return (
      <div className={styles.submitWrapper}>
        <input
          className={classNames}
          type="submit"
          value={formSubmitLabel}
          disabled={loading || disabled}
        />
        <div className={styles.content}>
          {getIcon()} <div className={styles.label}>{children}</div>
        </div>
      </div>
    );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    onMouseDown?.(event);
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={classNames}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      disabled={loading || disabled}
      title={title}
      data-no-dnd="true"
    >
      <div className={styles.content}>
        {getIcon()}{" "}
        {!iconOnly && <div className={styles.label}>{children}</div>}
      </div>
    </button>
  );
};

export default Button;
