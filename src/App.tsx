import "./App.css";

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

const showTotalReviews = (
  value: number,
  reviewer: string,
  date: string,
  loyalty: boolean
) => {
  const totalReviews = value.toString();
  const lastReviewer = reviewer;
  const lastReviewedDate = date;
  const isLoyalUser = loyalty ? "⭐" : "";
  return `total reviews: ${totalReviews} and last reviewed by: ${lastReviewer} ${isLoyalUser} on ${lastReviewedDate}`;
};

const you = {
  userName: { firstName: "Bobby", lastName: "Brown" },
  isReturning: true,
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    return "back" + userName;
  }
  return userName;
}

function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo"></div>
        <h3 className="user-container">
          Welcome
          <span id="user">
            {populateUser(you.isReturning, you.userName.firstName)}
          </span>
        </h3>
      </div>
      <div className="container">
        <h5 id="reviews">
          total reviews:{" "}
          {showTotalReviews(
            reviews.length,
            reviews[0].name,
            reviews[0].date,
            reviews[0].loyaltyUser
          )}
        </h5>
      </div>
    </>
  );
}

export default App;
