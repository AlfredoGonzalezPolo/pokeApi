import { FC, MouseEventHandler } from 'react';

interface Props {
  className: string;
  children?: any;
  disabled: boolean;
  onClick: MouseEventHandler;
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
