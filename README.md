# Free Crypto Tax Calculator for Australia

Welcome to the Free Crypto Tax Calculator for Australia project, created as part of the KoinX frontend intern challenge! This single-page web application is designed to assist users in calculating their crypto gains, tax rates, and taxes based on their financial data. The project is built using React.js and draws inspiration from the Figma design, accessible [here](https://figmashort.link/bREHpN).

### Crypto Tax Calculation

#### User Inputs

Users can input the following information:

- **Purchase Price:** The amount they acquired the cryptocurrency for.
- **Sale Price:** The amount they received from selling the cryptocurrency.
- **Expenses:** Any costs or fees associated with the cryptocurrency transaction.
- **Investment Type:** A choice between "Long Term" and "Short Term" investments.
- **Annual Income:** Users can select their annual income level from a dropdown menu.

#### Calculations

The application performs several crucial calculations:

- **Tax Rate:** The tax rate is determined based on the user's selected "Annual Income" from the dropdown menu. The tax rate varies as the user changes their income level.

- **Capital Gains Amount:** This figure is calculated as the difference between the "Sale Price" and the "Purchase Price," after subtracting any incurred expenses(Sale Price - Purchase Price - Expenses).

- **Discount for Long Term Gains:** If the user selects "Long Term" as their investment type, a discount is applied, amounting to 50% of the "Capital Gains Amount," but only if the "Capital Gains Amount" is positive. In the case of a "Short Term" investment, this discount section remains hidden.

- **Net Capital Gains:** For "Long Term" investments, the net capital gains are computed as the "Capital Gains Amount" minus the applied discount(Capital Gains Amount - Discount for long term gains). For "Short Term" investments, the calculation follows the formula described in the second point(Sale Price - Purchase Price - Expenses).

- **Tax to be Paid:** The tax to be paid is determined by multiplying the tax rate by the net capital gains amount(Tax Rate \* Net Capital Gains Amount).

### Example Calculation

Consider the following example:

- Purchase Price: $50
- Sale Price: $100
- Expenses: $20
- Investment Type: Long Term
- Annual Income: ($45,001 - $120,000)

The calculations for this scenario are as follows:

- Tax Rate: "$5092 + 32.5% of excess over $45,000"
- Capital Gains Amount: $30
- Long Term Capital Gains Discount: $15
- Net Capital Gains Amount: $15
- Tax to be Paid: $4.875 (equivalent to 32.5% of $15)
