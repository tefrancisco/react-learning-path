"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

function isInvalidText(title) {
  return !title || title.trim() === "";
}

// This is a server action.
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  // With the 'layout' property, all of the nested pages will be revalidated too.
  // None, 'page' for layout, it will just revalidate the meals path.
  revalidatePath("/meals");
  redirect("/meals");
}
