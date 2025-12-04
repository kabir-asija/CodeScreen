import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

const App = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton mode="modal" />
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default App;
