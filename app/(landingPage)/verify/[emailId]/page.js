import VerifyEmail from "@/app/_components/VerifyEmail/VerifyEmail";

// export async function generateStaticParams() {}

export default async function Page({ params }) {
  return <VerifyEmail emailId={params.emailId} />;
}
