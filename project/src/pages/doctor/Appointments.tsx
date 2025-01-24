import  { useState } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const appointments = [
    {
      id: 1,
      patientName: 'Ahmed Ben Salem',
      date: '2024-02-21',
      time: '09:00',
      duration: '30min',
      type: 'Consultation',
      status: 'confirmed'
    },
    {
      id: 2,
      patientName: 'Sarah Mansour',
      date: '2024-02-21',
      time: '10:00',
      duration: '45min',
      type: 'Suivi',
      status: 'pending'
    },
    {
      id: 3,
      patientName: 'Mohamed Karray',
      date: '2024-02-21',
      time: '11:00',
      duration: '30min',
      type: 'Consultation',
      status: 'confirmed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Rendez-vous</h1>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Nouveau Rendez-vous
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {appointment.patientName}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time} ({appointment.duration})
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {appointment.type}
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                  {appointment.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="text-sm text-indigo-600 hover:text-indigo-800">
                  Modifier
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Annuler
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-800">
                  Voir dossier patient
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}