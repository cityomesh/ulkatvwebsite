"use client";
import {
  Calendar,
  PlusCircle,
  RefreshCcw,
  Receipt,
  PhoneCall,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<
    "main" | "phonepe" | "gpay" | "paytm" | "bank"
  >("main");
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");

  const bankAccounts = [
    {
      id: "1",
      bank: "SBI Bank",
      accountNo: "123456789",
      ifsc: "SBIN0001234",
      name: "Demo User",
      address: "Hyderabad, Telangana",
    },
    {
      id: "2",
      bank: "HDFC Bank",
      accountNo: "987654321",
      ifsc: "HDFC0005678",
      name: "Test User",
      address: "Bangalore, Karnataka",
    },
    {
      id: "3",
      bank: "ICICI Bank",
      accountNo: "555888333",
      ifsc: "ICIC0004321",
      name: "Another User",
      address: "Chennai, Tamil Nadu",
    },
  ];

  const handleBankTransfer = () => {
    if (!selectedAccount) {
      alert("Please select a bank account.");
      return;
    }
    if (!amount) {
      alert("Please enter an amount before transfer.");
      return;
    }

    const account = bankAccounts.find((acc) => acc.id === selectedAccount);

    alert(
      `₹${amount} transferred successfully to ${account?.name} (${account?.bank}, Acc: ${account?.accountNo}).`
    );

    setAmount("");
    setSelectedAccount("");
    setStep("main");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1c1b20] text-white p-6 md:p-20 mt-[8rem] flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-yellow-400 mb-6">
          Welcome, Naragam Sravani
        </h1>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-black text-center p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">Subscriber Id</p>
            <p className="font-bold">GOSP0118942</p>
          </div>
          <div className="bg-black text-center p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">Last recharged on</p>
            <Calendar className="mx-auto text-red-500 mt-2" />
          </div>
          <div className="bg-black text-center p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">Last recharge amount</p>
            <p className="font-bold text-yellow-400">Rs.</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-black text-center p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">Next Recharge On (Base Pack)</p>
            <div className="mt-2 bg-red-600 text-white font-bold rounded-md py-4">
              September 4
            </div>
          </div>
          <div className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
            <Wallet className="text-yellow-400 w-8 h-8 mb-2" />
            <button
              onClick={() => alert("Recharge Now functionality")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded"
            >
              Recharge Now
            </button>
          </div>
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-semibold mb-2">
              LCO Details (For Complaints)
            </h3>
            <p>
              <span className="text-gray-400">Name:</span> demolco
            </p>
            <p>
              <span className="text-gray-400">Phone:</span> 9731093445
            </p>
            <p>
              <span className="text-gray-400">Email:</span> demolco@mail.com
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div
            onClick={() => alert("Add New Packs functionality")}
            className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-800 transition"
          >
            <PlusCircle className="text-red-500 w-10 h-10 mb-2" />
            <p className="font-semibold">Add New Packs</p>
          </div>
          <div
            onClick={() => alert("Manage / Renew Packs functionality")}
            className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-800 transition"
          >
            <RefreshCcw className="text-orange-500 w-10 h-10 mb-2" />
            <p className="font-semibold">Manage / Renew Packs</p>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setStep("main");
            }}
            className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-800 transition"
          >
            <Receipt className="text-green-500 w-10 h-10 mb-2" />
            <p className="font-semibold">Transactions & Receipts</p>
          </div>
          <div
            onClick={() => alert("Contact Cable Operator functionality")}
            className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-800 transition"
          >
            <PhoneCall className="text-yellow-400 w-10 h-10 mb-2" />
            <p className="font-semibold">Contact Your Cable Operator</p>
          </div>
        </div>

        {/* Active Packs */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400 mb-3">Active Packs</h2>
          <div className="bg-black p-4 rounded-lg shadow-md">
            <p className="font-bold">ULKA BASIC PACK</p>
            <p className="text-gray-300">Rs. 0.00/-</p>
            <p className="text-sm text-gray-400">Expiry Date: 25/1/2026</p>
            <p className="text-sm text-red-400">
              Days Left: 4 Months 24 days
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Payments */}
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-[#2a2a2a] p-24 rounded-lg shadow-lg w-[650px] min-h-[550px] text-center">
      {step === "main" && (
        <>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Payment Options
          </h2>
          <div className="space-y-10">
            <button
              onClick={() => setStep("phonepe")}
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold"
            >
              PhonePe
            </button>
            <button
              onClick={() => setStep("gpay")}
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded font-semibold"
            >
              Google Pay
            </button>
            <button
              onClick={() => setStep("paytm")}
              className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded font-semibold"
            >
              Paytm
            </button>
            <button
              onClick={() => setStep("bank")}
              className="w-full bg-gray-500 hover:bg-gray-600 py-3 rounded font-semibold"
            >
              Bank Account Transfer
            </button>
          </div>
        </>
      )}

      {/* PhonePe UI */}
      {step === "phonepe" && (
        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-4">
            PhonePe Payment
          </h2>
          <p className="text-sm text-gray-300 mb-2">Scan QR Code</p>
          <Image
            src="/scaner.jpeg"
            alt="PhonePe QR"
            width={250}
            height={250}
            className="mx-auto rounded-md"
          />
          <p className="mt-3 text-gray-400">UPI ID: demo@upi</p>
          <button
            onClick={() => setStep("main")}
            className="mt-6 bg-yellow-500 px-6 py-2 rounded"
          >
            Back
          </button>
        </div>
      )}

      {/* Google Pay UI */}
      {step === "gpay" && (
        <div>
          <h2 className="text-xl font-bold text-green-400 mb-4">
            Google Pay
          </h2>
          <p className="text-sm text-gray-300 mb-2">Scan QR Code</p>
          <Image
            src="/scaner.jpeg"
            alt="GPay QR"
            width={250}
            height={250}
            className="mx-auto rounded-md"
          />
          <p className="mt-3 text-gray-400">UPI ID: gpaydemo@upi</p>
          <button
            onClick={() => setStep("main")}
            className="mt-6 bg-yellow-500 px-6 py-2 rounded"
          >
            Back
          </button>
        </div>
      )}

      {/* Paytm UI */}
      {step === "paytm" && (
        <div>
          <h2 className="text-xl font-bold text-indigo-400 mb-4">Paytm</h2>
          <p className="text-sm text-gray-300 mb-2">Scan QR Code</p>
          <Image
            src="/scaner.jpeg"
            alt="Paytm QR"
            width={250}
            height={250}
            className="mx-auto rounded-md"
          />
          <p className="mt-3 text-gray-400">UPI ID: paytmdemo@upi</p>
          <button
            onClick={() => setStep("main")}
            className="mt-6 bg-yellow-500 px-6 py-2 rounded"
          >
            Back
          </button>
        </div>
      )}

      {/* Bank Transfer UI */}
      {step === "bank" && (
        <div>
          <h2 className="text-xl font-bold text-gray-300 mb-4">
            Bank Transfer
          </h2>

          {/* Select Account */}
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white mb-5"
          >
            <option value="">Select Account</option>
            {bankAccounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.bank} - {acc.accountNo}
              </option>
            ))}
          </select>

          {/* Show Selected Account Details */}
          {selectedAccount && (
            <div className="text-left space-y-3 mb-6 p-4 border border-gray-600 rounded">
              <p>
                <span className="text-gray-400">Bank:</span>{" "}
                {bankAccounts.find((acc) => acc.id === selectedAccount)?.bank}
              </p>
              <p>
                <span className="text-gray-400">Account No:</span>{" "}
                {bankAccounts.find((acc) => acc.id === selectedAccount)
                  ?.accountNo}
              </p>
              <p>
                <span className="text-gray-400">IFSC:</span>{" "}
                {bankAccounts.find((acc) => acc.id === selectedAccount)?.ifsc}
              </p>
              <p>
                <span className="text-gray-400">Name:</span>{" "}
                {bankAccounts.find((acc) => acc.id === selectedAccount)?.name}
              </p>
              <p>
                <span className="text-gray-400">Address:</span>{" "}
                {
                  bankAccounts.find((acc) => acc.id === selectedAccount)
                    ?.address
                }
              </p>
            </div>
          )}

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white mb-4"
          />
          <button
            onClick={handleBankTransfer}
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded font-semibold"
          >
            Transfer Now
          </button>
          <button
            onClick={() => setStep("main")}
            className="mt-4 bg-yellow-500 px-6 py-2 rounded"
          >
            Back
          </button>
        </div>
      )}

      {/* Close */}
      <button
        onClick={() => setShowModal(false)}
        className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}
