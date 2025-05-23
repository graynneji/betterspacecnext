// import { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
// import { CircleDot, CheckCircle, Clock, AlertTriangle, PieChart, ArrowRight, Calendar, ClipboardList, Brain, Activity, HeartPulse } from "lucide-react";

// // Mock data for demonstration
// const mockProgress = [
//   { month: "Jan", depression: 8, anxiety: 7, wellbeing: 3 },
//   { month: "Feb", depression: 7, anxiety: 6, wellbeing: 4 },
//   { month: "Mar", depression: 6, anxiety: 6, wellbeing: 5 },
//   { month: "Apr", depression: 5, anxiety: 5, wellbeing: 6 },
//   { month: "May", depression: 4, anxiety: 4, wellbeing: 7 }
// ];

// const engagementData = [
//   { month: "Jan", attendance: 90, participation: 70, homework: 60 },
//   { month: "Feb", attendance: 100, participation: 75, homework: 65 },
//   { month: "Mar", attendance: 90, participation: 80, homework: 75 },
//   { month: "Apr", attendance: 100, participation: 85, homework: 80 },
//   { month: "May", attendance: 100, participation: 90, homework: 85 }
// ];

// export default function CareFlowAI() {
//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-slate-200">
//         <div className="flex justify-between items-center px-6 py-4">
//           <div className="flex items-center space-x-2">
//             <div className="bg-indigo-600 text-white p-1 rounded">
//               <Brain size={20} />
//             </div>
//             <h1 className="text-xl font-bold text-indigo-700">CareFlowAI</h1>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-slate-600">
//               <Calendar className="inline mr-1" size={14} /> May 20, 2025
//             </span>
//             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
//               <CircleDot className="mr-1" size={12} /> Report Generated
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Title Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-slate-800">Patient Progress Report</h2>
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
//                   ID: PAT-21905
//                 </span>
//                 <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center">
//                   <ClipboardList className="mr-2" size={16} />
//                   Export Report
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-slate-200">
//             <button
//               className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "overview"
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "hover:bg-slate-100"
//               }`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//             <button
//               className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "progress"
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "hover:bg-slate-100"
//               }`}
//               onClick={() => setActiveTab("progress")}
//             >
//               Progress Metrics
//             </button>
//             <button
//               className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "insights"
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "hover:bg-slate-100"
//               }`}
//               onClick={() => setActiveTab("insights")}
//             >
//               Insights
//             </button>
//           </div>

//           {/* Main Content Area */}
//           <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//             {activeTab === "overview" && (
//               <div className="space-y-6">
//                 {/* Diagnosis Section */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="border border-slate-200 rounded-lg p-4">
//                     <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
//                       <PieChart className="mr-2" size={18} />
//                       Primary Diagnosis
//                     </h3>
//                     <div className="bg-slate-50 p-3 rounded-md">
//                       <div className="flex items-start">
//                         <div className="flex-1">
//                           <h4 className="font-medium text-slate-800">Major Depressive Disorder (F33.1)</h4>
//                           <p className="text-sm text-slate-600 mt-1">Recurrent episode, moderate severity</p>
//                         </div>
//                         <div className="bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-medium">
//                           Moderate
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border border-slate-200 rounded-lg p-4">
//                     <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
//                       <PieChart className="mr-2" size={18} />
//                       Secondary Diagnosis
//                     </h3>
//                     <div className="bg-slate-50 p-3 rounded-md">
//                       <div className="flex items-start">
//                         <div className="flex-1">
//                           <h4 className="font-medium text-slate-800">Generalized Anxiety Disorder (F41.1)</h4>
//                           <p className="text-sm text-slate-600 mt-1">Persistent worry and tension</p>
//                         </div>
//                         <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">
//                           Mild
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Approach and Recommendations */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="border border-slate-200 rounded-lg p-4">
//                     <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
//                       <Activity className="mr-2" size={18} />
//                       Current Approach
//                     </h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start">
//                         <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Cognitive Behavioral Therapy (CBT) - weekly sessions focused on thought restructuring</span>
//                       </li>
//                       <li className="flex items-start">
//                         <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Behavioral activation - scheduled pleasant activities and exercise routine</span>
//                       </li>
//                       <li className="flex items-start">
//                         <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Medication management - coordination with psychiatrist</span>
//                       </li>
//                       <li className="flex items-start">
//                         <Clock className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Mindfulness practice - introduction phase</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="border border-slate-200 rounded-lg p-4">
//                     <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
//                       <ArrowRight className="mr-2" size={18} />
//                       Recommendations
//                     </h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start">
//                         <AlertTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Consider increasing session frequency to twice weekly for the next month</span>
//                       </li>
//                       <li className="flex items-start">
//                         <AlertTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Introduce structured sleep hygiene protocol to address insomnia</span>
//                       </li>
//                       <li className="flex items-start">
//                         <AlertTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Explore group therapy options for additional social support</span>
//                       </li>
//                       <li className="flex items-start">
//                         <AlertTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
//                         <span className="text-sm">Refine stress management techniques focusing on workplace stressors</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Treatment Goals */}
//                 <div className="border border-slate-200 rounded-lg p-4">
//                   <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
//                     <HeartPulse className="mr-2" size={18} />
//                     Treatment Goal Progress
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span className="text-sm font-medium">Reduce depressive symptoms by 50%</span>
//                         <span className="text-sm font-medium text-green-600">70% Complete</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span className="text-sm font-medium">Develop 3 effective anxiety management strategies</span>
//                         <span className="text-sm font-medium text-indigo-600">66% Complete</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "66%" }}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span className="text-sm font-medium">Return to full work schedule</span>
//                         <span className="text-sm font-medium text-amber-600">40% Complete</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div className="bg-amber-500 h-2 rounded-full" style={{ width: "40%" }}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span className="text-sm font-medium">Improve sleep quality and duration</span>
//                         <span className="text-sm font-medium text-amber-600">35% Complete</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div className="bg-amber-500 h-2 rounded-full" style={{ width: "35%" }}></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "progress" && (
//               <div className="space-y-6">
//                 <h3 className="font-semibold text-slate-700 mb-2">Symptom Severity Tracking</h3>
//                 <div className="border border-slate-200 rounded-lg p-4 bg-white">
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={mockProgress} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                       <XAxis dataKey="month" stroke="#64748b" />
//                       <YAxis stroke="#64748b" />
//                       <Tooltip contentStyle={{ borderRadius: "0.5rem", border: "1px solid #e2e8f0" }} />
//                       <Legend />
//                       <Line
//                         type="monotone"
//                         dataKey="depression"
//                         stroke="#8b5cf6"
//                         strokeWidth={2}
//                         dot={{ r: 4 }}
//                         name="Depression Score"
//                       />
//                       <Line
//                         type="monotone"
//                         dataKey="anxiety"
//                         stroke="#0ea5e9"
//                         strokeWidth={2}
//                         dot={{ r: 4 }}
//                         name="Anxiety Score"
//                       />
//                       <Line
//                         type="monotone"
//                         dataKey="wellbeing"
//                         stroke="#22c55e"
//                         strokeWidth={2}
//                         dot={{ r: 4 }}
//                         name="Wellbeing Score"
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                   <div className="mt-4 text-xs text-slate-500 text-center">
//                     Depression & Anxiety: Lower scores indicate improvement. Wellbeing: Higher scores indicate improvement.
//                   </div>
//                 </div>

//                 <h3 className="font-semibold text-slate-700 mb-2">Treatment Engagement Metrics</h3>
//                 <div className="border border-slate-200 rounded-lg p-4 bg-white">
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={engagementData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                       <XAxis dataKey="month" stroke="#64748b" />
//                       <YAxis stroke="#64748b" />
//                       <Tooltip contentStyle={{ borderRadius: "0.5rem", border: "1px solid #e2e8f0" }} />
//                       <Legend />
//                       <Bar dataKey="attendance" fill="#8b5cf6" name="Session Attendance %" />
//                       <Bar dataKey="participation" fill="#0ea5e9" name="Session Participation %" />
//                       <Bar dataKey="homework" fill="#22c55e" name="Homework Completion %" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
//                     <h4 className="text-sm font-medium text-indigo-700 mb-1">PHQ-9 Score Trend</h4>
//                     <div className="flex items-end">
//                       <span className="text-2xl font-bold text-indigo-700">9 → 5</span>
//                       <span className="ml-2 text-sm font-medium text-green-600">-44%</span>
//                     </div>
//                     <p className="text-xs text-indigo-600 mt-1">Moderate to Mild Depression</p>
//                   </div>

//                   <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
//                     <h4 className="text-sm font-medium text-blue-700 mb-1">GAD-7 Score Trend</h4>
//                     <div className="flex items-end">
//                       <span className="text-2xl font-bold text-blue-700">12 → 8</span>
//                       <span className="ml-2 text-sm font-medium text-green-600">-33%</span>
//                     </div>
//                     <p className="text-xs text-blue-600 mt-1">Moderate to Mild Anxiety</p>
//                   </div>

//                   <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
//                     <h4 className="text-sm font-medium text-emerald-700 mb-1">Quality of Life</h4>
//                     <div className="flex items-end">
//                       <span className="text-2xl font-bold text-emerald-700">42 → 68</span>
//                       <span className="ml-2 text-sm font-medium text-green-600">+62%</span>
//                     </div>
//                     <p className="text-xs text-emerald-600 mt-1">Poor to Moderate QoL</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "insights" && (
//               <div className="space-y-6">
//                 <h3 className="font-semibold text-slate-700 mb-4">Therapeutic Insights & Observations</h3>

//                 <div className="space-y-4">
//                   <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
//                     <h4 className="font-medium text-slate-800">Pattern Recognition</h4>
//                     <p className="text-sm text-slate-600 mt-2">
//                       Analysis of session notes reveals a strong correlation between workplace stressors and depressive symptom spikes.
//                       Social interaction patterns show increased isolation preceding anxiety episodes.
//                       Sleep disturbance appears to be both a trigger and consequence of mood deterioration.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
//                     <h4 className="font-medium text-slate-800">Treatment Response</h4>
//                     <p className="text-sm text-slate-600 mt-2">
//                       Most significant symptom improvement observed after introduction of behavioral activation techniques.
//                       CBT thought records show increasing ability to identify and challenge negative thought patterns.
//                       Medication adherence has been consistent, with reported side effects decreasing over time.
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
//                     <h4 className="font-medium text-slate-800">Barriers to Progress</h4>
//                     <p className="text-sm text-slate-600 mt-2">
//                       Work schedule volatility continues to interfere with consistent therapy homework completion.
//                       Family dynamics, particularly conflict with sibling, represents unresolved stressor.
//                       Perfectionism remains a cognitive barrier that limits full engagement with CBT techniques.
//                     </p>
//                   </div>

//                   <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
//                     <h4 className="font-medium text-indigo-800">AI-Generated Treatment Considerations</h4>
//                     <div className="mt-3 space-y-2">
//                       <div className="flex items-start">
//                         <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
//                           <Brain size={14} className="text-indigo-700" />
//                         </div>
//                         <p className="text-sm text-indigo-700">
//                           Consider exploring ACT (Acceptance and Commitment Therapy) techniques to address perfectionism barriers.
//                         </p>
//                       </div>
//                       <div className="flex items-start">
//                         <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
//                           <Brain size={14} className="text-indigo-700" />
//                         </div>
//                         <p className="text-sm text-indigo-700">
//                           Homework completion patterns suggest need for simpler, more accessible between-session activities.
//                         </p>
//                       </div>
//                       <div className="flex items-start">
//                         <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
//                           <Brain size={14} className="text-indigo-700" />
//                         </div>
//                         <p className="text-sm text-indigo-700">
//                           Response pattern indicates high potential benefit from increased focus on sleep hygiene protocol.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-slate-200 pt-4 mt-6">
//                   <h3 className="font-semibold text-slate-700 mb-3">Research-Based Recommendations</h3>
//                   <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
//                     <p className="text-sm text-slate-600">
//                       Based on recent research in treatment of comorbid depression and anxiety, consider introducing elements of
//                       Behavioral Activation with targeted exposure components. Meta-analysis data suggests this combined approach
//                       significantly outperforms standard CBT for this specific diagnostic profile, particularly when workplace
//                       stressors are prominent contributors.
//                     </p>
//                     <div className="flex items-center mt-3 text-xs text-slate-500">
//                       <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded mr-2">Evidence Level: Moderate</span>
//                       <span>Based on 8 RCTs, n=742</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-slate-200 py-4 px-6">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <div className="text-xs text-slate-500">
//             CareFlowAI © 2025 | Report generated on May 20, 2025
//           </div>
//           <div className="text-xs text-slate-500">
//             This report is generated using AI assistance and should be reviewed by qualified healthcare professionals.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
