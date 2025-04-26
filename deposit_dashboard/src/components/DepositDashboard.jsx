import React, { useEffect, useState } from "react";
import axios from "axios"; // We will use axios to call API (or you can use fetch)

const DepositsDashboard = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDeposits = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/deposits"); 
        setDeposits(response.data);
      } catch (error) {
        console.error("Failed to fetch deposits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-gray-900">
        Loading deposits...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 p-4 flex flex-col gap-4">
        <div className="text-2xl font-bold mb-6">Appzillon</div>
        <nav className="flex flex-col gap-4">
          <button className="text-left">Dashboard</button>
          <button className="text-left">Accounts</button>
          <button className="text-left">Fund Transfer</button>
          <button className="text-left">Loans</button>
          <button className="text-left font-bold bg-blue-800 p-2 rounded">
            Deposits
          </button>
          <button className="text-left">Bill Payment</button>
          <button className="text-left">Cards</button>
          <button className="text-left">Service Request</button>
          <button className="text-left">User Notifications</button>
        </nav>
        <div className="mt-auto p-2 bg-blue-800 rounded text-center">
          CONTACT<br />Relationship Manager
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <header className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold">IEXCEED BANK - US Office</div>
          <div className="flex items-center gap-4">
            <span>hmmaker</span>
            <input
              type="text"
              placeholder="Search"
              className="rounded p-1 text-black"
            />
            <div className="flex gap-2">
              <button className="bg-gray-700 p-2 rounded-full">🔔</button>
              <button className="bg-gray-700 p-2 rounded-full">👤</button>
            </div>
          </div>
        </header>

        {/* Deposits Section */}
        <section className="bg-blue-800 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Deposits Dashboard</h2>
            <button className="bg-blue-600 px-4 py-2 rounded-full text-white">
              + Add New
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-blue-900 text-gray-300">
                <tr>
                  <th className="p-3">TYPE</th>
                  <th className="p-3">NAME</th>
                  <th className="p-3">MATURITY DATE</th>
                  <th className="p-3">CURRENT BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((deposit, index) => (
                  <tr key={index} className="border-t border-blue-700">
                    <td className="p-3">{deposit.type}</td>
                    <td className="p-3">{deposit.name}</td>
                    <td className="p-3">{deposit.maturityDate}</td>
                    <td className="p-3">{deposit.currentBalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
            <div>Showing 1 to {deposits.length} of {deposits.length} records</div>
            <div className="flex items-center gap-2">
              <button className="px-2">&lt;&lt;</button>
              <button className="px-2">&lt;</button>
              <button className="px-4 py-1 bg-white text-black rounded-full">1</button>
              <button className="px-2">&gt;</button>
              <button className="px-2">&gt;&gt;</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DepositsDashboard;
