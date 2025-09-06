import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import Chart from "../components/Chart";

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setPatients(users);
      setSelected(users[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 grid grid-cols-12 gap-6 bg-gray-50 min-h-screen">
      {/* Patients List */}
     
      <aside className="col-span-3 bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Patients</h2>
        <div className="space-y-3 overflow-y-auto max-h-[80vh]">
          {patients.map((p, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(p)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                selected?.name === p.name ? "bg-teal-100" : "hover:bg-gray-100"
              }`}
            >
              <img
                src={p.profile_picture}
                alt={p.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{p.name}</h4>
                <p className="text-sm text-gray-500">
                  {p.gender}, {p.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Patient Dashboard */}
      <main className="col-span-6 bg-gray-50 shadow rounded-lg p-6">
        {selected && (
          <>
          <div> <Chart selected={selected} /></div>
            {/* Diagnosis History */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <img
                      src="/respiratory rate.svg"
                      alt="respiratory"
                      className="h-14 w-14 mb-2"
                    />
                    <p className="text-sm">Respiratory Rate</p>
                    <h3 className="text-xl font-bold">
                      {selected.diagnosis_history[0].respiratory_rate.value} bpm
                    </h3>
                    <p className="text-gray-500">
                      {selected.diagnosis_history[0].respiratory_rate.levels}
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <img
                      src="temperature.svg"
                      alt="temperature"
                      className="h-14 w-14 mb-2"
                    />
                    <p className="text-sm">Temperature</p>
                    <h3 className="text-xl font-bold">
                      {selected.diagnosis_history[0].temperature.value}°F
                    </h3>
                    <p className="text-gray-500">
                      {selected.diagnosis_history[0].temperature.levels}
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <img
                      src="/HeartBPM.svg"
                      alt="heart"
                      className="h-14 w-14 mb-2"
                    />
                    <p className="text-sm">Heart Rate</p>
                    <h3 className="text-xl font-bold">
                      {selected.diagnosis_history[0].heart_rate.value} bpm
                    </h3>
                    <p className="text-gray-500">
                      {selected.diagnosis_history[0].heart_rate.levels}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic List */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">Diagnostic List</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2">Problem/Diagnosis</th>
                      <th className="p-2">Description</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.diagnostic_list.map((d, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2">{d.name}</td>
                        <td className="p-2">{d.description}</td>
                        <td className="p-2">{d.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Patient Profile */}
      <aside className="col-span-3 bg-gray-50 p-2 min-h-screen">
        {selected && (
          <>
            {/* Patient Info Section */}
            {/* Patient Info Section */}
            <div className="bg-white shadow rounded-lg p-6 mb-4">
              <div className="flex flex-col items-center">
                <img
                  src={selected.profile_picture}
                  alt={selected.name}
                  className="h-24 w-24 rounded-full mb-3"
                />
                <h2 className="font-bold text-lg">{selected.name}</h2>
              </div>

              <div className="mt-4 space-y-4 text-sm">
                {/* Date of Birth */}
                <div className="flex items-start gap-3">
                  <img src="/Birth.svg" alt="DOB" className="h-6 w-6 mt-1" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Date of Birth</span>
                    <span>{selected.date_of_birth}</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="flex items-start gap-3">
                  <img
                    src={
                      selected.gender === "Male"
                        ? "/MaleIcon.svg"
                        : "/FemaleIcon.svg"
                    }
                    alt="Gender"
                    className="h-6 w-6 mt-1"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Gender</span>
                    <span>{selected.gender}</span>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-3">
                  <img
                    src="/PhoneIcon.svg"
                    alt="Phone"
                    className="h-6 w-6 mt-1"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Contact Number</span>
                    <span>{selected.phone_number}</span>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="flex items-start gap-3">
                  <img
                    src="/PhoneIcon.svg"
                    alt="Emergency"
                    className="h-6 w-6 mt-1"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Emergency Contact</span>
                    <span>{selected.emergency_contact}</span>
                  </div>
                </div>

                {/* Insurance */}
                <div className="flex items-start gap-3">
                  <img
                    src="/InsuranceIcon.svg"
                    alt="Insurance"
                    className="h-6 w-6 mt-1"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Insurance Provider</span>
                    <span>{selected.insurance_type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Results Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="font-bold text-lg mb-2">Lab Results</h2>
              <ul className="space-y-2">
                {selected.lab_results.map((lab, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <span>{lab}</span>
                    <img src="/downl.svg" alt="download" className="h-5 w-5" />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Patient;
