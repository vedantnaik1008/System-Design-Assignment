import { useState } from 'react';
import Toast from './Toast';

const LayoutFeedbackToast = () => {
    const [toast, setToast] = useState<{
        visible: boolean;
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
    }>({ visible: false, message: '', type: 'success' });

    const triggerToast = (
        message: string,
        type: 'success' | 'error' | 'info' | 'warning'
    ) => {
        setToast({ visible: true, message, type });
    };

    return (
        <section className='p-6 space-y-3'>
            <div className='flex flex-wrap gap-4'>
                <button
                    onClick={() =>
                        triggerToast(
                            'Action completed successfully!',
                            'success'
                        )
                    }
                    className='px-4 py-2 bg-green-600 text-white rounded'>
                    Show Success
                </button>

                <button
                    onClick={() =>
                        triggerToast('Something went wrong.', 'error')
                    }
                    className='px-4 py-2 bg-red-600 text-white rounded'>
                    Show Error
                </button>

                <button
                    onClick={() =>
                        triggerToast('Here is some info for you.', 'info')
                    }
                    className='px-4 py-2 bg-blue-600 text-white rounded'>
                    Show Info
                </button>

                <button
                    onClick={() =>
                        triggerToast('Be careful with this action.', 'warning')
                    }
                    className='px-4 py-2 bg-yellow-600 text-black rounded'>
                    Show Warning
                </button>
            </div>

            {toast.visible && (
                <div className='fixed bottom-5 right-5 z-50'>
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() =>
                            setToast((prev) => ({ ...prev, visible: false }))
                        }
                    />
                </div>
            )}
        </section>
    );
};

export default LayoutFeedbackToast;
