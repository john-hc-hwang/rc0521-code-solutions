select "categories"."name",
      "films"."releaseYear",
      "films"."title"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
where "films"."title" = 'Boogie Amelie';
