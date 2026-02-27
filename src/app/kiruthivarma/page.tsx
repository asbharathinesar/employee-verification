"use client";

import { useEffect, useState } from "react";
import { Lock, Printer, Shield, CheckCircle, Building2, Calendar, MapPin, User, Briefcase, Clock } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

// Employee data
const employeeData = {
    name: "Kiruthivarma S",
    title: "Business & Digital Transformation Intern",
    employeeId: "AA-202543",
    department: "Business & Digital Transformation",
    employmentType: "Internship",
    issueDate: "22 September 2025",
    expiryDate: "22 March 2026",
    officeLocation: "Kothagiri, Nilgiris",
    reportingTo: "Gopinathan / Founder",
    phone: "9360480748",
    companyName: "Dileka Innovations",
    companyEmail: "careers@dilekainnovations.com",
    verificationUrl: "https://employees.dileka.co/kiruthivarma",
};

// Generate a mock cryptographic hash
const generateHash = () => {
    const chars = "0123456789abcdef";
    let hash = "0x";
    for (let i = 0; i < 16; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash + "...";
};

export default function EmployeeVerificationPage() {
    const [lastVerified, setLastVerified] = useState<string>("");
    const [digitalSignature, setDigitalSignature] = useState<string>("");

    useEffect(() => {
        // Set timestamps on client side to avoid hydration mismatch
        setLastVerified("27 Feb 2026, 1:43 pm");
        setDigitalSignature(generateHash());
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-[#f8fafc] py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Security Badge Header */}
                <div className="flex justify-center mb-6 no-print">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium shadow-lg">
                        <Lock className="w-4 h-4 text-cyan-400" />
                        <span>Secure Verification Portal</span>
                        <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                </div>

                {/* Main Verification Card */}
                <div className="verification-card bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print-break">
                    {/* Header Accent Bar */}
                    <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600" />

                    {/* Profile Section */}
                    <div className="px-6 sm:px-10 pt-8 pb-6 text-center border-b border-slate-100">
                        {/* Avatar */}
                        <div className="inline-block avatar-ring rounded-full mb-5">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="/Kiruthivarma S.jpg"
                                    alt={employeeData.name}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Name & Title */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                            {employeeData.name}
                        </h1>
                        <p className="text-slate-500 text-base sm:text-lg">
                            {employeeData.title}
                        </p>

                        {/* Verification Status */}
                        <div className="mt-5 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                                <span className="relative flex h-3 w-3">
                                    <span className="pulse-glow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-green-700 font-semibold text-sm">
                                    Active Employee
                                </span>
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                        </div>
                    </div>

                    {/* Data Grid */}
                    <div className="px-6 sm:px-10 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Employee ID */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <User className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Employee ID
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.employeeId}
                                    </p>
                                </div>
                            </div>

                            {/* Department */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <Building2 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Department
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.department}
                                    </p>
                                </div>
                            </div>

                            {/* Employment Type */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Employment Type
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.employmentType}
                                    </p>
                                </div>
                            </div>

                            {/* Issue Date */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <Calendar className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Issue Date
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.issueDate}
                                    </p>
                                </div>
                            </div>

                            {/* Valid Until */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Valid Until
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.expiryDate}
                                    </p>
                                </div>
                            </div>

                            {/* Office Location */}
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <MapPin className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Office Location
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.officeLocation}
                                    </p>
                                </div>
                            </div>

                            {/* Reporting To - Full Width */}
                            <div className="sm:col-span-2 flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <User className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                                        Reporting To
                                    </p>
                                    <p className="text-slate-900 font-semibold mt-0.5">
                                        {employeeData.reportingTo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Digital Signature Section */}
                    <div className="px-6 sm:px-10 py-6 bg-slate-50 border-t border-slate-100">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            {/* QR Code */}
                            <div className="qr-container p-4 rounded-xl">
                                <QRCodeSVG
                                    value={employeeData.verificationUrl}
                                    size={100}
                                    level="H"
                                    includeMargin={false}
                                    bgColor="#f8fafc"
                                    fgColor="#0f172a"
                                />
                            </div>

                            {/* Signature Details */}
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                                    Digital Signature
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center sm:justify-start gap-2">
                                        <span className="text-xs text-slate-500">Hash:</span>
                                        <code className="text-xs bg-slate-200 px-2 py-1 rounded font-mono text-slate-700">
                                            {digitalSignature || "Loading..."}
                                        </code>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-start gap-2">
                                        <span className="text-xs text-slate-500">Last Verified:</span>
                                        <span className="text-xs text-slate-700 font-medium">
                                            {lastVerified || "Loading..."}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Print Button */}
                    <div className="px-6 sm:px-10 py-4 border-t border-slate-100 no-print">
                        <button
                            onClick={handlePrint}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors duration-200"
                        >
                            <Printer className="w-5 h-5" />
                            <span>Print to PDF</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="px-6 sm:px-10 py-5 bg-slate-900 text-center">
                        <p className="text-slate-400 text-sm">
                            This is an official{" "}
                            <span className="text-cyan-400 font-semibold">
                                {employeeData.companyName}
                            </span>{" "}
                            employment record.
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                            For HR inquiries, contact{" "}
                            <a
                                href={`mailto:${employeeData.companyEmail}`}
                                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                {employeeData.companyEmail}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Security Notice */}
                <p className="text-center text-slate-400 text-xs mt-6 no-print">
                    🔒 This verification page is secured and monitored.
                </p>
            </div>
        </main>
    );
}
