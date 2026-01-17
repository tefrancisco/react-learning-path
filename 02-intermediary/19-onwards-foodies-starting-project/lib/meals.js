import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export function getMeals() {
  // .all() is for getting all rows
  // .run() is for modifying data
  //   throw new Error('Loading meals failed.')
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // You should use the '?' as a placeholder instead of the real data to prevent SQL injections.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Add the slug property to the meal object.
  meal.slug = slugify(meal.title, { lower: true });
  // Replace the old instructions with the sanitized ones.
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // We do not want to actually store an image in the database, just its path.
  meal.image = `/images/${fileName}`;

  // The @ and then the property name is a special syntax that allow us to just pass
  // an object with the same names, and then the data will be extracted automatically.
  db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
         )
        `).run(meal);
}
