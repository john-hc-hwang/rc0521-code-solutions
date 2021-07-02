select "countries"."name" as "countryName",
      count("cities"."countryId") as "cityCount"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
