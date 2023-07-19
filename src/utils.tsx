import { LoyaltyUser } from "./enums";

export const showTotalReviews = (
  value: number,
  reviewer: string,
  date: string,
  loyalty: LoyaltyUser
) => {
  const totalReviews = value.toString();
  const lastReviewer = reviewer;
  const lastReviewedDate = date;
  const isLoyalUser = loyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  return `${totalReviews} review${makeMultiple(
    value
  )} and last reviewed by: ${lastReviewer} ${isLoyalUser} on ${lastReviewedDate}`;
};

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    return " back " + userName;
  }
  return userName;
}

function makeMultiple(value: number): string {
  if (value > 1 || value === 0) {
    return "s";
  } else return "";
}
