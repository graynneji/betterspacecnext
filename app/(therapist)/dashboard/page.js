import Care from "@/app/_components/Care/Care";
import TherapistDash from "@/app/_components/TherapistDash/TherapistDash";
import {
  getAllPatientsAttachedToTherapist,
  getUsers,
} from "@/app/_lib/data-services";

export default async function Page() {
  const userInfo = await getUsers();
  // const userId = userInfo[0]?.

  const patientsTherapist = await getAllPatientsAttachedToTherapist();
  // console.log("Hoooooooooooooooooooooooooo", patientsTherapist[0]);
  return (
    <>
      <TherapistDash
        userInfo={userInfo}
        patientsTherapist={patientsTherapist}
      />
    </>
  );
}
