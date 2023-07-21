import "./App.css";
import { getTopTwoReviews, populateUser, showTotalReviews } from "./utils";
import { Permission, LoyaltyUser } from "./enums";
import { Country, Price } from "./types";
import { useState } from "react";

interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  permissions: Permission.ADMIN;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  permissions: Permission.ADMIN,
  age: 25,
  stayedAt: ["Florida", "Cuba", "Texas"],
};

const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "/imgs/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 38",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+112343823978921, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "/imgs/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no. 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1298239028490830, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "/imgs/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+34829374892553, "andyluger@aol.com"],
    isAvailable: true,
  },
];

const currentLocation: [string, string, number] = ["Hawaii", "11:36", 26];

let isLoggedIn = true;

function showDetails(authorityStatus: boolean | Permissions, price: number) {
  if (authorityStatus) {
    return `$${price}/night`;
  }
}

function App() {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  function addReviews(
    array: {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
    }[]
  ): void {
    const topTwo = getTopTwoReviews(array);
    setDisplayedReviews(topTwo);
  }
  return (
    <>
      <div className="nav-bar">
        <div className="logo"></div>
        <h3 className="user-container">
          Welcome
          <span id="user">{populateUser(you.isReturning, you.firstName)}</span>
        </h3>
      </div>
      <div className="container">
        <h5 id="reviews">
          {showTotalReviews(
            reviews.length,
            reviews[0].name,
            reviews[0].date,
            reviews[0].loyaltyUser
          )}
        </h5>
        {displayedReviews.length === 0 && (
          <button
            className="reviews-button"
            onClick={() => addReviews(reviews)}>
            Get reviews
          </button>
        )}
        <div className="reviews-container">
          {displayedReviews.map((review, index) => (
            <div key={index}>
              <h5>
                {review.stars} stars from {review.name}
              </h5>
            </div>
          ))}
        </div>
        <div className="properties">
          {properties.map((property, index) => (
            <div className="card" key={index}>
              {property.title}

              <img src={property.image} />
              <div>{showDetails(isLoggedIn, property.price)}</div>
            </div>
          ))}
        </div>
        <div className="footer">
          {currentLocation[0]}, {currentLocation[1]} am, {currentLocation[2]}°C
        </div>
      </div>
    </>
  );
}

export default App;
