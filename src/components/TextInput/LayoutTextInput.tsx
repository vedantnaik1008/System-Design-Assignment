import { TextInput } from './TextInput';
import { Search } from 'lucide-react';

const LayoutTextInput = () => {
    return (
        <section className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Design System Example</h1>

            <TextInput
                placeholder='Enter text...'
                inputSize='md'
                className='mb-4'
                label={'Default'}
            />

            <TextInput
                placeholder='Search...'
                inputSize='lg'
                icon={<Search size={20} />}
                className='mb-4 text-transform-none'
                label={'Search'}
            />

            <TextInput
                placeholder='Disabled input'
                inputSize='sm'
                disabled
                className='mb-4'
                label={'Disabled'}
            />

            <TextInput
                placeholder='Invalid input'
                inputSize='md'
                className='border-red-500 focus:ring-red-500'
                label={'Error'}
                errorMessage='This field is required.'
            />
        </section>
    );
};

export default LayoutTextInput;
