import VerifyEmail from "@/app/(auth)/verify-email/_components/VerifyEmail";

interface VerifyEmailPageProps {
  searchParams: Promise<{ token: string }>;
}
const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  const { token } = await searchParams;
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <VerifyEmail token={token} />
      </div>
    </div>
  );
};

export default VerifyEmailPage;
