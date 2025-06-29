import { useState } from "react";
import { investmentTypeTerm } from "../utils/investTypeTerm";
import FlagSelect from "./FlagSelect";

const CryptoTaxCalculator = () => {
  const [inputValues, setInputValues] = useState({
    purchasePrice: "",
    salePrice: "",
    expenses: "",
  });

  const [btnIndex, setBtnIndex] = useState(1);
  const [selectedAnnualIncomeOption, setSelectedAnnualIncomeOption] =
    useState("$0 - $18,200");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (!isNaN(value) && value.length <= 5) {
      const sanitizedValue = Math.abs(parseFloat(value));
      setInputValues({
        ...inputValues,
        [name]: sanitizedValue.toString(),
      });
    }
  };

  const handleBtnIndex = (index) => setBtnIndex(index);
  const handleAnnualIncomeChange = (event) =>
    setSelectedAnnualIncomeOption(event.target.value);

  const calculateTaxRate = (option) => {
    switch (option) {
      case "$0 - $18,200":
        return 0;
      case "$18,201 - $45,000":
        return 0.19;
      case "$45,001 - $120,000":
        return 0.325;
      case "$120,001 - $180,000":
        return 0.37;
      case "$180,001+":
        return 0.45;
      default:
        return 0;
    }
  };

  const calculateTaxDetails = (option) => {
    switch (option) {
      case "$0 - $18,200":
        return "0% - No tax";
      case "$18,201 - $45,000":
        return "Nil + 19% of excess over $18,200";
      case "$45,001 - $120,000":
        return "$5,092 + 32.5% of excess over $45,000";
      case "$120,001 - $180,000":
        return "$29,467 + 37% of excess over $120,000";
      case "$180,001+":
        return "$51,667 + 45% of excess over $180,000";
      default:
        return "Invalid option";
    }
  };

  let { purchasePrice, salePrice, expenses } = inputValues;
  if (isNaN(purchasePrice)) purchasePrice = 0;
  if (isNaN(salePrice)) salePrice = 0;
  if (isNaN(expenses)) expenses = 0;

  const capitalGainsAmount = salePrice - purchasePrice - expenses;
  let discountForLongTermGains = 0;
  if (capitalGainsAmount > 0 && btnIndex === 1) {
    discountForLongTermGains = 0.5 * capitalGainsAmount;
  }

  const netCGA =
    btnIndex === 0
      ? capitalGainsAmount
      : capitalGainsAmount - discountForLongTermGains;
  const taxRate = calculateTaxRate(selectedAnnualIncomeOption);
  const taxToPay = netCGA * taxRate;

  return (
    <div className="w-full max-w-6xl mx-auto bg-white mt-5 mb-5 rounded-2xl p-4 sm:p-6 md:p-10 border border-border-gray xl:border-none">
      <h1 className="font-bold text-xl sm:text-3xl text-center pb-5 sm:pb-8">
        Free Crypto Tax Calculator Australia
      </h1>

      <div className="flex flex-col gap-6">
        {/* Row 1: Financial Year & Country */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
            <label className="text-f-primary text-sm sm:w-40">
              Financial Year
            </label>
            <select className="bg-default-gray w-full sm:w-auto h-10 md:h-12 p-3 rounded-lg outline-none">
              <option>FY 2023-24</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
            <label className="text-f-primary text-sm sm:w-20">Country</label>
            <FlagSelect />
          </div>
        </div>

        <div className="bg-divider opacity-60 h-px w-full"></div>

        {/* Row 2: Purchase & Sale Price */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          {["purchasePrice", "salePrice"].map((field, i) => (
            <div key={field} className="w-full">
              <label className="text-f-primary text-sm mb-1 block">
                {field === "purchasePrice"
                  ? "Enter purchase price of Crypto"
                  : "Enter sale price of Crypto"}
              </label>
              <div className="flex items-center bg-default-gray rounded-lg px-4 h-10 md:h-12">
                <span>$</span>
                <input
                  type="number"
                  placeholder="0"
                  name={field}
                  value={inputValues[field]}
                  onChange={handleInputChange}
                  className="bg-default-gray w-full h-full px-2 outline-none text-base font-medium"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: Expenses & Investment Type */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          <div className="w-full">
            <label className="text-f-primary text-sm mb-1 block">
              Enter your Expenses
            </label>
            <div className="flex items-center bg-default-gray rounded-lg px-4 h-10 md:h-12">
              <span>$</span>
              <input
                type="number"
                placeholder="0"
                name="expenses"
                value={inputValues.expenses}
                onChange={handleInputChange}
                className="bg-default-gray w-full h-full px-2 outline-none text-base font-medium"
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-f-primary text-sm mb-2">Investment Type</p>
            <div className="flex gap-3 flex-wrap">
              {investmentTypeTerm?.map((type, index) => (
                <button
                  key={type?.title}
                  onClick={() => handleBtnIndex(index)}
                  className={`text-sm px-3 py-2 rounded-lg border font-medium flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-center ${
                    index === btnIndex
                      ? "border-2 border-default-blue bg-default-blue bg-opacity-5 text-default-blue"
                      : "border border-btn-border-gray"
                  }`}
                >
                  {type?.title}
                  {index === btnIndex && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Annual Income & Tax Rate */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          <div className="w-full">
            <label className="text-f-primary text-sm mb-1 block">
              Select Your Annual Income
            </label>
            <select
              value={selectedAnnualIncomeOption}
              onChange={handleAnnualIncomeChange}
              className="bg-default-gray w-full h-10 md:h-12 p-3 rounded-lg outline-none font-medium"
            >
              <option value="$0 - $18,200">$0 - $18,200</option>
              <option value="$18,201 - $45,000">$18,201 - $45,000</option>
              <option value="$45,001 - $120,000">$45,001 - $120,000</option>
              <option value="$120,001 - $180,000">$120,001 - $180,000</option>
              <option value="$180,001+">$180,001+</option>
            </select>
          </div>

          <div className="w-full flex flex-col">
            <span className="text-xs text-btn-border-gray">Tax Rate:</span>
            <span className="text-sm text-btn-border-gray">
              {calculateTaxDetails(selectedAnnualIncomeOption)}
            </span>
          </div>
        </div>

        {/* Row 5: Capital Gains & Discount (only for long term) */}
        {btnIndex === 1 && (
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
            <div className="w-full">
              <label className="text-f-primary text-sm mb-1 block">
                Capital gains amount
              </label>
              <div className="bg-default-gray h-10 md:h-12 px-4 py-2 rounded-lg">
                {capitalGainsAmount < 0
                  ? `- $${Math.abs(capitalGainsAmount)}`
                  : `$${capitalGainsAmount}`}
              </div>
            </div>

            <div className="w-full">
              <label className="text-f-primary text-sm mb-1 block">
                Discount for long term gains
              </label>
              <div className="bg-default-gray h-10 md:h-12 px-4 py-2 rounded-lg">
                ${discountForLongTermGains}
              </div>
            </div>
          </div>
        )}

        {/* Row 6: Results */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10 pt-5">
          <div className="bg-green-btn py-5 px-6 rounded-lg w-full text-center">
            <p className="text-base text-f-primary font-medium mb-1">
              Net Capital gains tax amount
            </p>
            <p className="text-2xl font-bold text-green-btn-text">
              {isNaN(netCGA)
                ? "$0"
                : netCGA < 0
                ? `- $${Math.abs(netCGA)}`
                : `$${netCGA}`}
            </p>
          </div>
          <div className="bg-btn-blue py-5 px-6 rounded-lg w-full text-center">
            <p className="text-base text-f-primary font-medium mb-1">
              The tax you need to pay*
            </p>
            <p className="text-2xl font-bold text-blue-btn-text">
              {taxToPay
                ? taxToPay < 0
                  ? `- $${Math.abs(taxToPay).toFixed(3)}`
                  : `$${taxToPay.toFixed(3)}`
                : "$0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTaxCalculator;
