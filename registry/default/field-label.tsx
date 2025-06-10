import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RequiredFieldIcon } from "@/registry/default/required-field-icon";

export interface FieldLabelProps {
  required?: boolean;
  label?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export function FieldLabel({
  required,
  label,
  disabled,
  id,
  className,
}: FieldLabelProps) {
  if (!label) return null;

  return (
    <Label
      asChild={id === undefined}
      aria-disabled={disabled}
      className={cn(
        "flex gap-x-0.5",
        {
          "text-muted-foreground/80": disabled,
        },
        className
      )}
      htmlFor={id}
    >
      {id === undefined ? (
        <div>
          <span>{label}</span>
          {required && <RequiredFieldIcon className='self-start' />}
        </div>
      ) : (
        <>
          <span>{label}</span>
          {required && <RequiredFieldIcon className='self-start' />}
        </>
      )}
    </Label>
  );
}
