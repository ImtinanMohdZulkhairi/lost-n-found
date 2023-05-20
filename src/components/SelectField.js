import React from "react";
import { ErrorMessage, useField } from "formik";

const SelectField =({...props}) => {
    const { label, placeholder, data } = props;
  const [field] = useField(props);
    return (
        <div className="space-y-1">
      <label className="block">{label}</label>
      <div className="space-y-2">
        <select
          className="border border-gray-500 rounded-md px-4 py-3 outline-none block focus:border-emerald-600 w-full"
          autoComplete="off"
          autoSave="off"
          placeholder={placeholder}
          {...field}
          {...props}
        >
            <option value="KICT">Select Location</option>
            {data.map(dat => (<option value={dat}>{dat}</option>))}
        </select>
        <p className="text-sm text-red-500">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </div>
    )
}

export default SelectField