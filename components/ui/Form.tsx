"use client";

import * as React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={`space-y-2 ${className}`} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <label
      ref={ref}
      className={`block text-sm font-medium ${
        error ? "text-destructive" : ""
      } ${className}`}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  HTMLDivElement, // It's a container for form inputs
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode } // Accepts children (the actual input)
>(({ children, ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <div
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props} // Spread the remaining props onto the div
    >
      {children}{" "}
      {/* Render the actual input or custom component passed as a child */}
    </div>
  );
});

FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={`text-sm text-white/70 ${className}`}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={`text-sm font-medium text-destructive ${className}`}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
