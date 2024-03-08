"use cliente";

import CurrencyInput from "react-currency-input-field";

export const InputCurrency = ({ value, setValue }) => {
  const handleValueChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="R$ 0,00"
        defaultValue={"1000,00"}
        decimalsLimit={2}
        prefix="R$ "
        value={value}
        decimalScale={2}
        decimalSeparator=","
        groupSeparator="."
        onValueChange={handleValueChange}
        style={{
          padding: "10px",
          outline: "none",
          width: "110px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      />
    </>
  );
};
