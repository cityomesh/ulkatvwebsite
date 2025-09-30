"use client";
import { Calendar, PlusCircle, RefreshCcw, Receipt, PhoneCall, Wallet } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#1c1b20] text-white p-20 mt-[8rem]">
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
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded">
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
        <div className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
          <PlusCircle className="text-red-500 w-10 h-10 mb-2" />
          <p className="font-semibold">Add New Packs</p>
        </div>
        <div className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
          <RefreshCcw className="text-orange-500 w-10 h-10 mb-2" />
          <p className="font-semibold">Manage / Renew Packs</p>
        </div>
        <div className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
          <Receipt className="text-green-500 w-10 h-10 mb-2" />
          <p className="font-semibold">Transactions & Receipts</p>
        </div>
        <div className="bg-black flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
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
          <p className="text-sm text-red-400">Days Left: 4 Months 24 days</p>
        </div>
      </div>
    </div>
  );
}
