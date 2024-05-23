import Label from "./Label";
import Input from ".";
import HelperText from "./HelperText";
import { AuthInputProps } from "@/shared/types/input";

const EmailInput = ({ register, errors }: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <Label>이메일</Label>
      <Input
        id="email"
        inputSize="large"
        type="email"
        placeholder="이메일을 입력해주세요"
        register={register}
        errors={errors}
        validation={{
          required: "이메일을 입력해주세요",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "잘못된 이메일입니다",
          },
        }}
      />
      {errors.email && (
        <HelperText type="error">{errors.email.message}</HelperText>
      )}
    </div>
  );
};

export default EmailInput;
