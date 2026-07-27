# Tallo website content workflow

The website uses local, reviewable content. There is no CMS.

## Weekly specials

Update `weekly-specials.json` every Wednesday after the Tallo grocery and liquor
catalogues have refreshed.

1. Update the edition dates and the date the source data was checked.
2. Select only products that are explicitly marked as on special.
3. Confirm the current price is lower than the previous price.
4. Exclude unavailable, stale, duplicated or obviously invalid records.
5. Keep the location caveat, particularly for liquor.
6. Run `npm run validate:content`, then `npm run lint` and `npm run build`.

The page URL remains `/blog/weekly-specials`. Do not create a new URL each week.

Never fill an empty retailer section with estimates or regular prices presented
as specials. Explain the data limitation instead.
