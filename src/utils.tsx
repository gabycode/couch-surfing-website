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
  return `total reviews: ${totalReviews} and last reviewed by: ${lastReviewer} ${isLoyalUser} on ${lastReviewedDate}`;
};

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    return " back " + userName;
  }
  return userName;
}
