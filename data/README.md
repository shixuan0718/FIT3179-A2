# Data dictionary and provenance

Charts use small derived files; all numeric observations are calculated from the supplied datasets, not invented.

## New fashion-supplier views

- `top_import_suppliers_2025.csv`: 10 largest named partners for Malaysia's **2025 imports**, HS 61 (knitted apparel), HS 62 (woven apparel), and HS 64 (footwear). Value = sum of `primaryValue` by country and chapter, converted to **US$ millions**. `dominant` = the largest of these three categories for that named partner; `share_pct` = share of that partner's shipments belonging to its dominant category. Partner longitude/latitude sourced from the earlier supplied `flow_partners_2025.csv` (partner representative geographic coordinates, not actual factory or shipping locations).
- `supplier_profiles_2025.csv`: the top 8 named partners by combined value, three rows per partner. `share_pct` = each category's value / the partner's total across the three chapters × 100. The three chapter shares for each partner sum to 100% (within rounding). This is **product mix**, not individual customer preference.
- `supplier_profile_axes.csv`: axis labels and ordering for the parallel coordinates chart (no measured data).

Source: user's downloaded UN Comtrade file `TradeData_10_9_2026_17_26_53.csv`; reporter Malaysia (MYS), import flow `M`, `refYear = 2025`, `cmdCode` in {61,62,64}, excluding partner `World`. As in the source, values may be revised.

Cross-check: total selected imports ≈ **US$3,330.14 million**; top ten named suppliers ≈ **US$3,031.90 million**, or **91.0%** of that total. Bangladesh's knitted apparel share ≈ **83.0%**; Indonesia's footwear share ≈ **47.0%**.

## Existing files

- `flow_partners_2025.csv`, `flows_2025.geojson`, `treemap_imports_2025.json`, `trade_imports_by_year.csv`, `trade_by_category_year.csv`, `trade_balance_category_2025.csv`: UN Comtrade-derived product flows, treemap, category and annual series.
- `retail_seasonality_477.csv`: OpenDOSM wholesale/retail data, monthly MSIC 477 seasonality during 2023–2025. The category includes non-fashion stores; do not call it an exact measure of clothing purchases.
- `clothing_cpi_latest.csv`, `clothing_inflation_monthly.csv`, `cpi_rebased.csv`: OpenDOSM CPI by state/division. The state averages on this site are unweighted, not Malaysia's official CPI.
- `state_context_2024.csv`, `hies_parallel_2024.csv`, `hies_axes.csv`: OpenDOSM HIES socioeconomic context, not clothing-spending or fashion-rating surveys.
- `manufacturing_2025.csv`: unused legacy file retained so previous revisions can be checked. It is **not used as fashion/textiles data** in this version.

The dashboard is an explanatory presentation for the general Malaysian reader, not a customer-review or brand-preference survey.
