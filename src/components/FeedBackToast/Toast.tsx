import { type FC, useState, useEffect } from 'react';
import clsx from 'clsx';

type ToastProps = {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    onClose: () => void;
};

const Toast: FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
        <div
            role='alert'
            className={clsx(
                'p-4 rounded-md text-white shadow-lg',
                type === 'success' && 'bg-green-500',
                type === 'error' && 'bg-red-500',
                type === 'info' && 'bg-blue-500',
                type === 'warning' && 'bg-yellow-500'
            )}>
            {message}
        </div>
    );
};

export default Toast;
