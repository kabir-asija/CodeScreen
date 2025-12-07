import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import {toast} from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="btn">Login</button>
        </SignInButton>
      </SignedOut>
      <button
        className="btn bg-amber-600"
        onClick={() => toast.success("This is a toast")}
      >
        Toast
      </button>
      <SignedIn>
        <SignOutButton mode="modal" />
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
