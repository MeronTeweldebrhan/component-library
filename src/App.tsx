// import './App.css'
import AlertBox from "./Components/AlertBox/AlertBox";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import hpImg from "./assets/hp.png";

function App() {

  /// Data
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
  };
  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: hpImg,
    inStock: true,
  };


  return (
    <>
      <h1>Componentes Library </h1>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      <AlertBox
        type="info"
        message="Profile update in progress"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">Please wait while changes are being saved.</p>
      </AlertBox>
      <AlertBox
        type="warning"
        message="Some profile details were not saved!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">Check your internet connection or try again.</p>
      </AlertBox>
<AlertBox
        type="error"
        message="Failed to update your profile. Please try again!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">If the issue persists, contact support.</p>
      </AlertBox>



      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Item Added to cart ${productId}`)}
      ></ProductDisplay>
    </>
  );
}

export default App;
