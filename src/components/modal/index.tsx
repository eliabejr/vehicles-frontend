// libraries
import React from 'react';

// js
import closeIcon from '@/images/close-icon.png';
import { IconWrapper } from './modal-styles';

// components
import { Row } from '@/components/positioning';

// interfaces
interface IconCloseProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

// components
export const IconClose: React.FC<IconCloseProps> = ({
    onClick,
}) => (
    <Row justifyContent="flex-end">
        <IconWrapper src={closeIcon} onClick={onClick} />
    </Row>
);
