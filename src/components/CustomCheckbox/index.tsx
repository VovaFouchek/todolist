import { Checkbox } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CheckboxProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      icon={
        <RadioButtonUncheckedIcon
          sx={{ color: "#071D55", width: "32px", height: "32px" }}
        />
      }
      checkedIcon={
        <CheckCircleIcon
          style={{
            color: "#49C25D",
            width: "32px",
            height: "32px",
          }}
        />
      }
      sx={{ marginRight: "17px", padding: "0px" }}
    />
  );
};
