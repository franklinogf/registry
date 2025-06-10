"use client";
import { FieldContainer } from "@/registry/default/field-container";
import { FieldError } from "@/registry/default/field-error";
import { FieldLabel } from "@/registry/default/field-label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { useId } from "react";
export type SelectOption = {
  label: string;
  value: string | number;
};
interface DefaultSelectFieldProps {
  required?: boolean;
  error?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  clearable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  clearLabel?: string;
}

type SelectFieldPropsWithItems = DefaultSelectFieldProps & {
  options: SelectOption[];
  children?: never;
};
type SelectFieldPropsWithChildren = DefaultSelectFieldProps & {
  options?: never;
  children: React.ReactNode;
};
export type SelectFieldProps =
  | SelectFieldPropsWithItems
  | SelectFieldPropsWithChildren;

export function SelectField({
  error,
  label,
  disabled,
  className,
  placeholder,
  options,
  children,
  value,
  clearable = false,
  onChange,
  required,
  clearLabel = "Deselect",
}: SelectFieldProps) {
  const id = useId();
  return (
    <FieldContainer className={className}>
      <FieldLabel
        disabled={disabled}
        id={id}
        label={label}
        required={required}
      />
      <Select
        required={required}
        name={id}
        disabled={disabled}
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger
          id={id}
          className={cn("w-full", {
            "border-destructive ring-offset-destructive focus-visible:ring-destructive":
              error,
          })}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options
            ? options.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value.toString()}
                >
                  {item.label}
                </SelectItem>
              ))
            : children}
          {clearable && (
            <>
              <SelectSeparator />
              <Button
                size='sm'
                onClick={() => {
                  onChange?.("");
                }}
                className='w-full'
                variant='secondary'
              >
                {clearLabel}
              </Button>
            </>
          )}
        </SelectContent>
      </Select>
      <FieldError error={error} />
    </FieldContainer>
  );
}
