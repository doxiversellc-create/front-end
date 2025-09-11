import GoogleCallback from "@/app/(auth)/google-callback/_components/GoogleCallback";

const GoogleCallbackPage = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <GoogleCallback />
      </div>
    </div>
  );
};

export default GoogleCallbackPage;
