import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { Input } from './ui/input';
import type { Control, FieldPath } from 'react-hook-form';
import type { z } from 'zod';
import { authFormSchema } from '@/lib/zod/schema';

const formSchema = authFormSchema('sign-up');

declare type CustomInputProps = {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeHolder: string;
};

const CustomInput = ({ control, name, label, placeHolder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>

          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                type={name === 'password' ? 'password' : 'text'}
                placeholder={placeHolder}
                className='input-class'
                autoComplete='off'
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
