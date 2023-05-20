import { ErrorMessage, useField } from "formik";
import React from "react";

const TextArea = ({ ...props }) => {
  const { label, placeholder } = props;
  const [field] = useField(props);
  return (
    <div className="space-y-1">
      <label className="block">{label}</label>
      <div className="space-y-2">
        <textarea
          className="border border-gray-500 rounded-md px-4 py-3 outline-none block focus:border-emerald-600 w-full"
          autoComplete="off"
          rows={4}
          autoSave="off"
          placeholder={placeholder}
          {...field}
          {...props}
        />
        <p className="text-sm text-red-500">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </div>
  );
};

export default TextArea;
