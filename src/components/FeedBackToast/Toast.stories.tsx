import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
    title: 'Components/Toast',
    component: Toast,
    argTypes: {
        message: { control: 'text' },
        type: {
            control: 'radio',
            options: ['success', 'error', 'info', 'warning']
        },
        duration: { control: 'number' },
        onClose: { action: 'closed' }
    }
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const InfoToast: Story = {
    args: {
        message: 'Here is some information for you.',
        type: 'info',
        duration: 3000
    }
};

export const WarningToast: Story = {
    args: {
        message: 'Be careful! Something might need your attention.',
        type: 'warning',
        duration: 3000
    }
};


export const SuccessToast: Story = {
    args: {
        message: 'Your action was successful!',
        type: 'success',
        duration: 3000
    }
};

export const ErrorToast: Story = {
    args: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
        duration: 3000
    }
};
