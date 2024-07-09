import { ChangeEvent } from "react";

const AuthInput = ({ label, type, placeholder, onChange }: LabelInput) => {
  return (
    <div>
      <label className="block mb-2 pt-4 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
)
}

interface LabelInput {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }

export default AuthInput