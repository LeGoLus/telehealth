import { Button } from "@/components/ui/button";

interface ResetButtonProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export const ResetButton = ({ formRef }: ResetButtonProps) => {
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <Button variant="outline" type="button" onClick={handleReset}>
      Reset
    </Button>
  );
};
