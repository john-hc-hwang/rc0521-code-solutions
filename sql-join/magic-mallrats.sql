select "customers"."firstName",
      "customers"."lastName",
      "films"."title"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "customers" using ("customerId")
where "films"."title" = 'Magic Mallrats';
