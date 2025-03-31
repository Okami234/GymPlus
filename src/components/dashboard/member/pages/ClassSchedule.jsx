import React from 'react';
import MemberNavbar from '../components/MemberNavbar';
import { FaCalendarAlt } from 'react-icons/fa';

const ClassSchedule = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <MemberNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Class Schedule</h1>
        {/* Add class schedule content */}
      </div>
    </div>
  );
};

export default ClassSchedule; 