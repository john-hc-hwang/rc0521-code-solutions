select "categories"."name" as "category",
      count("filmCategory"."filmId") as "categoryCount"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa'
group by "categories"."categoryId";
