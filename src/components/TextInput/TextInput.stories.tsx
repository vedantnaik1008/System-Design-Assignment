import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { Search } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
    title: 'Components/Data Entry/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg']
        },
        label: { control: 'text' },
        errorMessage: { control: 'text' }
    },
    parameters: {
        docs: {
            description: {
                component:
                    'A text input field with support for icons, different sizes, and full accessibility features.'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter text...',
        inputSize: 'md'
    }
};

export const WithIcon: Story = {
    args: {
        label: 'Username',
        placeholder: 'Search...',
        inputSize: 'md',
        icon: <Search size={16} />
    }
};

export const Disabled: Story = {
    args: {
        label: 'Username',
        placeholder: 'Disabled input',
        inputSize: 'md',
        disabled: true
    }
};

export const ErrorState: Story = {
    args: {
        label: 'Username',
        placeholder: 'Invalid input',
        inputSize: 'md',
        errorMessage: 'This field is required.',
        className: 'border-red-500 focus:ring-red-500'
    }
};
