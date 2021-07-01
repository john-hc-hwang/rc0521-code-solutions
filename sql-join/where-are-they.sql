select "a"."line1",
      "c"."name" as "city",
      "a"."district",
      "ct"."name" as "country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "ct" using ("countryId");
