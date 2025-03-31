// "use client";
// import { useQuery } from "@tanstack/react-query";
// import { getPatients } from "../_lib/data-services";
// import { useEffect } from "react";

// export function useGetPatients() {

//   const {
//     isPending: isLoading,
//     error,
//     data: patientInfo,
//     isFetching,
//   } = useQuery({
//     queryKey: ["patients"],
//     queryFn: getPatients,
//     // initialPatientInfo,
//   });
//   console.log("patient", patientInfo);
//   return { isLoading, error, patientInfo, isFetching };
// }
