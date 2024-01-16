import { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  className: string;
  children?: ReactNode;
  disabled: boolean;
  onClick?: MouseEventHandler;
}
const PaginationButton: FC<Props> = ({
  className,
  children,
  disabled,
  onClick,
}) => {
  return (
    <li>
      <button className={className} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default PaginationButton;
