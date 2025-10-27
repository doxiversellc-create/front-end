import ResetPasswordForm from "./_components/ResetPasswordForm";

interface ResetPasswordPageProps {
  searchParams: Promise<{ token: string }>;
}
const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  const { token } = await searchParams;
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <ResetPasswordForm token={token} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
